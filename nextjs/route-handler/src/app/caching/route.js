import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

const dynamic = "force-dynamic";

export async function GET(request) {
  //   console.log(request.nextUrl.searchParams.get("userId"));

  console.log((await cookies()).get("theme"));
  const headersList = headers();
  console.log(headersList.get("Authorization"));
  console.log(request.cookies.get("token"));
  return NextResponse.json({ time: new Date().toISOString() });
}
