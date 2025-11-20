import { useMemo, useState } from 'react'
import profiles from './data/profiles.json'
import { Header } from './components/Header'
import { ProfileCard } from './components/ProfileCard'
import { ProfileModal } from './components/ProfileModal'
import { SearchAndFilters } from './components/SearchAndFilters'
import { DarkModeToggle, useDarkMode } from './components/DarkModeToggle'

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [area, setArea] = useState('')
  const [cidade, setCidade] = useState('')
  const [tecnologia, setTecnologia] = useState('')

  const { toggleDarkMode } = useDarkMode()

  const areas = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.area))).sort(),
    [],
  )
  const cidades = useMemo(
    () => Array.from(new Set(profiles.map((p) => p.localizacao))).sort(),
    [],
  )
  const tecnologias = useMemo(
    () =>
      Array.from(
        new Set(profiles.flatMap((p) => p.habilidadesTecnicas)),
      ).sort(),
    [],
  )

  const filteredProfiles = useMemo(() => {
    return profiles.filter((p) => {
      const matchesName = p.nome
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesArea = area ? p.area === area : true
      const matchesCidade = cidade ? p.localizacao === cidade : true
      const matchesTech = tecnologia
        ? p.habilidadesTecnicas.includes(tecnologia)
        : true
      return matchesName && matchesArea && matchesCidade && matchesTech
    })
  }, [searchTerm, area, cidade, tecnologia])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-50">
      <main className="max-w-6xl mx-auto px-4 py-6 sm:py-10">
        <div className="flex items-center justify-between mb-4">
          <Header />
          <DarkModeToggle onToggle={toggleDarkMode} />
        </div>

        <SearchAndFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          area={area}
          setArea={setArea}
          cidade={cidade}
          setCidade={setCidade}
          tecnologia={tecnologia}
          setTecnologia={setTecnologia}
          areas={areas}
          cidades={cidades}
          tecnologias={tecnologias}
        />

        <section>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 mb-3">
            Exibindo {filteredProfiles.length} de {profiles.length} profissionais
          </p>
          {filteredProfiles.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Nenhum perfil encontrado com os filtros atuais. Ajuste os critérios de busca.
            </p>
          ) : (
            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onClick={() => setSelectedProfile(profile)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <ProfileModal
        profile={selectedProfile}
        onClose={() => setSelectedProfile(null)}
      />
    </div>
  )
}

export default App
