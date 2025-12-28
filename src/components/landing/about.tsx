
export default function About() {
  return (
    <section id="about" className="container mx-auto py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-primary text-center">
          About Me
        </h2>
        <div className="space-y-4 text-lg text-foreground/80 text-center">
          <p>
           I’m a software engineer focused on embedded systems, computer vision, and edge AI. I build efficient, production-ready solutions on embedded Linux platforms, working across the full stack—from low-level system integration to real-time AI pipelines.
          </p>
          <p>
           I enjoy designing modular, maintainable architectures, optimizing performance on edge devices, and solving problems at the hardware–software boundary. I value clean code, clear documentation, and building systems that are reliable, scalable, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}
