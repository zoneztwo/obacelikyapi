import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

const GALLERY_FILE = path.join(process.cwd(), "data", "gallery.json");

export async function GET() {
  try {
    if (!fs.existsSync(GALLERY_FILE)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(GALLERY_FILE, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json([]);
  }
}

export async function POST(request: Request) {
  try {
    const { url, title } = await request.json();
    let gallery = [];
    if (fs.existsSync(GALLERY_FILE)) {
      gallery = JSON.parse(fs.readFileSync(GALLERY_FILE, "utf8"));
    }
    const newItem = { id: Date.now().toString(), url, title: title || "Oba Çelik Yapı Proje" };
    gallery.push(newItem);
    fs.writeFileSync(GALLERY_FILE, JSON.stringify(gallery, null, 2));
    return NextResponse.json(newItem);
  } catch (error) {
    return NextResponse.json({ error: "Galeriye eklenemedi" }, { status: 500 });
  }
}
