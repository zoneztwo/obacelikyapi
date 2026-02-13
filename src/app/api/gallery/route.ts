import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const galleryFilePath = path.join(process.cwd(), 'data', 'gallery.json');

export async function GET() {
  try {
    if (!fs.existsSync(galleryFilePath)) {
      fs.writeFileSync(galleryFilePath, '[]');
    }
    const fileContents = fs.readFileSync(galleryFilePath, 'utf8');
    const gallery = JSON.parse(fileContents);
    return NextResponse.json(gallery);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newItem = await request.json();
    const fileContents = fs.readFileSync(galleryFilePath, 'utf8');
    const gallery = JSON.parse(fileContents);
    
    const itemWithId = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    gallery.unshift(itemWithId);
    fs.writeFileSync(galleryFilePath, JSON.stringify(gallery, null, 2));
    
    return NextResponse.json(itemWithId);
  } catch (error) {
    return NextResponse.json({ error: 'Galeri öğesi kaydedilemedi' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const fileContents = fs.readFileSync(galleryFilePath, 'utf8');
    let gallery = JSON.parse(fileContents);
    
    gallery = gallery.filter((item: any) => item.id !== id);
    fs.writeFileSync(galleryFilePath, JSON.stringify(gallery, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Galeri öğesi silinemedi' }, { status: 500 });
  }
}
