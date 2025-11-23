import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center py-6 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 md:gap-12 lg:gap-16 lg:grid-cols-2 items-center w-full max-w-7xl mx-auto">
        <Helmet>
          <title>{profile.name} — Portfolio</title>
          <meta
            name="description"
            content="Portfolio : IA, SIG, DevSecOps, Android."
          />
        </Helmet>

        <div className="space-y-6 sm:space-y-8">
         

          {/* Name and Title */}

          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight break-words">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
                {profile.name}
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-200 leading-tight break-words">
              {profile.role}
            </p>
          </div>

       
        
{/* Skills Section - One Line */}
<div className="mt-6 sm:mt-8">
  <h5 className="font-medium text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 text-center sm:text-left">My Skills</h5>
  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
    {/* Frontend - Blue */}
    {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind'].map((skill) => (
      <span key={skill} className="px-2.5 py-1 text-xs sm:text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 whitespace-nowrap">
        {skill}
      </span>
    ))}
    
    {/* Backend - Green */}
    {['Node.js', 'Java', 'Spring', 'PHP', 'Laravel', 'Python'].map((skill) => (
      <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800">
        {skill}
      </span>
    ))}
    
    {/* Database - Purple */}
    {['SQL', 'MySQL', 'PostgreSQL', 'MongoDB'].map((skill) => (
      <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
        {skill}
      </span>
    ))}
    
    {/* Tools - Orange */}
    {['Docker', 'Git', 'REST API', 'GraphQL'].map((skill) => (
      <span key={skill} className="px-3 py-1.5 text-sm font-medium rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
        {skill}
      </span>
    ))}
  </div>
</div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
            <Button 
              asChild
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] text-sm sm:text-base"
            >
              <Link to="/projects">
                Voir mes projets
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 text-sm sm:text-base"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Link>
            </Button>
          </div>

          {/* Education Badges */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 pt-6 sm:pt-8" aria-label="badges de parcours">
            <Badge variant="secondary" className="px-4 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap">
              🎓 Master Technologies Emergentes
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-xs sm:text-sm font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300 whitespace-nowrap">
              🏛️ ENS
            </Badge>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 animate-bounce-slow"></div>
            
            {/* Profile Image */}
<div className="flex justify-center lg:justify-end relative">
  <div className="relative group">
    {/* Decorative elements */}
    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500"></div>
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-10 blur-md animate-float-slow"></div>
    
    {/* Main image container */}
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/30 dark:to-purple-900/30 p-1.5 shadow-xl backdrop-blur-sm border border-white/20 dark:border-slate-700/50 group-hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-square w-64 sm:w-72 md:w-80 lg:w-96 overflow-hidden rounded-xl">
        <img
          src={profile.image}
          alt={`Photo de ${profile.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>

  </div>
</div>

            {/* Enhanced floating badges */}
          
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-float-delayed">
              🚀 Open to work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
