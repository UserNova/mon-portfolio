import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin, Award, GraduationCap, BookOpen, Lightbulb, Target } from "lucide-react";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

function formatDate(dateString?: string) {
  if (!dateString) return "Présent";
  if (dateString.length === 4) return dateString;
  const [year, month] = dateString.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

const getRandomGradient = (index: number) => {
  const gradients = [
    "from-blue-600 to-purple-600",
    "from-emerald-600 to-cyan-600",
    "from-pink-600 to-rose-600",
    "from-amber-600 to-orange-600",
    "from-violet-600 to-indigo-600"
  ];
  return gradients[index % gradients.length];
};

export default function EducationPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Header */}
      <div className="text-center space-y-6 mb-12">
        <div className="absolute top-0 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-white dark:bg-slate-900 rounded-full border-2 sm:border-4 border-blue-500 transform -translate-x-1/2"></div>
        <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="mr-2">🎓</span>
          Parcours Académique
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
          Mon Éducation
        </h2>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-light px-2 sm:px-0">
          Découvrez mon parcours académique et les compétences acquises
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden sm:block absolute left-4 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2"></div>
        
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div 
              key={`${edu.school}-${index}`}
              className={cn(
                "relative group",
                "pr-0 sm:pr-1/2"
              )}
            >
              {/* Timeline dot */}
              <div className={cn(
                "absolute top-0 h-8 w-8 rounded-full flex items-center justify-center z-10",
                "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg",
                "transform group-hover:scale-125 transition-transform duration-300",
                "left-4 sm:left-1/2 -translate-x-1/2 sm:translate-x-0 sm:-right-4"
              )}>
                <GraduationCap className="h-4 w-4 text-white" />
              </div>

              {/* Education Card */}
              <Card className={cn(
                "relative overflow-hidden border-slate-200/80 dark:border-slate-700/80",
                "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
                "hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1",
                "hover:border-blue-300/50 dark:hover:border-blue-600/50",
                "mx-0 sm:mx-0 ml-10 sm:ml-0"
              )}>
                {/* Gradient overlay */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-300 pointer-events-none",
                    getRandomGradient(index)
                  )}
                  style={{ mixBlendMode: "overlay" }}
                ></div>

                <CardHeader className="space-y-3 pb-3">
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        {edu.field && (
                          <>
                            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-400 mx-1"></span>
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                              {edu.field}
                            </span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                        <BookOpen className="w-4 h-4 mr-1.5" />
                        {edu.school}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 px-3 py-1.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                      <CalendarDays className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{formatDate(edu.start)} — {formatDate(edu.end)}</span>
                    </div>
                  </div>

                  {edu.location && (
                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-slate-500 dark:text-slate-400 gap-2 sm:gap-4 mt-1">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      {edu.location}
                    </div>
                  )}
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-base flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2 text-amber-500" />
                        Points forts
                      </h4>
                      <ul className="space-y-2.5">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                            <span className="text-blue-500 mt-1.5 text-xs">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {edu.gpa && (
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span className="font-medium">Moyenne :</span>
                      <span className="font-bold">{edu.gpa}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}