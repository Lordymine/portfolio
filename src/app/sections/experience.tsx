import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Open to Opportunities",
    company: "Software Engineer",
    period: "Present",
    description: "Seeking new challenges to apply Clean Architecture, DDD and TDD in impactful projects.",
    current: true
  },
  {
    type: "education",
    title: "Bachelor of Software Engineering",
    company: "University",
    period: "2025 - 2029 (Expected)",
    description: "Focus on software architecture, design patterns, and modern development practices.",
    current: false
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and academic background
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border/50" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-4 sm:gap-8">
                {/* Icon */}
                <div className={`
                  relative z-10 flex items-center justify-center w-8 h-8 sm:w-16 sm:h-16 rounded-full 
                  ${exp.current ? "bg-primary" : "bg-secondary"}
                  shrink-0
                `}>
                  {exp.type === "work" ? (
                    <Briefcase className={`h-4 w-4 sm:h-6 sm:w-6 ${exp.current ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  ) : (
                    <GraduationCap className={`h-4 w-4 sm:h-6 sm:w-6 ${exp.current ? "text-primary-foreground" : "text-muted-foreground"}`} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-1 sm:pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    {exp.current && (
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary w-fit">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-primary font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
