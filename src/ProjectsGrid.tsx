import { motion } from "motion/react";
import { Link } from "react-router";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";
import portfolioData from "@/data/portfolio.json";

export function ProjectsGrid() {
  return (
    <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">
            01. Selected Works
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            All Projects
          </h1>
          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            A curated selection of technical solutions — from systems programming to full-stack products.
          </p>
        </motion.div>
        <Separator className="mt-8" />
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolioData.projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
          >
            <Link to={`/project/${project.id}`} className="h-full block group">
              <Card className="overflow-hidden py-0 hover:shadow-lg hover:border-primary/30 transition-all duration-200 cursor-pointer h-full flex flex-col">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm flex items-center gap-2">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <CardContent className="p-5 flex flex-col flex-grow">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <h2 className="text-base font-bold leading-tight">{project.title}</h2>
                    <Badge variant="outline" className="text-[10px] font-medium shrink-0 whitespace-nowrap">
                      {project.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.slice(0, 4).map((tag, j) => (
                      <Badge key={j} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                    {project.tags.length > 4 && (
                      <Badge variant="secondary" className="text-xs text-muted-foreground">
                        +{project.tags.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}