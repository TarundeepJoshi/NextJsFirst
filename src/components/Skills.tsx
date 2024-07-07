"use client";
import Image from "next/image";

function Skills() {
  return (
    <div
      className="h-auto w-full rounded-md relative flex flex-col items-center justify-center antialiased"
      id="skills"
    >
      <section className="mx-auto px-4 py-2 pb-7 max-w-[1050px]">
        <div className="mt-2 flex justify-center items-center flex-col md:py-8">
          <div className="relative group w-fit inline-block self-center">
            <div className="text-[#8892b0] rounded-xl w-fit">
              <h1 className="font-jetbrain text-center text-5xl mb-10">
                <span className="font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-600">
                  code
                </span>
                <span className="text-foreground">:</span>
                <span className=" font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700">
                  skills
                </span>
              </h1>
            </div>
          </div>

          <div className="flex flex-nowrap flex-col gap-8 justify-center items-center ">
            <div className="flex-wrap flex gap-8 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
                      alt="javascript"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Javascript
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"
                      alt="typscript"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Typescript
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
                      alt="html"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    HTML
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000"
                      alt="css"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    CSS
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap flex gap-6 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#2da4b9] min-w-[140px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000"
                      alt="react"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    React
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#2da4b9] min-w-[140px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=84710&format=png&color=000000"
                      alt="bootstrap"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Bootstrap
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#2da4b9] min-w-[140px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"
                      alt="tailwind"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Tailwind
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#2da4b9] min-w-[140px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=62452&format=png&color=000000"
                      alt="firebase"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Firebase
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap flex gap-6 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
                      alt="nodejs"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Node.Js
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"
                      alt="nextjs"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    NextJs
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
                      alt="expressjs"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Express
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap flex gap-6 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                      alt="mongodb"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    MongoDB
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000"
                      alt="github"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    GitHub
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=sBo1RJ3rjbje&format=png&color=000000"
                      alt="netlify"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Netlify
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap flex gap-6 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px]">
                  <div>
                    <svg
                      width="22px"
                      height="22px"
                      viewBox="0 -17 256 256"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid"
                      fill="#ffffff"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <polygon
                            fill="#ffffff"
                            points="128 0 256 221.705007 0 221.705007"
                          >
                            {" "}
                          </polygon>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Vercel
                  </p>
                </div>
              </div>

              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=0HyDNss5DL1B&format=png&color=000000"
                      alt="git"
                      loading="lazy"
                      width={25}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    Git
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-wrap flex gap-6 justify-center items-center">
              <div className="relative skill">
                <div className="flex relative z-[1] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 border-[1px] border-gray-700 border-solid rounded-[5px] shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px]">
                  <div>
                    <Image
                      src="https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000"
                      alt="vscode"
                      loading="lazy"
                      width={24}
                      height={0}
                    />
                  </div>
                  <p className="font-grotesk text-gray-200 text-sm md:text-base">
                    VS Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
