export default function Home() {
  return (
    <div className="font-sans min-h-screen px-6 py-16 sm:px-8 lg:px-12">
      <main className="mx-auto max-w-5xl">
        {/* HERO */}
        <section className="flex flex-col gap-6 sm:gap-8">
          <p className= "text-sm text-neutral-600 dark:text-neutral-400">Olá</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Ricardo Alves
          </h1>
            <h2 className="text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200">
            Estudante de Ciência da Computação (8º Semestre) e Desenvolvedor Frontend
          </h2>
            <p className="max-w-2xl text-neutral-700 dark:text-neutral-300">
            Esforçado e curioso. Foco em interfaces com Next.js e Tailwind CSS, com noções em Backend.
          </p>

          {/* LINKS */}
          <div className="flex flex-wrap gap-3 pt-2">
            <a 
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              href="https://www.linkedin.com/in/ricardo-alves-jr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              href="https://github.com/RicardoJrn1"
              target="_blank"
              rel="noreferrer noopener"
            >
              GitHub
            </a>
            <a 
              className="rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              href="mailto:ricardo727jrn@gmail.com"
            >
              E-mail
            </a>
          </div>

          {/* SKILLS */}
          <div className="pt-4">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Skills</p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Frontend
            </h2>
            <ul className="flex flex-wrap gap-2">
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
                  className="text-xs rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-neutral-700 dark:text-neutral-300"
                >
                {skill}
                </li>
              ))}
              </ul>

            <h2 className="pt-6 text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Backend
            </h2>
              <ul className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Java",
                "Django",
                "SQLlite",
              ].map((skill) => (
                <li
                  key={skill}
                  className="text-xs rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-neutral-700 dark:text-neutral-300"
                >
                {skill}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Projetos em destaque</h3>
          <p className="text-neutral-700 dark:text-neutral-300 mt-2">Meus projetos aqui</p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="h-28 rounded-md border border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
            Espaço reservado
          </div>
          <div className="h-28 rounded-md border border-dashed border-neutral-300 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
            Espaço reservado
          </div>
          </div>
        </section>
      </main>
    </div>
  );
}