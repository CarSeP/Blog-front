import { prisma } from "@/services/prisma";
import { NextResponse } from "next/server";

interface ParamsType {
  params: {
    slug: string;
  };
}

export async function GET(req: Request, { params }: ParamsType) {
  const param = await params;
  const slug = param.slug;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}
