import Link from "next/link"
import { Github, Menu, Package2, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
    return (<header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
        <div className="container mx-auto flex">
            <nav className="hidden flex-col gap-6 text-base font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link
                    href="/"
                    className="text-3xl font-bold"
                >
                    Gostack
                </Link>
                <Link
                    href="/sobre"
                    className="text-muted-foreground text-base transition-colors hover:text-foreground"
                >
                    Sobre
                </Link>
                <Link
                    href="/manifesto"
                    className="text-muted-foreground text-base transition-colors hover:text-foreground"
                >
                    Manifesto
                </Link>
                <Link
                    href="/apoiadores"
                    className="text-muted-foreground text-base transition-colors hover:text-foreground"
                >
                    Apoiadores
                </Link>
                <Link
                    target="_blank"
                    href="https://github.com/bennie-ferreira/gostack/issues/new"
                    className="text-muted-foreground text-base transition-colors hover:text-foreground"
                >
                    Sugestões
                </Link>
            </nav>
            {/* Menu mobile */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="shrink-0 md:hidden"
                    >
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <nav className="grid gap-6 font-medium">
                        <Link
                            href="#"
                            className="flex items-center gap-2 text-lg font-semibold"
                        >
                            <Package2 className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Linux
                        </Link>
                    </nav>
                </SheetContent >
            </Sheet>

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search ..."
                            className="pl-8 sm:w-[300px] md:w-[300px] lg:w-[300px] text-lg"
                        />
                    </div>
                </form>
                <Link
                    href="https://github.com/bennie-ferreira/gostack"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Github />
                </Link>
            </div>
        </div>
    </header>)
}