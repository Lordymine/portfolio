import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Password Generator",
    description: "A modern, secure password generator built with Next.js 16 and Tailwind CSS v4. Features real-time strength analysis and customizable options.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Lordymine/password-generator",
    demo: "https://password-generator-lordymines-projects.vercel.app",
    featured: true
  },
  {
    title: "Task Manager API",
    description: "RESTful API built with Clean Architecture principles. Domain-Driven Design, Repository Pattern, and comprehensive test coverage with TDD.",
    tags: ["Node.js", "TypeScript", "DDD", "TDD", "PostgreSQL"],
    github: "#",
    demo: "#",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture. Event-driven design, CQRS pattern, and distributed systems.",
    tags: ["Next.js", "Node.js", "Microservices", "Redis", "Docker"],
    github: "#",
    demo: "#",
    featured: false
  },
  {
    title: "Real-Time Chat Application",
    description: "WebSocket-based chat platform with end-to-end encryption. Features real-time messaging, file sharing, and video calls.",
    tags: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building 
            scalable, well-architected applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border/50 flex flex-col ${
                project.featured ? "ring-1 ring-primary/20" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  {project.featured && (
                    <Badge variant="secondary" className="ml-2 shrink-0">
                      Featured
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="outline" 
                      className="text-xs border-border/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
