'use client';

import React, { useEffect, useState } from 'react';

export default function Bubbles() {
  const [mounted, setMounted] = useState(false);
  const [bubbles] = useState<any[]>(() => {
    const newBubbles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 60 + 20;
      newBubbles.push({
        id: i,
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        bottom: `-${size}px`,
        duration: `${Math.random() * 8 + 6}s`,
        delay: `${Math.random() * 8}s`,
        opacity: Math.random() * 0.3 + 0.05,
      });
    }
    return newBubbles;
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.width,
            height: bubble.height,
            left: bubble.left,
            bottom: bubble.bottom,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
            opacity: bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}
