"use client";

import { useEffect, useState } from 'react';

const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Walking on water and developing software from a specification are easy if both are frozen.",
    author: "Edward V. Berard"
  },
  {
    text: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies.",
    author: "C.A.R. Hoare"
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  }
];

export default function Quote() {
  const [quote, setQuote] = useState<{ text: string; author: string } | null>(null);

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  if (!quote) {
    return <div className="h-20 mt-6" />; // Placeholder for layout shift
  }

  return (
    <div className="mt-6 max-w-3xl">
      <blockquote className="border-l-2 border-primary pl-4 italic text-foreground/70">
        "{quote.text}"
      </blockquote>
      <p className="mt-2 text-right text-sm font-medium text-foreground/50">
        - {quote.author}
      </p>
    </div>
  );
}
