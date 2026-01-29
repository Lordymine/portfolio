import { Card, CardContent } from "@/components/ui/card";
import { Code2, Layers, TestTube, GraduationCap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Layers,
      title: "Clean Architecture",
      description: "Building maintainable systems with clear separation of concerns and domain-driven design principles."
    },
    {
      icon: Code2,
      title: "Domain-Driven Design",
      description: "Modeling complex business domains with bounded contexts, aggregates, and ubiquitous language."
    },
    {
      icon: TestTube,
      title: "Test-Driven Development",
      description: "Writing tests first to ensure code quality, better design, and confidence in refactoring."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Software Engineering student (Class of 2029), always exploring new technologies and patterns."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a software engineer focused on building robust, scalable applications 
            with modern architectures and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="bg-secondary/50 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
