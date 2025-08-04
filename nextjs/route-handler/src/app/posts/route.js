import { posts } from "./data";
import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request.nextUrl.searchParams.get("userId"));
  const searchParams = request.nextUrl.searchParams;
  const userId = searchParams.get("userId");

  if (userId) {
    const postsFilter = posts.filter((p) => p.userId === parseInt(userId));
    return NextResponse.json(postsFilter, { status: 200 });
  }

  return NextResponse.json(posts);
}

export async function POST(request) {
  const post = await request.json();
  const newPost = {
    id: posts.length + 1,
    ...post,
  };

  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
