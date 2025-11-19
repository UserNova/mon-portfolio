import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, ArrowRight, Download } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="grid gap-16 lg:grid-cols-2 items-center w-full">
        <Helmet>
          <title>{profile.name} — Portfolio</title>
          <meta
            name="description"
            content="Portfolio : IA, SIG, DevSecOps, Android."
          />
        </Helmet>

        <div className="space-y-8">
          {/* Welcome Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
            <span className="mr-2 text-lg">👋</span>
            Bienvenue sur mon portfolio
          </div>

          {/* Name and Title */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
                {profile.name}
              </span>
            </h1>
            <p className="text-3xl sm:text-4xl font-semibold text-slate-700 dark:text-slate-200 leading-tight">
              {profile.role}
            </p>
          </div>

          {/* Skills Description */}
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-light">
            My skills : <br></br>{profile.skills}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              asChild
              size="lg"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
              className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
            >
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Me contacter
              </Link>
            </Button>
          </div>

          {/* Education Badges */}
          <div className="flex flex-wrap gap-4 pt-6" aria-label="badges de parcours">
            <Badge variant="secondary" className="px-5 py-3 text-sm font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300">
              🎓 Master Technologies Emergentes
            </Badge>
            <Badge variant="secondary" className="px-5 py-3 text-sm font-medium bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 shadow-sm hover:shadow-md transition-all duration-300">
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
            
            {/* Image container */}
            <div className="relative bg-white dark:bg-slate-800 p-3 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl opacity-50"></div>
              <img
                src={profile.image}
                alt={`Photo de ${profile.name}`}
                className="relative aspect-square w-64 sm:w-80 lg:w-96 rounded-2xl object-cover"
              />
            </div>

            {/* Enhanced floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-5 py-3 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 animate-float">
              ✨ Disponible
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full px-4 py-2 text-xs font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-float-delayed">
              🚀 Open to work
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
