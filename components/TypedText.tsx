'use client';
import { useEffect, useState } from 'react';

export default function TypedText({ words, className = '' }: { words: string[]; className?: string }) {
  const [text, setText] = useState('');
  const [wi, setWi]   = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[wi];
    const timeout = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), 1600);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setWi((wi + 1) % words.length); }
      }
    }, del ? 45 : 95);
    return () => clearTimeout(timeout);
  }, [text, del, wi, words]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-1 animate-blink" />
    </span>
  );
}
