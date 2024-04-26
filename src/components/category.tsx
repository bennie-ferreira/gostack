import { Badge } from "@/components/ui/badge"

export default function Categories() {
    return (
        <div className="flex gap-3 flex-wrap">
            <Badge className="text-md rounded-sm">Todo artigos</Badge>
            <Badge className="text-md rounded-sm">Python</Badge>
            <Badge className="text-md rounded-sm">Javascript</Badge>
            <Badge className="text-md rounded-sm">Java</Badge>
            <Badge className="text-md rounded-sm">PHP</Badge>
            <Badge className="text-md rounded-sm">Linux</Badge>
        </div>
    )
}