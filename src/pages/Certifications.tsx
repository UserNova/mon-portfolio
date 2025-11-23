import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Award, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  // Get unique tags for filter suggestions
  const uniqueTags = useMemo(() => {
    const tags = new Set<string>();
    certifications.forEach(cert => {
      cert.tags?.forEach(tag => tags.add(tag));
      cert.skills?.forEach(skill => tags.add(skill));
    });
    return Array.from(tags).sort();
  }, []);

  return (
    <div className="space-y-8 sm:space-y-12 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 max-w-7xl mx-auto">
      <Helmet>
        <title>Certifications — ZHIRI Rania</title>
        <meta name="description" content="Mes certifications professionnelles et compétences techniques" />
      </Helmet>

      {/* Header */}
      <div className="text-center space-y-4 sm:space-y-6 px-2 sm:px-0">
        <div className="inline-flex items-center rounded-full border border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
          <span className="mr-2">🏆</span>
          Certifications Professionnelles
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400 animate-gradient">
          Mes Certifications
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
          L'ensemble de mes certifications professionnelles attestant de mes compétences techniques 
          et de mon engagement dans l'apprentissage continu.
        </p>
      </div>

      {/* Enhanced Search and Filter Section */}
      <div className="bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl sm:rounded-3xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 shadow-md sm:shadow-lg">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <span className="font-semibold text-base sm:text-lg">
                {list.length} certification{list.length !== 1 ? 's' : ''} trouvée{list.length !== 1 ? 's' : ''}
              </span>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">Explorez mon portfolio de compétences</p>
            </div>
          </div>
          
          <div className="relative w-full sm:flex-1 sm:max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
            <Input
              placeholder="Rechercher (AWS, Kubernetes...)"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-2.5 text-sm sm:text-base border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-blue-500 dark:focus:border-blue-400"
              aria-label="Filtrer les certifications"
            />
          </div>
        </div>

        {/* Quick Filter Tags */}
        {q === "" && uniqueTags.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>Filtres rapides :</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 max-h-24 sm:max-h-full overflow-y-auto py-1 sm:py-0">
              {uniqueTags.slice(0, 12).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-300 dark:hover:border-blue-600 transition-colors text-[10px] sm:text-xs px-2 py-0.5 sm:px-2.5 sm:py-1"
                  onClick={() => setQ(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Active Filter */}
        {q && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Filtre actif :</span>
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700 text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1"
              >
                {q}
              </Badge>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQ("");
                }}
                className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700 rounded px-1"
              >
                Effacer
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Certifications Grid */}
      {list.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {list.map((cert) => (
            <div key={cert.title + cert.issueDate} className="transform transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105">
              <CertificationCard c={cert} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16">
          <div className="text-slate-400 dark:text-slate-600 space-y-4 sm:space-y-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center mx-auto">
              <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-slate-400 dark:text-slate-500" />
            </div>
            <div>
              <p className="text-base sm:text-lg md:text-xl font-medium text-slate-600 dark:text-slate-400 px-4">
                {q ? 'Aucune certification trouvée pour cette recherche' : 'Aucune certification disponible'}
              </p>
              {q && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setQ("");
                  }}
                  className="mt-4 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700"
                >
                  Effacer le filtre
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
