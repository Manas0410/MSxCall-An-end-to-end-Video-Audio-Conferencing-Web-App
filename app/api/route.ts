// import { NextResponse } from "next/server";

// export const dynamic = "force-dynamic";
// export async function GET(request: Request, response: NextResponse) {
//   response.send("chotuus");
// }

const data = { name: "billiii" };
export async function GET() {
  return Response.json({ data });
}
