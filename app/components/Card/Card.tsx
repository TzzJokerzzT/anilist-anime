"use client";

import { useAnimeStore } from "@/context/AnilistProvider";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tooltip,
  TooltipAction,
  TooltipContent,
  TooltipProvider,
} from "keep-react";
import Image from "next/image";
import Link from "next/link";

export interface CardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  episodes: number;
  type: string;
  status: string;
}

export const CardComponent = ({
  id,
  image,
  title,
  episodes,
  type,
  status,
}: CardProps) => {
  const { setID } = useAnimeStore();

  const handleClick = (id: number) => {
    setID(id);
  };
  return (
    <TooltipProvider delayDuration={0}>
      <Card className="border-none cursor-pointer">
        <Tooltip>
          <TooltipAction asChild>
            <CardHeader>
              <Link href={`/anime`} onClick={() => handleClick(id)}>
                <Image
                  src={image}
                  className="rounded-t-xl"
                  alt={title}
                  width={130}
                  height={150}
                />
              </Link>
            </CardHeader>
          </TooltipAction>
          <TooltipContent className="bg-[#4fc4cf] border-[#4fc4cf]">
            <Card className="max-w-md">
              <CardContent>
                <CardTitle>
                  <Link href={`/anime`} onClick={() => handleClick(id)}>
                    {title}
                  </Link>
                </CardTitle>
                <p className="text-[#2e2e2e]">Episodes: {episodes}</p>
                <p className="text-[#2e2e2e]">Type: {type}</p>
                <p className="text-[#2e2e2e]">Status: {status}</p>
              </CardContent>
            </Card>
          </TooltipContent>
        </Tooltip>
      </Card>
    </TooltipProvider>
  );
};
