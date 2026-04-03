import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import portfolioData from "@/data/portfolio.json";

export function ProjectPage() {
  const { id } = useParams();
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 text-center text-muted-foreground text-base">
        Project not found.
      </div>
    );
  }

  const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
  const prevProject = portfolioData.projects[currentIndex - 1];
  const nextProject = portfolioData.projects[currentIndex + 1];

  return (
    <main className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
      {/* Back */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="-ml-2 text-muted-foreground">
          <Link to="/projects">
            <ArrowLeft className="w-4 h-4 mr-1" /> All Projects
          </Link>
        </Button>
      </div>

      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-xs font-medium">{project.type}</Badge>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-5">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {project.description}
        </p>
        <div className="flex gap-3 mt-7">
          <Button variant="outline" size="default">
            <ExternalLink className="w-4 h-4 mr-1.5" /> Live Demo
          </Button>
          <Button variant="outline" size="default">
            {/* Inline GitHub SVG */}
            <svg className="w-4 h-4 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </Button>
        </div>
      </header>

      {/* Cover Image */}
      <div className="rounded-xl overflow-hidden border border-border bg-muted mb-12 aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>

      {/* Details */}
      {project.details && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <Card className="md:col-span-2">
            <CardContent className="p-7">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                The Challenge
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.details.challenge}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-7 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium mb-1">Role</p>
                  <p className="text-sm font-semibold">{project.details.role}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium mb-1">Duration</p>
                  <p className="text-sm font-semibold">{project.details.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardContent className="p-7">
              <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">
                The Solution
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                {project.details.solution}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Prev / Next */}
      <Separator className="mb-8" />
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {prevProject ? (
          <Link to={`/project/${prevProject.id}`} className="group flex flex-col items-start flex-1">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium mb-2">
              Previous
            </span>
            <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-base font-semibold">{prevProject.title}</span>
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextProject ? (
          <Link to={`/project/${nextProject.id}`} className="group flex flex-col md:items-end flex-1">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium mb-2">
              Next
            </span>
            <div className="flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
              <span className="text-base font-semibold">{nextProject.title}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </main>
  );
}