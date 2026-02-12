import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "posts.json");
    if (!fs.existsSync(filePath)) {
       return NextResponse.json([]);
    }
    const data = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error: any) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const newPost = await request.json();
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "posts.json");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let posts = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      try {
        posts = JSON.parse(data);
      } catch (e) {
        posts = [];
      }
    }

    const postWithId = {
      ...newPost,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("tr-TR"),
      status: "Yayında"
    };

    posts.push(postWithId);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2), "utf8");

    return NextResponse.json(postWithId);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
