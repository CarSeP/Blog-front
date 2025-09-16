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
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: true,
    },
  });

  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(post);
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  try {
    const deletedPost = await prisma.post.delete({
      where: { slug },
    });

    return NextResponse.json(deletedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Post not found or error deleting post" },
      { status: 404 }
    );
  }
}
