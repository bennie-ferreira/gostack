import Link from "next/link"
import { Coffee, Github } from "lucide-react"

export default function Footer() {
    return (<footer className="bg-black h-full">
        <div className="grid grid-cols-3 gap-4 h-full p-10">
            <div className="flex-col justify-center text-center align-center">
                <Link
                    href="/"
                    className="text-3xl font-bold text-white"
                >
                    Gostack
                </Link>
                <p className="text-white">Gostack é um projeto focado em contribuir com tutoriais e artigos no mundo da tecnologia da informação TI.</p>
            </div>
            <div className="flex justify-center text-white">
                <ul>
                    <li>
                        <Link href="#">
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Manifesto
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Apoiadores
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            Sugestões
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center gap-3">
                <Link
                    href="https://github.com/bennie-ferreira/gostack"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground text-white"
                >
                    <Github />
                </Link>
                <Link
                    href="#"
                    target="_blank"
                    className="text-muted-foreground transition-colors hover:text-foreground text-white"
                >
                    <Coffee />
                </Link>
            </div>
        </div>
        <div className="flex justify-center pb-6">
            <p className="text-white text-center">Desenvolvido com ❤️ por <b>Bennie Ferreira</b></p>
        </div>
    </footer>)
}