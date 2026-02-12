"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";

export default function BlogPostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blog", { cache: "no-store" })
      .then(res => res.json())
      .then(data => {
        const found = data.find((p: any) => p.id === id);
        setPost(found);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="pt-40 text-center font-bold italic">Yükleniyor...</div>;
  if (!post) return <div className="pt-40 text-center font-bold italic text-oba-dark">Yazı bulunamadı.</div>;

  return (
    <div className="pt-40 pb-24 bg-[#F8F9FC] min-h-screen text-oba-dark">
      <div className="container mx-auto px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-oba-dark font-black uppercase text-xs tracking-widest mb-12 hover:text-oba-orange transition-colors">
          <ArrowLeft size={18} /> Blog Listesine Dön
        </Link>

        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="relative h-[500px] w-full">
            <Image src={post.imageUrl || "/assets/images/oba-celik-yapi-galeri.png"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-10 left-10 bg-oba-orange text-white px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-xl">
              {post.category}
            </div>
          </div>

          <div className="p-12 md:p-20">
            <div className="flex flex-wrap items-center gap-8 mb-8 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><Clock size={16} className="text-oba-orange" /> {post.date}</div>
              <div className="flex items-center gap-2"><Tag size={16} className="text-oba-orange" /> {post.category}</div>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-oba-dark tracking-tighter mb-10 leading-tight uppercase italic">{post.title}</h1>
            
            <div className="prose prose-xl max-w-none text-gray-500 font-medium leading-relaxed space-y-6">
              <p className="text-2xl text-oba-dark font-bold italic border-l-4 border-oba-orange pl-8 mb-10">
                {post.excerpt}
              </p>
              <p>
                Oba Çelik Yapı kalitesiyle inşa edilen tüm yapılarımızda olduğu gibi, bu içeriğimizde de modern çelik yapı sistemlerinin hayatımıza kattığı değeri ve mühendislik vizyonumuzu sizlerle paylaşıyoruz. 
              </p>
              <p>
                Detaylı bilgi ve projelendirme süreçleri için uzman ekiplerimizle her zaman iletişime geçebilirsiniz. Geleceği çelikle inşa ederken güvenliğiniz ve konforunuz bizim önceliğimizdir.
              </p>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-100 flex justify-between items-center">
               <div className="flex items-center gap-4 text-oba-dark font-black text-sm uppercase tracking-widest cursor-pointer">
                  <Share2 size={20} className="text-oba-orange" /> Paylaş
               </div>
               <Link href="/iletisim" className="bg-oba-orange text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-oba-orange/20 hover:scale-105 transition-transform">
                  Hemen Teklif Al
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
