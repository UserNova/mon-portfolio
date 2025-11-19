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

      {c.skills?.length ? (
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Compétences :</p>
          <div className="flex flex-wrap gap-2">
            {c.skills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 rounded-full hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : null}

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