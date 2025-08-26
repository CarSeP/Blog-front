import { prisma } from "@/services/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { password, email } = await req.json();

    if (!password || !email) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 }
      );
    }

    const account = await prisma.userAccount.findUnique({
      where: {
        email: email.toUpperCase().trim(),
      },
    });

    if (!account) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 }
      );
    }

    const match = await bcrypt.compare(password, account.password);

    if (!match) {
      return NextResponse.json(
        { message: "Invalid credentials." },
        { status: 401 }
      );
    }

    const cookieStore = await cookies();
    const token = jwt.sign({ id: account.id }, process.env.JWT_SECRET || "");
    cookieStore.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      path: "/",
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    return NextResponse.json({ message: "Login successful." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
