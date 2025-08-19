import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { validate } from "email-validator";

export async function POST(req: Request) {
  try {
    const { password, email, name, description, username } = await req.json();

    if (!email || !username || !name || !password) {
      return NextResponse.json(
        { message: "Email, username, password, and name are required." },
        { status: 400 }
      );
    }

    const isValidEmail = validate(email);

    if (!isValidEmail) {
      return NextResponse.json(
        { message: "Email is invalid", errorType: "emailInvalid" },
        { status: 400 }
      );
    }

    const account = await prisma.userAccount.findUnique({
      where: {
        email: email.toUpperCase().trim(),
      },
      include: {
        user: true,
      },
    });

    if (account) {
      return NextResponse.json(
        { message: "Email already exists.", errorType: "emailExist" },
        { status: 409 }
      );
    }

    const user = await prisma.user.findUnique({
      where: {
        username: username.toLowerCase(),
      },
    });

    if (user) {
      return NextResponse.json(
        { message: "Username already exists.", errorType: "username" },
        { status: 409 }
      );
    }

    await prisma.user.create({
      data: {
        name,
        username: username.toLowerCase(),
        description,
        account: {
          create: {
            email: email.toUpperCase(),
            password: bcrypt.hashSync(password, 10),
            role: "USER",
          },
        },
      },
    });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 }
    );
  }
}
