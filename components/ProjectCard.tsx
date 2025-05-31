import React from "react";

interface CardProps {
  title?: string;
  content?: string;
  icons?: React.ReactNode[];
  gitLink?: string;
  liveLink?: string
}

export default function ProjectCard({ title, content, icons, gitLink, liveLink}: CardProps) {
  return (
    <div className="group relative max-w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl border border-slate-700/50 shadow-2xl hover:shadow-slate-500/20 transition-all duration-500 hover:scale-[1.02] hover:border-slate-600/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
      
      <div className="relative p-6 space-y-4">
        <div className="space-y-3">
          <h3 className="font-bold text-xl text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
            {title || "Vercel Deployment"}
          </h3>
          <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed text-sm">
            {content || "Isolated Kubernetes-powered playgrounds for rapid prototyping in React and Node.js with seamless deployment pipeline"}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
          <div className="flex items-center gap-1">
            {icons && (
              icons.map((icon, index) => (
                <div 
                  key={index} 
                >
                  {icon}
                </div>
              ))
            )}
          </div>
          <div className="flex items-center gap-2">
            { <div className="flex gap-2">
                {liveLink ? (
                    <a href={liveLink} target="blank" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-blue-600/20 hover:border-blue-500/50 transition-all duration-200 text-slate-400 hover:text-blue-400 group/btn cursor-pointer">
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                ):""}
                <a href={gitLink} target="blank" className="p-2 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-200 text-slate-400 hover:text-purple-400 group/btn cursor-pointer">
                  <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}