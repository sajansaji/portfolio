
'use client';

import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <a href="/" className="font-headline text-2xl font-bold text-primary">
          Sajan Saji
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
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
          <ThemeToggle />
          <Button asChild>
            <a href="/Sajan_Saji_Resume.pdf" download="Sajan_Saji_Resume.pdf">
              <Download className="mr-2" />
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
           <ThemeToggle />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="font-headline text-2xl font-bold text-primary">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-4">
                <Button asChild variant="secondary" size="lg">
                  <a
                    href="/Sajan_Saji_Resume.pdf"
                    download="Sajan_Saji_Resume.pdf"
                    onClick={() => setIsSheetOpen(false)}
                  >
                    <Download className="mr-2" />
                    Download Resume
                  </a>
                </Button>

                <Separator className="my-4" />
                
                <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/sajansaji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => setIsSheetOpen(false)}>
                        <Github />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://linkedin.com/in/sajansaji" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => setIsSheetOpen(false)}>
                        <Linkedin />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a href="mailto:sajansaji2002@gmail.com" aria-label="Email" onClick={() => setIsSheetOpen(false)}>
                        <Mail />
                        </a>
                    </Button>
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

    
