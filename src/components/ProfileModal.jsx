export function ProfileModal({ profile, onClose }) {
  if (!profile) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleRecommend = () => {
    alert(`Você recomendou ${profile.nome}!`)
  }

  const handleMessage = () => {
    const message = prompt(`Escreva uma mensagem para ${profile.nome}:`)
    if (message) {
      alert('Mensagem enviada (simulação):\n' + message)
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-xl border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-start gap-4 p-6 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-16 h-16 rounded-full object-cover border border-slate-200 dark:border-slate-600"
            />
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                {profile.nome}
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                {profile.cargo} • {profile.localizacao}
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Áreas de interesse: {profile.areaInteresses.join(', ')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-6 text-sm">
          <section>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-1">
              Resumo profissional
            </h3>
            <p className="text-slate-600 dark:text-slate-200">{profile.resumo}</p>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Habilidades técnicas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {profile.habilidadesTecnicas.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-dark px-2 py-0.5 text-[11px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Soft skills & hobbies
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-1">
                {profile.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-100 px-2 py-0.5 text-[11px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-300">
                Hobbies: {profile.hobbies?.join(', ') || 'Não informado'}
              </p>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Experiências
              </h3>
              <ul className="space-y-2">
                {profile.experiencias.map((exp, index) => (
                  <li key={index} className="text-slate-600 dark:text-slate-200">
                    <p className="font-medium text-xs">
                      {exp.cargo} • {exp.empresa}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {exp.inicio} - {exp.fim || 'Atual'}
                    </p>
                    <p className="text-xs">{exp.descricao}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Formação acadêmica
              </h3>
              <ul className="space-y-2">
                {profile.formacao.map((f, index) => (
                  <li key={index} className="text-slate-600 dark:text-slate-200">
                    <p className="font-medium text-xs">{f.curso}</p>
                    <p className="text-[11px] text-slate-400">
                      {f.instituicao} • {f.ano}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Projetos
              </h3>
              <ul className="space-y-2">
                {profile.projetos.map((p, index) => (
                  <li key={index}>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-primary dark:text-primary-dark hover:underline"
                    >
                      {p.titulo}
                    </a>
                    <p className="text-xs text-slate-600 dark:text-slate-200">
                      {p.descricao}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1 text-slate-800 dark:text-slate-100">
                Certificações & idiomas
              </h3>
              <ul className="mb-2 space-y-1">
                {profile.certificacoes.map((c, index) => (
                  <li key={index} className="text-xs text-slate-600 dark:text-slate-200">
                    • {c}
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {profile.idiomas.map((i, index) => (
                  <li key={index} className="text-xs text-slate-600 dark:text-slate-200">
                    {i.idioma} • {i.nivel}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center border-t border-slate-100 dark:border-slate-700 p-4">
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={handleRecommend}
              className="flex-1 sm:flex-none inline-flex justify-center items-center rounded-full bg-primary text-white text-sm font-medium px-4 py-2 hover:bg-primary/90 transition-colors"
            >
              Recomendar profissional
            </button>
            <button
              onClick={handleMessage}
              className="flex-1 sm:flex-none inline-flex justify-center items-center rounded-full border border-slate-300 dark:border-slate-600 text-sm font-medium px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Enviar mensagem
            </button>
          </div>
          <p className="text-[11px] text-slate-400 text-center sm:text-right">
            Ações simuladas para fins acadêmicos. Nenhum dado é realmente enviado.
          </p>
        </div>
      </div>
    </div>
  )
}
