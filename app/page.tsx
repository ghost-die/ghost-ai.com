import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        听雪阁
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
    
      <h2 className="text-sm text-zinc-500">
      一人，一剑，守一座孤城，等你归来
      </h2>
      <h2 className="text-sm text-zinc-500">
          开源协议：MIT license 开源地址：
          <Link
            target="_blank"
            href="https://github.com/chronark/chronark.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            chronark.com
          </Link> 
          ICP 备案：
          <Link 
            target="_blank"
            href="https://beian.miit.gov.cn"
            className="underline duration-500 hover:text-zinc-300"
          >
            皖ICP备17004047号
          </Link>
        </h2>
      </div>

      
    </div>
  );

}
