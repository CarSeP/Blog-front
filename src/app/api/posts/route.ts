import { prisma } from "@/services/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const pageSize = Number(req.nextUrl.searchParams.get("pageSize"));
  const page = Number(req.nextUrl.searchParams.get("page"));

  const error = [];
  let whereCondition = {};

  if (!pageSize) {
    error.push("PageSize is required");
  } else if (!Number.isInteger(pageSize)) {
    error.push("PageSize must be an int");
  } else if (pageSize < 1) {
    error.push("PageSize cannot be less than 1");
  }

  if (!page) {
    error.push("Page is required");
  } else if (!Number.isInteger(Number(page))) {
    error.push("Page must be an int");
  } else if (page < 1) {
    error.push("Page cannot be less than 1");
  }

  if (error.length) {
    return NextResponse.json({ message: error }, { status: 400 });
  }

  const title = req.nextUrl.searchParams.get("title");

  if (title) {
    whereCondition = {
      title: {
        contains: title,
      },
    };
  }

  const [paginatedResults, totalCount] = await prisma.$transaction([
    prisma.post.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        author: true,
      },
      where: whereCondition,
    }),
    prisma.post.count({ where: whereCondition }),
  ]);

  return NextResponse.json({
    page,
    pageSize,
    totalCount,
    date: new Date(),
    totalPage: Math.ceil(totalCount / pageSize),
    posts: paginatedResults,
  });
}
