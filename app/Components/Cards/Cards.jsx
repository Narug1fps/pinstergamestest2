"use client";
import Image from "next/image";


export default function Cards() {
  return (
    <>
      <main className=" bg-neutral-800 shadow-[inset_0px_0px_30px_8px_#000] mt-12 z-1 ">
        <div className=" flex min-h-screen items-center justify-center ">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image width={288} height={384} src="/Discord card.png" alt=""/>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Discord
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Entre no nosso servidor do discord agora, e fique por cima de
                  todos os assuntos de Mary.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black">
                  <a target="_blank" href="https://discord.gg/MAJBHKXAHH">
                    See More{" "}
                  </a>
                </button>
              </div>
            </div>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image width={288} height={384} src="/Mary card.png" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Mary
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Coloque Mary na sua wish list da Steam para ficar atento para
                  pegar o jogo no lançamento
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black">
                <a
                  target="_blank"
                  href="https://store.steampowered.com/app/3017570/Mary/?l=brazilian"
                >
                  See More{" "}
                </a>
              </button>
              </div>
            </div>
            <div className=" mb-12 md:mb-0 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72">
                <Image width={288} height={384} src="/Youtube card.png" alt="" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">
                  Youtube
                </h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Se inscreva no nosso canal do youtube para receber todos os
                  videos sober Mary.
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-white hover:text-black">
                  <a target="_blank" href="https://www.youtube.com/@pinstergms">
                    See More{" "}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
