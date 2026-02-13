import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

// Yazıları getir
export async function GET() {
  try {
    const fileContents = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileContents);
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}

// Yeni yazı ekle
export async function POST(request: Request) {
  try {
    const newPost = await request.json();
    const fileContents = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileContents);
    
    const postWithId = {
      ...newPost,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    posts.unshift(postWithId);
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
    
    return NextResponse.json(postWithId);
  } catch (error) {
    return NextResponse.json({ error: 'Yazı kaydedilemedi' }, { status: 500 });
  }
}

// Yazı sil
export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    const fileContents = fs.readFileSync(postsFilePath, 'utf8');
    let posts = JSON.parse(fileContents);
    
    posts = posts.filter((post: any) => post.id !== id);
    fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Yazı silinemedi' }, { status: 500 });
  }
}
