"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { HeartIcon, MessageCircleIcon } from "@/components/ui/icons";
import Link from "next/link";

export function Instagram() {
  const [mediaItems, setMediaItems] = useState<any[]>([]);
  const token = process.env.NEXT_PUBLIC_INSTAGRAM_KEY;

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://graph.instagram.com/me/media?fields=id,caption,permalink,media_url,media_type,user_likes,children{media_url,media_type}&access_token=${token}`;
      try {
        const response = await fetch(url);
        const feed = await response.json();
        if (Array.isArray(feed.data)) {
          setMediaItems(feed.data);
          console.log(feed.data);
        } else {
          console.error("Os dados retornados não são um array:", feed.data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-12">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="w-12 h-12 md:w-16 md:h-16">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>
              <img src={"/logo-senamun.svg"} alt="SN" />
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="text-lg font-semibold">@senamun_</div>
            <div className="text-sm text-muted-foreground">SenaMUN</div>
          </div>
        </div>
        <Link
          href="instagram://user?username=senamun_"
          onClick={() =>
            window.open("https://www.instagram.com/senamun_/", "_blank")
          }
        >
          <Button variant="outline">Seguir</Button>
        </Link>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mediaItems.map((item: any) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-lg"
          >
            {/* Link colocado acima de todos os elementos para garantir o clique */}
            <Link
              href={item.permalink}
              className="absolute inset-0 z-10"
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">View Post</span>
            </Link>

            {item.media_type === "CAROUSEL_ALBUM" ? (
              item.children.data.length > 0 && (
                <div>
                  {item.children.data[0].media_type === "IMAGE" ? (
                    <img
                      src={item.children.data[0].media_url}
                      alt={item.caption}
                      width={500}
                      height={500}
                      className="object-cover w-full aspect-square"
                    />
                  ) : item.children.data[0].media_type === "VIDEO" ? (
                    <video
                      controls
                      width={500}
                      height={500}
                      className="object-cover w-full aspect-square"
                    >
                      <source
                        src={item.children.data[0].media_url}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p className="p-4 text-center text-gray-700">
                      Tipo de mídia desconhecido
                    </p>
                  )}
                </div>
              )
            ) : item.media_type === "IMAGE" ? (
              <img
                src={item.media_url}
                alt={item.caption}
                width={500}
                height={500}
                className="object-cover w-full aspect-square"
              />
            ) : item.media_type === "VIDEO" ? (
              <video
                controls
                width={500}
                height={500}
                className="object-cover w-full aspect-square"
              >
                <source src={item.media_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <p className="p-4 text-center text-gray-700">
                Tipo de mídia desconhecido
              </p>
            )}

            {/* Overlay ajustado para estar abaixo do link */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-0">
              <div className="flex items-center gap-4 text-sm text-white">
                <div className="flex items-center gap-1">
                  <HeartIcon className="w-4 h-4 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircleIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
