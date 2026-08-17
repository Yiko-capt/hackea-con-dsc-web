import { ArrowUpRight, CalendarClock } from "lucide-react"

const communityUrl = "https://chat.whatsapp.com/JLlbloJJKu8L8O7vLLGFHn?s=cl&p=a&mlu=0&ilr=0"

export function Agenda() {
  return (
    <section id="agenda" className="border-t border-border/60 bg-card/20 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between lg:px-10">
        <div className="max-w-2xl">
          <CalendarClock className="h-8 w-8 text-brand-blue" />
          <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight md:text-5xl">La agenda se está cocinando</h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">Estamos preparando una programación con talleres, ponencias y retos para que cada encuentro te acerque a tu siguiente proyecto.</p>
        </div>
        <a href={communityUrl} className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/50 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-brand-blue/10">
          Entrar al grupo de WhatsApp
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
