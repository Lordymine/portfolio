import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL"]
  },
  {
    title: "Architecture",
    skills: ["Clean Architecture", "DDD", "Microservices", "CQRS"]
  },
  {
    title: "Practices",
    skills: ["TDD", "CI/CD", "Git", "Agile/Scrum"]
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and practices I use to build quality software
          </p>
        </div>

        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-sm px-3 py-1 bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              {index < skillCategories.length - 1 && (
                <Separator className="mt-8 bg-border/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
