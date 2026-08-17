import { ArrowDown, MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const communityUrl = "https://chat.whatsapp.com/JLlbloJJKu8L8O7vLLGFHn?s=cl&p=a&mlu=0&ilr=0"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_42%,oklch(0.34_0.18_286_/_0.32),transparent_34%),linear-gradient(115deg,oklch(0.17_0.08_245),oklch(0.09_0.03_285)_55%,oklch(0.14_0.08_300))]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(oklch(1_0_0_/_0.06)_1px,transparent_1px),linear-gradient(90deg,oklch(1_0_0_/_0.06)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="relative mx-auto grid min-h-[680px] max-w-6xl items-center gap-8 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0 lg:px-10 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/45 bg-brand-green/10 px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            DSC PUCP presenta
          </span>
          <h1 className="mt-8 text-balance font-display text-6xl font-bold uppercase leading-[0.88] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-[7.2rem]">
            <span className="block text-brand-red">Hack</span>
            <span className="block">with</span>
            <span className="block">DSC</span>
          </h1>
          <p className="mt-10 max-w-xl text-balance font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
            Del código al <span className="bg-gradient-to-r from-brand-red via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">siguiente nivel.</span>
          </p>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Talleres, ponencias y hackathons para que dejes de acumular teoría y empieces a construir software de verdad: desplegado, defendible y hecho en equipo.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={communityUrl} className={buttonVariants({ size: "lg", className: "rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-6 text-white shadow-[0_0_30px_oklch(0.6_0.2_285_/_0.35)] hover:from-violet-500 hover:to-blue-400" })}>
              <MessageCircle className="h-4 w-4" />
              Únete a la comunidad
            </a>
            <a href="#que-es" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full border-border/80 bg-background/20 px-6" })}>
              Qué es Hack with DSC
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-[560px]">
          <div className="absolute h-72 w-72 rounded-full bg-violet-600/20 blur-3xl lg:h-[30rem] lg:w-[30rem]" />
          <img src="https://hack-with-dsc.vercel.app/brand/bugle-cyberpunk.webp" alt="Bugle, la mascota de DSC PUCP con equipo cyberpunk" className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-[0_20px_35px_oklch(0_0_0_/_0.55)]" />
        </div>
      </div>
      <a href="#que-es" className="relative z-10 mx-auto mb-6 flex w-fit flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground">
        Conoce el programa
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  )
}

