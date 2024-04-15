import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Banner() {
    const pathImage = "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"

    return (
        <div className="grid lg:grid-cols-2 ssm:grid-cols-1 gap-3">
            <img
                className="rounded-lg w-full h-auto"
                src={pathImage}
                alt="Picture of the author"
            />
            <div className="justify-between">
                <Badge variant={'outline'} className="text-2xl md:ml-10 min-[320px]:ml-0">Noticias</Badge>
                <div className="flex flex-col md:p-10 min-[320px]:p-0">
                    <h1 className="font-bold md:text-6xl min-[320px]:text-5xl text-wrap truncate"> Boas praticas em desenvolvimento com Nodejs </h1>
                    <p className="font-normal text-muted-foreground md:text-2xl min-[320px]:text-xl [&:not(:first-child)]:mt-6 text-wrap truncate"> Boas praticas em desenvolvimento com Nodejs e Aprenda como otmizar e performar seu aplicativo para gerar receita</p>
                </div>
            </div>
        </div>
    )
}