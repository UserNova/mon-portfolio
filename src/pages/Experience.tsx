// src/pages/Experience.tsx

import { experiences } from "@/data/experience";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Briefcase, ChevronRight, Code, Database, BarChart2, Users, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cn } from "@/lib/utils";

// Fonction utilitaire pour formater les dates
const formatDate = (dateString?: string): string => {
  if (!dateString) return 'Présent';
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};

const getSkillIcon = (skill: string) => {
  const lowerSkill = skill.toLowerCase();
  if (lowerSkill.includes('développement') || lowerSkill.includes('web') || lowerSkill.includes('code')) {
    return <Code className="w-4 h-4 mr-1.5" />;
  } else if (lowerSkill.includes('base de données') || lowerSkill.includes('données')) {
    return <Database className="w-4 h-4 mr-1.5" />;
  } else if (lowerSkill.includes('analyse') || lowerSkill.includes('statistiques')) {
    return <BarChart2 className="w-4 h-4 mr-1.5" />;
  } else if (lowerSkill.includes('gestion') || lowerSkill.includes('administratif')) {
    return <FileText className="w-4 h-4 mr-1.5" />;
  } else if (lowerSkill.includes('équipe') || lowerSkill.includes('collaboration')) {
    return <Users className="w-4 h-4 mr-1.5" />;
  }
  return <ChevronRight className="w-4 h-4 mr-1.5 text-blue-500" />;
};

const getSkillColor = (index: number) => {
  const colors = [
    'from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500',
    'from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500',
    'from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500',
    'from-amber-500 to-amber-600 dark:from-amber-400 dark:to-amber-500',
    'from-rose-500 to-rose-600 dark:from-rose-400 dark:to-rose-500',
    'from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500',
    'from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500',
    'from-cyan-500 to-cyan-600 dark:from-cyan-400 dark:to-cyan-500',
  ];
  return colors[index % colors.length];
};

export default function Experience() {
  return (
    <div className="space-y-10 sm:space-y-12 w-full max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <Helmet>
        <title>Parcours — ZHIRI Rania</title>
        <meta name="description" content="Mon parcours professionnel et mes expériences" />
      </Helmet>

      {/* Header */}
      <div className="text-center space-y-4 sm:space-y-6 px-2 sm:px-0">
        <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="mr-2">💼</span>
          Parcours Professionnel
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
          Mon Parcours
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
          Découvrez mes expériences professionnelles et les compétences acquises au fil de ma carrière.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative w-full overflow-hidden">
        {/* Timeline line */}
        <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 shadow-lg"></div>
        <div className="hidden sm:block absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 via-purple-400/30 to-pink-400/30"></div>
        
        <div className="space-y-6 sm:space-y-8 pl-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-4 sm:gap-6 w-full min-w-0 group">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 mt-1 sm:mt-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110">
                  <span className="text-lg sm:text-2xl">{exp.icon || '💼'}</span>
                </div>
              </div>

              {/* Experience Card */}
              <Card className="flex-1 min-w-0 max-w-full border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5 hover:border-blue-300/50 dark:hover:border-blue-600/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                
                <CardHeader className="space-y-3 sm:space-y-4 relative pb-2 sm:pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                          {exp.title}
                        </CardTitle>
                        <span className="hidden sm:inline-flex w-1 h-1 rounded-full bg-slate-400 mx-1"></span>
                        <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                          {exp.organization}
                        </span>
                      </div>
                      
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-700/80 px-2.5 py-1 rounded-full shadow-sm hover:shadow-md transition-all duration-300 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/20">
                      <CalendarDays className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                      <span className="whitespace-nowrap">
  {exp.period}
</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-5 pt-0 pb-6">
                  {exp.tasks && exp.tasks.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-base flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
                        Missions principales :
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm sm:text-[0.9375rem] leading-relaxed">
                            <span className="text-blue-500 mt-1.5 text-xs">•</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {exp.skills && exp.skills.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-base flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                        Compétences clés :
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={cn(
                              "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border border-transparent",
                              "bg-gradient-to-r bg-opacity-10 text-slate-700 dark:text-slate-300",
                              "hover:shadow-sm transition-all duration-200",
                              `bg-${getSkillColor(skillIndex).split(' ')[0].split('-')[1]}-100 dark:bg-${getSkillColor(skillIndex).split(' ')[0].split('-')[1]}-900/30`,
                              `border-${getSkillColor(skillIndex).split(' ')[0].split('-')[1]}-200 dark:border-${getSkillColor(skillIndex).split(' ')[0].split('-')[1]}-800/50`,
                              "hover:border-opacity-100"
                            )}
                          >
                            {getSkillIcon(skill)}
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {experiences.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 dark:text-slate-600 text-lg">
            Mes expériences seront bientôt détaillées...
          </div>
        </div>
      )}
    </div>
  );
}
