import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Play } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Projets — ZHIRI Rania</title>
        <meta name="description" content="Découvrez mes projets en IA, SIG, DevSecOps et Android" />
      </Helmet>

      {/* Header */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm">
          <span className="mr-2">🚀</span>
          Portfolio de Projets
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
          Mes Projets
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
          Une sélection de mes réalisations dans le développement web et mobile.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card 
            key={project.title} 
            className="group hover:shadow-2xl transition-all duration-500 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            
            <CardHeader className="space-y-4 relative">
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </CardTitle>
                <div className="flex gap-1">
                  {project.link && (
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg"></div>
                  )}
                </div>
              </div>
              <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {project.summary}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 relative">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="text-xs font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="pt-6 gap-3 relative">
              {project.link && (
                <Button 
                  asChild
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              )}
              
              {project.repo && (
                <Button 
                  asChild
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                >
                  <a 
                    href={project.repo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Empty state if no projects */}
      {projects.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 dark:text-slate-600 text-lg">
            Mes projets sont en cours de préparation...
          </div>
        </div>
      )}
    </div>
  );
}
