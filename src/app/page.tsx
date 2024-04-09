import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  const pathImage = "https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"

  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">

      {/* banner inicio */}
      <div className="flex flex-row">
        <Image
          className="h-auto max-w-full object-cover rounded-lg"
          src={pathImage}
          alt="Picture of the author"
          width={800}
          height={200}
        />
        <div className="flex flex-col justify-between">
          <div className="flex-col">
            <Badge variant={'outline'} className="ml-10 text-2xl">Noticias</Badge>
          </div>
          <div className="flex flex-col p-10">
            <h1 className="font-bold text-6xl"> Boas praticas em desenvolvimento com Nodejs </h1>
            <p className="font-normal text-2xl [&:not(:first-child)]:mt-6"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </div>
          <div className="flex pl-10">
            <Avatar className="h-[50px] w-[50px]">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold text-2xl">Bennie ferreira</p>
              <p className="font-normal text-lg">Abril 1, 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3 rounded-sm">
        <Badge className="text-md">Todo artigos</Badge>
        <Badge className="text-md">Python</Badge>
        <Badge className="text-md">Javascript</Badge>
        <Badge className="text-md">Java</Badge>
        <Badge className="text-md">PHP</Badge>
        <Badge className="text-md">Linux</Badge>
      </div>

      <div className="flex justify-betweeen gap-4">
        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-betweeen gap-4">
        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>

        <Card className="w-[450px] shadow-none">
          <Image
            className="h-auto max-w-full object-cover rounded-t-xl"
            src={pathImage}
            alt="Picture of the author"
            width={500}
            height={100}
          />
          <CardContent>
            <Badge variant={'outline'} className="mt-2 mb-2 text-md">Linux</Badge>
            <h3 className="font-bold text-3xl"> Guia para otimizar e inscrever seus aplicativos na playstore </h3>
            <p className="leading-7 [&:not(:first-child)]:mt-2"> Aprenda como otmizar e performar seu aplicativo para gerar receita </p>
          </CardContent>
          <CardFooter className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col ml-2">
              <p className="font-bold">Bennie ferreira</p>
              <p>Abril 1, 2024</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
