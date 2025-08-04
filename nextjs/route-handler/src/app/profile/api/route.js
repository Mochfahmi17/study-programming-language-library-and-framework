import { headers, cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
  //   const headersList = new Headers(request.headers);
  const headersList = headers();
  console.log(headersList.get("Authorization"));
  console.log(request.cookies.get("token"));

  (await cookies()).set("theme", "dark");
  console.log((await cookies()).get("theme"));

  return NextResponse.json("<h1>Profile Data</h1>", { headers: { "Content-Type": "text/html", "Set-Cookie": "token=test123" } });
}
