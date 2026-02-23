
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { getImageById } from '@/lib/placeholder-images';

const technicalProjectsData = [
  {
    id: 'tech-1',
    title: 'Embedded OS Flashing CLI Tool',
    description: 'Developed a Bash-based CLI utility to automate flashing of custom Yocto Linux images (.wic, .wic.xz) onto embedded memory devices, reducing deployment time and minimizing manual flashing errors during hardware validation cycles.',
    tags: ['Bash', 'Yocto', 'Linux', 'Automation', 'Embedded'],
    imageId: 'project-6',
  },
  {
    id: 'tech-2',
    title: 'PyDelog – Python Logging Utility (Published on PyPI)',
    description: 'Published a lightweight Python logging utility package on PyPI to simplify structured logging workflows by implementing modular logging features with configurable output formats and levels.',
    tags: ['Python', 'PyPI', 'Logging', 'Open Source'],
    imageId: 'project-7',
    link: 'https://pypi.org/project/pydelog',
    linkText: 'View on PyPI'
  },
  {
    id: 'tech-3',
    title: 'AI Text Summarizer',
    description: 'Built a BART-Large CNN based summarization tool that includes capabilities to translate to any language, developed using a stack of Python, React (Vite), and Tailwind.',
    tags: ['Python', 'React', 'Tailwind', 'BART', 'NLP'],
    imageId: 'project-8',
  },
  {
    id: 'tech-4',
    title: 'Visitor Management System (OCR)',
    description: 'Automated visitor entry systems using OCR extraction, built with a technical stack comprising React and Pytesseract for computer vision processing.',
    tags: ['React', 'Python', 'OCR', 'Pytesseract', 'Computer Vision'],
    imageId: 'project-9',
  },
  {
    id: 'tech-5',
    title: 'Linux Wallpaper Automator',
    description: 'Developed a custom shell script tool for automatic wallpaper updates on Ubuntu Linux, utilizing Cron jobs to run the script automatically at scheduled intervals.',
    tags: ['Shell Scripting', 'Ubuntu', 'Linux', 'Cron', 'Automation'],
    imageId: 'project-10',
  }
];

export default function TechnicalProjects() {
  return (
    <section id="projects" className="container mx-auto py-16 md:py-24 px-4 my-16">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Technical Projects & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {technicalProjectsData.map((project) => {
          const image = getImageById(project.imageId);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl border-border/50">
              <div className="relative h-56 w-full">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="flex flex-col flex-grow p-8 -mt-12 relative z-10 bg-card rounded-t-3xl">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow mb-6">
                  <CardDescription className="text-foreground/80 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-0 mt-auto flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.link && (
                    <Button variant="outline" size="sm" asChild className="mt-2">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.linkText}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
