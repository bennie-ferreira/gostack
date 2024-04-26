import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";

export default function CardPost() {
    const pathImage = "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
    return (
        <Card className="shadow-none">
            <Image
                className="rounded-t-xl"
                src={pathImage}
                alt="Picture of the author"
                width={600}
                height={420}
            />
            <CardContent>
                <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
                <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-2 text-muted-foreground"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
            </CardContent>
        </Card>
    )
}