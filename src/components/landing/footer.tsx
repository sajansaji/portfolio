"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-accent/10 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-foreground/60 text-sm mb-4 md:mb-0">
          &copy; {year} Sajan Saji. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/sajansaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/sajansaji" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="mailto:sajansaji2002@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
