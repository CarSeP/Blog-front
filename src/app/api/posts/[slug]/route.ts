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

export async function PUT(req: Request, { params }: ParamsType) {
  const slug = params.slug;
  const data = await req.json();
  const { title, description } = data;

  const post = await prisma.post.findUnique({ where: { slug } });
  if (!post) {
    return NextResponse.json({ message: "Post not found" }, { status: 404 });
  }

  let newSlug = slug;
  if (title) {
    newSlug = title.toLowerCase().split(" ").join("-");
  }

  try {
    const updatedPost = await prisma.post.update({
      where: { slug },
      data: {
        title: title ?? post.title,
        description: description ?? post.description,
        slug: newSlug,
      },
    });
    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating the post" },
      { status: 500 }
    );
  }
}
