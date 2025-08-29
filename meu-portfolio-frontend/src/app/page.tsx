export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white dark:bg-stone-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border-b border-stone-200 dark:border-stone-700 shadow-sm">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* NOME */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-stone-800 dark:text-stone-100">
                Ricardo Alves
              </span>
            </div>

            {/* Links de Navegação */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#inicio"
                className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300 hover:scale-105"
              >
                Início
              </a>
              <a 
                href="#skills"
                className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300 hover:scale-105"
              >
                Skills
              </a>
              <a 
                href="#projetos"
                className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300 hover:scale-105"
              >
                Projetos
              </a>
              <a 
                href="#contato"
                className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300 hover:scale-105"
              >
                Contato
              </a>
            </div>

            {/* Botão Mobile Menu */}
            <div className="md:hidden">
              <button className="text-stone-600 dark:text-stone-300 hover:text-stone-800 dark:hover:text-stone-100 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="px-6 py-16 sm:px-8 lg:px-12">
        <main className="mx-auto max-w-5xl">
          {/* HERO */}
          <section id="inicio" className="flex flex-col gap-8 sm:gap-10">
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-stone-800 dark:text-stone-100">
                Ricardo Alves
              </h1>
              <h2 className="text-xl sm:text-2xl text-stone-600 dark:text-stone-300 font-medium">
                Estudante de Ciência da Computação (8º Semestre) e Desenvolvedor Frontend
              </h2>
              <p className="max-w-2xl mx-auto text-stone-500 dark:text-stone-400 text-lg">
                Esforçado e curioso. Foco em interfaces com Next.js e Tailwind CSS, com noções em Backend.
              </p>
            </div>

            {/* LINKS */}
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                href="https://www.linkedin.com/in/ricardo-alves-jr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a 
                className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                href="https://github.com/RicardoJrn1"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
              <a 
                className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                href="mailto:ricardo727jrn@gmail.com"
              >
                E-mail
              </a>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Minhas Habilidades</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Skills
              </h2>
            </div>
            
            <div className="space-y-8">
              {/* Frontend */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-stone-100 dark:bg-stone-700 rounded-lg mr-3 flex items-center justify-center text-stone-600 dark:text-stone-400 text-sm">🎨</span>
                  Frontend
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {[
                    "Next.js",
                    "JavaScript",
                    "TypeScript",
                    "Tailwind CSS",
                    "React",
                    "HTML",
                    "CSS", 
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full border border-stone-200 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-600 transition-all duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Backend */}
              <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm">
                <h3 className="text-2xl font-bold text-stone-800 dark:text-stone-100 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-stone-100 dark:bg-stone-700 rounded-lg mr-3 flex items-center justify-center text-stone-600 dark:text-stone-400 text-sm">⚙️</span>
                  Backend
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {[
                    "Node.js",
                    "Java",
                    "Django",
                    "SQLite",
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="px-4 py-2 text-sm font-medium bg-stone-50 dark:bg-stone-700 text-stone-700 dark:text-stone-300 rounded-full border border-stone-200 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-600 transition-all duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* PROJETOS */}
          <section id="projetos" className="mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Meus Trabalhos</p>
              <h3 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Projetos em Destaque
              </h3>
              <p className="text-stone-500 dark:text-stone-400 mt-4 text-lg">Meus projetos aqui</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="group bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm hover:scale-105 transition-all duration-300">
                <div className="h-32 rounded-xl bg-stone-50 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 border-2 border-dashed border-stone-300 dark:border-stone-600">
                  <span className="text-lg font-medium">🚀 Projeto 1</span>
                </div>
              </div>
              <div className="group bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm hover:scale-105 transition-all duration-300">
                <div className="h-32 rounded-xl bg-stone-50 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-400 border-2 border-dashed border-stone-300 dark:border-stone-600">
                  <span className="text-lg font-medium">💡 Projeto 2</span>
                </div>
              </div>
            </div>
          </section>

          {/* CONTATO */}
          <section id="contato" className="mt-20">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-stone-500 dark:text-stone-400 mb-2">Vamos Conversar</p>
              <h3 className="text-4xl sm:text-5xl font-bold text-stone-800 dark:text-stone-100">
                Contato
              </h3>
              <p className="text-stone-500 dark:text-stone-400 mt-4 text-lg">Entre em contato comigo</p>
            </div>
            <div className="bg-white dark:bg-stone-800 rounded-2xl p-8 border border-stone-200 dark:border-stone-700 shadow-sm">
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                  href="https://www.linkedin.com/in/ricardo-alves-jr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a 
                  className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                  href="https://github.com/RicardoJrn1"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  GitHub
                </a>
                <a 
                  className="group px-6 py-3 text-sm font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-full border border-stone-200 dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-700 transition-all duration-300 hover:scale-105"
                  href="mailto:ricardo727jrn@gmail.com"
                >
                  E-mail
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
