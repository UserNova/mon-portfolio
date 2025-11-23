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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
        {projects.map((project) => (
         // Update the Card component with new colors
<Card 
  key={project.title} 
  className="group h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 overflow-hidden hover:border-blue-400 dark:hover:border-blue-600 transform hover:-translate-y-1 hover:scale-[1.01]"
>
  {/* Header with gradient background */}
  <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

  <CardHeader className="space-y-3 sm:space-y-4 relative pb-2 sm:pb-4">
    <div className="flex items-start justify-between">
      <CardTitle className="text-xl font-semibold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {project.title}
      </CardTitle>
      {project.link && (
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse shadow-lg"></div>
      )}
    </div>
    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
      {project.summary}
    </CardDescription>
  </CardHeader>

  <CardContent className="space-y-4 relative">
    {/* Tags with updated colors */}
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {project.tags.map((tag) => {
        // Assign different colors based on tag content or position
        const colorClasses = [
          "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800", // Blue
          "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800", // Purple
          "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", // Green
          "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-800", // Amber
          "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 border-rose-200 dark:border-rose-800", // Rose
        ][tag.length % 5]; // Simple way to distribute colors

        return (
          <Badge 
            key={tag} 
            variant="secondary" 
            className={`text-xs font-medium border ${colorClasses} hover:shadow-sm transition-all duration-200`}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  </CardContent>

  <CardFooter className="pt-3 sm:pt-4 gap-2 sm:gap-3 relative mt-auto">
    {project.link && (
      <Button 
        asChild
        size="sm" 
        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs sm:text-sm border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      >
        <a 
          href={project.link} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <Play className="h-4 w-4" />
          Voir la démo
        </a>
      </Button>
    )}
    
    {project.repo && (
      <Button 
        asChild
        variant="outline" 
        size="sm" 
        className="flex-1 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:border-blue-300 dark:hover:border-blue-600 text-xs sm:text-sm transition-all duration-300"
      >
        <a 
          href={project.repo} 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center gap-2"
        >
          <Github className="h-4 w-4" />
          Code source
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
