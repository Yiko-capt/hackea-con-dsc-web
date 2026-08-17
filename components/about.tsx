import { BrainCircuit, Code2, Users } from "lucide-react"

const formats = [
  { icon: Code2, title: "Talleres", description: "Aprende construyendo: sesiones prácticas para salir con algo funcionando." },
  { icon: BrainCircuit, title: "Ponencias", description: "Ideas, herramientas y experiencias contadas por quienes ya están en la cancha." },
  { icon: Users, title: "Hackathons", description: "Forma equipo, resuelve retos reales y lleva tu proyecto del concepto al demo." },
]

const pillars = [
  ["Adopción técnica y uso de IA", "Usa la tecnología como una palanca para aprender más rápido y crear mejor."],
  ["Aplicabilidad real", "Cada sesión conecta lo que aprendes con problemas y productos de verdad."],
  ["Comunidad y networking", "Conoce personas con tus mismas ganas de construir, compartir y crecer."],
  ["Excelencia y pensamiento crítico", "Cuestiona, itera y defiende tus decisiones con criterio."],
]

export function About() {
  return (
    <section id="que-es" className="relative mx-auto max-w-6xl scroll-mt-8 px-6 py-24 lg:px-10 lg:py-32">
      <div className="max-w-3xl">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">Qué es Hack with DSC</p>
        <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-tight sm:text-6xl">Un programa hecho para llevarte al siguiente nivel</h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">Una experiencia para estudiantes que quieren pasar de consumir tecnología a construir con ella. Aprende, colabora y publica algo que puedas defender.</p>
      </div>

      <div className="mt-20">
        <h3 className="font-display text-2xl font-bold">Tres formatos, un mismo objetivo</h3>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {formats.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="border border-border/70 bg-card/40 p-6 transition-colors hover:border-brand-blue/60">
              <Icon className={index === 0 ? "h-7 w-7 text-brand-blue" : index === 1 ? "h-7 w-7 text-brand-red" : "h-7 w-7 text-brand-green"} />
              <h4 className="mt-6 font-display text-xl font-semibold">{title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h3 className="font-display text-2xl font-bold">Cuatro pilares que sostienen todo el programa</h3>
        <div className="mt-7 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {pillars.map(([title, description]) => (
            <article key={title} className="border-t border-border/70 pt-5">
              <h4 className="font-display text-lg font-semibold">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
