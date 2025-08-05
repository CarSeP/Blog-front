import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

interface ParamsType {
  params: {
    username: string;
  };
}

export async function GET(req: Request, { params }: ParamsType) {
  const param = await params;
  const username = param.username;
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
    include: {
      posts: true,
    },
  });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json(user);
}
