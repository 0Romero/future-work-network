export function SearchAndFilters({
  searchTerm,
  setSearchTerm,
  area,
  setArea,
  cidade,
  setCidade,
  tecnologia,
  setTecnologia,
  areas,
  cidades,
  tecnologias,
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end mb-6">
      <div className="flex-1">
        <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
          Buscar por nome
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(element) => setSearchTerm(element.target.value)}
          placeholder="Digite o nome do profissional..."
          className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
            Área
          </label>
          <select
            value={area}
            onChange={(element) => setArea(element.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            <option value="">Todas</option>
            {areas.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
            Cidade
          </label>
          <select
            value={cidade}
            onChange={(element) => setCidade(element.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            <option value="">Todas</option>
            {cidades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-600 dark:text-slate-300 mb-1">
            Tecnologia
          </label>
          <select
            value={tecnologia}
            onChange={(e) => setTecnologia(e.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60"
          >
            <option value="">Todas</option>
            {tecnologias.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
