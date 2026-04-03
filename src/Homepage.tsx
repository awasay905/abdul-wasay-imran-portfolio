import { motion } from "motion/react";
import { ArrowUpRight, School, Terminal, Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import portfolioData from "@/data/portfolio.json";
import { Link } from "react-router";
import { MeshGradient } from "@/Meshgradient";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  school: School,
  terminal: Terminal,
  favorite: Heart,
};

export function HomePage() {
  const { personalInfo, stats, experience, projects } = portfolioData;

  return (
    <main className="pt-16">

      {/* ═══════════════════════════════════════
          HERO
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100svh-4rem)] flex items-center">
        {/* Full-bleed gradient — outside the max-w constraint so it covers full width */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
          <MeshGradient />
        </div>
        {/* Subtle dot-grid texture overlay */}
        <div aria-hidden="true" className="dot-grid absolute inset-0 -z-10" />

        <div className="w-full px-6 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          {/* Text side */}
          <div className="md:col-span-7 space-y-7">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center gap-2 text-xs font-medium border border-border/60 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-primary flex-shrink-0" />
              <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">
                {personalInfo.title}
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-8xl font-black tracking-tight leading-[0.88]"
            >
              {personalInfo.name.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={i === 1 ? "text-primary block" : "text-foreground block"}
                >
                  {word}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32, ease: "easeOut" }}
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              {personalInfo.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild size="lg" className="text-base h-12 px-7">
                <Link to="/projects">
                  View Projects <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-base h-12 px-7 bg-background/60 backdrop-blur-sm">
                <a href={`mailto:${personalInfo.email}`}>Get in Touch</a>
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.56 }}
              className="flex flex-wrap items-center gap-6 pt-1"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" aria-hidden="true" /> {personalInfo.location}
              </span>
            </motion.div>
          </div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative order-first md:order-last flex justify-center md:justify-end"
          >
            <div className="relative w-64 md:w-80">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-primary/25 bg-primary/8 -z-10" />
              <div className="rounded-2xl overflow-hidden border border-border shadow-xl aspect-square">
                <img
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          STATS / ABOUT CARDS
      ═══════════════════════════════════════ */}
      <section className="py-16 px-6 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            if (i === 0) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="sm:col-span-2"
                >
                  <Card className="h-full">
                    <CardContent className="p-8 flex flex-col gap-6 h-full">
                      <Icon className="w-6 h-6 text-primary" />
                      <div>
                        <h3 className="text-4xl font-black tracking-tight mb-2">{stat.label}</h3>
                        <p className="text-base text-muted-foreground leading-relaxed">{stat.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }
            if (stat.items) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-8 flex flex-col gap-4 h-full">
                      <Icon className="w-5 h-5 text-primary" />
                      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">{stat.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {stat.items.map((item, j) => (
                          <Badge key={j} variant="secondary" className="text-xs font-medium">{item}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-primary text-primary-foreground border-primary h-full">
                  <CardContent className="p-8 flex flex-col gap-5 h-full">
                    <Icon className="w-5 h-5 opacity-70" />
                    <div>
                      <p className="text-xs uppercase tracking-widest opacity-70 font-semibold mb-3">{stat.label}</p>
                      <p className="text-base leading-relaxed italic opacity-90">"{stat.quote}"</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE — TIMELINE
      ═══════════════════════════════════════ */}
      <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Work History</p>
          <h2 className="text-3xl font-bold tracking-tight">Professional Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[6px] top-3 bottom-3 w-px bg-border/70" aria-hidden="true" />

          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5"
              >
                {/* Timeline dot */}
                <div className="relative z-10 mt-[22px] shrink-0" aria-hidden="true">
                  <div className="w-3 h-3 rounded-full bg-background border-2 border-primary" />
                </div>

                {/* Card */}
                <Card className="flex-1 hover:border-primary/40 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-1">
                      <h3 className="text-base font-bold">{exp.role}</h3>
                      <span className="text-primary font-semibold text-sm">@ {exp.company}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                      <span className="text-xs font-mono text-muted-foreground/70">{exp.period}</span>
                      <span className="text-xs font-mono text-muted-foreground/50">{exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURED PROJECTS (3 cards)
      ═══════════════════════════════════════ */}
      <section id="projects" className="py-20 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Selected Works</p>
              <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            </motion.div>
            <Link
              to="/projects"
              className="text-sm font-semibold text-primary hover:underline underline-offset-4 flex items-center gap-1.5"
            >
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                        <h3 className="text-base font-bold leading-tight">{project.title}</h3>
                        <Badge variant="outline" className="text-[10px] font-medium shrink-0">{project.type}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tags.slice(0, 3).map((tag, j) => (
                          <Badge key={j} variant="secondary" className="text-xs">{tag}</Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs text-muted-foreground">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT CTA
      ═══════════════════════════════════════ */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-primary text-primary-foreground border-primary overflow-hidden">
            <CardContent className="p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                  Let's work together.
                </h2>
                <p className="text-base opacity-80 max-w-md leading-relaxed">
                  Open to internships, collaborations, and interesting technical projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Button variant="secondary" size="lg" className="text-base h-12 px-7" asChild>
                  <a href={`mailto:${personalInfo.email}`}>
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send Email
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base h-12 px-7 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

    </main>
  );
}