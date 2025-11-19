// src/pages/Experience.tsx

import { experiences } from "@/data/experience";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Briefcase } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <div className="space-y-12 w-full max-w-7xl mx-auto overflow-x-hidden">
      <Helmet>
        <title>Parcours — ZHIRI Rania</title>
        <meta name="description" content="Mon parcours professionnel et mes expériences" />
      </Helmet>

      {/* Header */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-6 py-3 text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm">
          <span className="mr-2">💼</span>
          Parcours Professionnel
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
          Mon Parcours
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
          Découvrez mes expériences professionnelles au fil de ma carrière.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative w-full overflow-hidden">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600 shadow-lg animate-pulse"></div>
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 blur-sm"></div>
        
        <div className="space-y-8 pl-0">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6 w-full min-w-0">
              
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* Experience Card */}
<Card className="flex-1 min-w-[1050px] max-w-full border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-600">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
                
                <CardHeader className="space-y-4 relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
                        {exp.organization}
                      </CardDescription>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300">
                      <CalendarDays className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  {exp.tasks && exp.tasks.length > 0 && (
                    <div className="space-y-4">
                      <h4 className="font-semibold text-slate-700 dark:text-slate-300 text-lg">Missions principales :</h4>
                      <ul className="space-y-3">
                        {exp.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mt-2.5 flex-shrink-0 transition-transform duration-300"></div>
                            <span className="text-sm leading-relaxed">{task}</span>
                          </li>
                        ))}
                      </ul>
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
