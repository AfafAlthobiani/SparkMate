'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog';
import BlogModal from './BlogModal';

export default function Blog() {
  const [showModal, setShowModal] = useState(false);
  
  // Show only the first 2 posts in the section
  const previewPosts = BLOG_POSTS.slice(0, 2);

  return (
    <section id="blog" className="py-24 px-[5%] bg-white">
      <div className="text-center mb-16">
        <p className="text-sm font-bold tracking-[2px] text-[#48C2C1] uppercase mb-3">المدونة</p>
        <h2 className="text-3xl md:text-5xl font-black text-[#0d1b2a] mb-3 leading-tight">آخر نصائحنا لبيت يبرق بكل زاوية</h2>
        <p className="text-base text-[#6b7a8d] max-w-xl mx-auto leading-relaxed">نشارككم خبرتنا في عالم النظافة ونبسط لكم الحلول عشان بيوتكم ومكاتبكم دايم تكون واجهة مشرفة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto mb-16">
        {previewPosts.map((post, idx) => (
          <motion.div 
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="relative h-64 w-full mb-6 overflow-hidden rounded-[28px] shadow-sm">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-[#3476A8] shadow-sm">
                {post.date}
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-black text-[#0d1b2a] mb-3 group-hover:text-[#48C2C1] transition-colors leading-tight">
              {post.title}
            </h3>
            <p className="text-sm text-[#6b7a8d] leading-relaxed mb-4">
              {post.excerpt}
            </p>
            <div className="text-[#3476A8] font-bold text-sm flex items-center gap-1">
              اقرأ المزيد 
              <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <button 
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 bg-[#f0f8ff] text-[#3476A8] px-8 py-3.5 rounded-full text-base font-bold hover:bg-[#3476A8] hover:text-white transition-all shadow-sm border-2 border-[#3476A8]/10"
        >
          عرض كل المقالات
          <span className="text-lg">📑</span>
        </button>
      </div>

      {showModal && <BlogModal onClose={() => setShowModal(false)} />}
    </section>
  );
}
