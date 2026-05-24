'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/blog';

interface BlogModalProps {
  onClose: () => void;
}

export default function BlogModal({ onClose }: BlogModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-[#f8feff] rounded-[40px] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl border border-white"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-8 border-b border-[#e0f7f7] bg-white flex justify-between items-center shrink-0">
            <div>
              <h3 className="text-2xl font-black text-[#0d1b2a] mb-1">مدونة رفيق اللمعة ✍️</h3>
              <p className="text-sm text-[#48C2C1] font-bold">رفيقك في النظافة واللمعان</p>
            </div>
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-[#f0f8ff] text-[#3476A8] flex items-center justify-center text-2xl hover:bg-[#3476A8] hover:text-white transition-all shadow-sm"
            >
              ✕
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-16">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="max-w-3xl mx-auto"
              >
                <div className="relative h-64 md:h-80 w-full mb-8 overflow-hidden rounded-[32px] shadow-lg">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-xs font-black text-[#3476A8] shadow-sm">
                    {post.date}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-[#0d1b2a] mb-6 leading-tight">
                  {post.title}
                </h2>
                
                <div className="text-base md:text-lg text-[#0d1b2a]/80 leading-relaxed whitespace-pre-wrap">
                  {post.content}
                </div>

                {idx < BLOG_POSTS.length - 1 && (
                  <div className="mt-16 pt-1 border-t border-dashed border-[#e0f7f7]" />
                )}
              </motion.article>
            ))}
          </div>

          {/* Footer */}
          <div className="p-6 bg-white border-t border-[#e0f7f7] text-center shrink-0">
            <button 
              onClick={onClose}
              className="bg-[#3476A8] text-white px-10 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              إغلاق المدونة
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
