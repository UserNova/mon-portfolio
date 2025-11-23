console.log("CertificationCard loaded");
import type { Certification } from "@/data/certifications";
import clsx from "clsx";

function mmYYYY(s: string){ const [y,m]=s.split("-"); return `${m}/${y}`; }

export default function CertificationCard({ c }: { c: Certification }) {
  const isExpired = c.status === "expired" || (c.expiryDate && c.expiryDate < c.issueDate);

  return (
    <article
      className={clsx(
        "border-2 rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 relative overflow-hidden",
        "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600",
        isExpired && "opacity-75"
      )}
      aria-label={`Certification ${c.title}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      {c.image && (
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-2xl opacity-50"></div>
          <img
            src={c.image}
            alt={c.imageAlt ?? c.title}
            width={256}
            height={256}
            loading="lazy"
            className="relative w-full h-48 object-contain rounded-2xl"
          />
        </div>
      )}

      <div className="relative">
        <h3 className="font-bold text-xl leading-snug text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {c.title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
          <span className="font-medium text-blue-600 dark:text-blue-400">{c.issuer}</span>
          <span className="text-slate-400">•</span>
          <span>{mmYYYY(c.issueDate)}</span>
          {c.expiryDate && (
            <>
              <span className="text-slate-400">→</span>
              <span>{mmYYYY(c.expiryDate)}</span>
            </>
          )}
          {c.credentialId && (
            <>
              <span className="text-slate-400">•</span>
              <span className="font-mono text-xs bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">ID: {c.credentialId}</span>
            </>
          )}
        </div>
      </div>

      {(c.skills?.length || c.tags?.length) && (
        <div className="space-y-4 mt-4">
         {(c.skills && c.skills.length > 0) && (
            <div>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Compétences
              </p>
              <div className="flex flex-wrap gap-2">
                {c.skills.map((skill, index) => {
                  // Tableau de couleurs pour les compétences
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
                  
                  // Sélectionne une couleur basée sur l'index pour une répartition uniforme
                  const colorIndex = index % colors.length;
                  
                  return (
                    <span
                      key={`skill-${index}`}
                      className={`inline-flex items-center px-3 py-1 text-xs font-medium text-white 
                        bg-gradient-to-r ${colors[colorIndex]} 
                        border border-opacity-30 border-white dark:border-opacity-20 dark:border-black 
                        rounded-full hover:shadow-md hover:scale-105 transition-all duration-300`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

{(c.tags && c.tags.length > 0) && (
            <div>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag, index) => {
                  // Tableau de couleurs pour les tags (tons plus clairs)
                  const colors = [
                    'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600',
                    'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800 hover:border-purple-300 dark:hover:border-purple-600',
                    'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800 hover:border-emerald-300 dark:hover:border-emerald-600',
                    'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-600',
                    'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800 hover:border-rose-300 dark:hover:border-rose-600',
                  ];
                  
                  // Sélectionne une couleur basée sur l'index pour une répartition uniforme
                  const colorIndex = index % colors.length;
                  
                  return (
                    <span
                      key={`tag-${index}`}
                      className={`inline-flex items-center px-3 py-1 text-xs font-medium 
                        ${colors[colorIndex]} 
                        border rounded-full transition-all duration-300`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-6 flex items-center gap-3 text-sm relative">
        {c.credentialUrl && (
          <a 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            href={c.credentialUrl} 
            target="_blank" 
            rel="noreferrer"
            aria-label={`Voir le certificat ${c.title}`}
          >
            Voir le certificat
          </a>
        )}
        {isExpired && <span className="text-amber-600">Expirée</span>}
        {c.status === "revoked" && <span className="text-red-600">Révoquée</span>}
      </div>
    </article>
  );
}