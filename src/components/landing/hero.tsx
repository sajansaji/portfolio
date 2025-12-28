import { Button } from '@/components/ui/button';
import Quote from '@/components/landing/quote';

export default function Hero() {
  return (
    <section id="hero" className="container mx-auto flex h-[calc(100vh-4rem)] min-h-[500px] flex-col items-center justify-center px-4 text-center">
      <div className="flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-primary">
          Software Developer
        </h1>
        <p className="font-headline mt-4 max-w-3xl text-lg md:text-xl text-foreground/80">
          I design and develop software for embedded systems and devices
        </p>
        <div className="mt-8 flex gap-4">
          <Button size="lg" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>
        <Quote />
      </div>
    </section>
  );
}
