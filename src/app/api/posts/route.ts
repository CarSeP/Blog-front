import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });
  return NextResponse.json(posts);
}
