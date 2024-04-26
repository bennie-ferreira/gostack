import Link from "next/link"
import { Coffee, Github } from "lucide-react"

export default function Footer() {
    return (<footer className="bg-muted/40 h-full">
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 gap-4 sm:grid-cols-2 ssm:grid-cols-1 mx-auto gap-6 h-full p-12">
            <div className="flex-col justify-center text-center align-center">
                <Link
                    href="/"
                    className="text-3xl font-bold "
                >
                    Gostack
                </Link>
                <p className="text-muted-foreground p-2">Gostack é um projeto focado em contribuir com tutoriais e artigos no mundo da tecnologia da informação TI.</p>
            </div>
            <div className="flex justify-center ">
                <ul>
                    <li>
                        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                            Manifesto
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                            Apoiadores
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground">
                            Sugestões
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center gap-3">
                <Link
                    href="https://github.com/bennie-ferreira/gostack"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Github />
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                >
                    <Coffee />
                </Link>
            </div>
        </div>
        <div className="flex justify-center pb-12">
            <p className=" text-center">Desenvolvido com ❤️ por <b>Bennie Ferreira</b></p>
        </div>
    </footer>)
}