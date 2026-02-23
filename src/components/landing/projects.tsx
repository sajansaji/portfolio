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
import { getImageById } from '@/lib/placeholder-images';

const projectsData = [
  {
    id: 'project-5',
    title: 'Advanced Driver Monitoring System',
    description: 'Developed a real-time ADAS object detection system on an embedded platform that processes video frames to detect obstacles, pedestrians, and vehicles, generates driver warnings, and logs event-based video data, currently functioning as a Level 0 warning-only system',
    tags: ['OpenCV', 'Python', 'GStreamer', 'Embedded Linux', 'SOME/IP', 'AI', 'Object detection'],
    imageId: 'project-5',
  },
  {
    id: 'project-1',
    title: 'Driver Monitoring System',
    description: 'Developed a real-time Driver Monitoring System on an embedded Linux platform using image classification, performing continuous AI inference to detect critical driver states, logging events via SOME/IP, and sharing triggered video clips with detailed logs to a connected server within the same network.',
    tags: ['Python', 'C++', 'GStreamer', 'TI Edge AI SDK', 'Embedded Linux', 'Yocto', 'Image classification', 'SOME/IP'],
    imageId: 'project-1',
  },
  {
    id: 'project-2',
    title: 'vSomeIP-Based Inter-Processor Communication',
    description: 'Implemented reliable inter-processor communication between embedded Linux and Android systems to transmit AI inference results in real time using vSomeIP.',
    tags: ['C++', 'vSomeIP', 'Linux IPC', 'Embedded Networking'],
    imageId: 'project-2',
  },
  {
    id: 'project-3',
    title: 'Custom Yocto Image & SDK Integration',
    description: 'Created and maintained custom Yocto images for production deployment, integrating AI runtimes, services, systemd units, networking configuration, and optimized boot behavior.',
    tags: ['Yocto', 'BitBake', 'systemd', 'Embedded Linux', 'Shell scripting'],
    imageId: 'project-3',
  },
  {
    id: 'project-4',
    title: 'Edge AI Model Compilation & Optimization',
    description: 'Compiled and optimized custom ONNX models for edge deployment using TI’s TIDL toolchain, achieving efficient inference on resource-constrained hardware.',
    tags: ['Edgeai Studio', 'ONNX', 'TIDL'],
    imageId: 'project-4',
  }
];

export default function Projects() {
  return (
    <section id="experience" className="container mx-auto py-16 md:py-24 px-4">
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Professional Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const image = getImageById(project.imageId);
          return (
            <Card key={project.id} className="flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border-primary/10">
              <div className="relative h-48 w-full bg-accent/5">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className={project.id === 'project-4' ? 'object-contain p-4' : 'object-cover'}
                    data-ai-hint={image.imageHint}
                  />
                )}
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow mb-4">
                  <CardDescription className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-0 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
