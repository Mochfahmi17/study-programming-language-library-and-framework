import { posts } from "../data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log("params ku: ", params);

  const post = posts.find((p) => p.id === parseInt(params.id));
  return NextResponse.json(post);
}

export async function PATCH(request, { params }) {
  const { text } = await request.json();
  const index = posts.findIndex((post) => post.id === parseInt(params.id));

  posts[index].text = text;
  return NextResponse.json(posts[index]);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const index = posts.findIndex((post) => post.id === parseInt(params.id));

  posts[index] = { id: parseInt(params.id), ...body };
  return NextResponse.json(posts[index]);
}

export async function DELETE(request, { params }) {
  const index = posts.findIndex((post) => post.id === parseInt(params.id));
  posts.splice(index, 1);

  return NextResponse.json({ message: `Delete Resource with id ${params.id} succeed` }, { status: 200 });
}
