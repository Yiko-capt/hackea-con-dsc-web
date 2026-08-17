import { MessageCircle } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

const communityUrl = "https://chat.whatsapp.com/JLlbloJJKu8L8O7vLLGFHn?s=cl&p=a&mlu=0&ilr=0"

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-border/50 bg-background/45 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" aria-label="Hack with DSC — ir al inicio" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="font-black text-brand-red">‹</span>
          Hack with DSC
          <span className="font-black text-violet-500">›</span>
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="/sponsors" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">Patrocinio</a>
          <a href={communityUrl} className={buttonVariants({ size: "sm", className: "rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-4 text-white hover:from-violet-500 hover:to-blue-400" })}>
            <MessageCircle className="h-3.5 w-3.5" />
            Únete a la comunidad
          </a>
        </div>
      </div>
    </header>
  )
}

