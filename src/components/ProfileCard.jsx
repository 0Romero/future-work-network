export function ProfileCard({ profile, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
    >
      <div className="flex items-center gap-3">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-14 h-14 rounded-full object-cover border border-slate-200 dark:border-slate-600"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-50">
            {profile.nome}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300">
            {profile.cargo} • {profile.localizacao}
          </p>
        </div>
      </div>
      <p className="text-xs text-slate-500 line-clamp-2">{profile.resumo}</p>
      <div className="flex flex-wrap gap-2 mt-1">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-dark px-2 py-0.5 text-[11px] font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </button>
  )
}
