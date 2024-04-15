import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
            {/* <CardFooter className="flex">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>BN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col ml-2">
                    <p className="font-bold">Bennie ferreira</p>
                    <p>Abril 1, 2024</p>
                </div>
            </CardFooter> */}
        </Card>
    )
}