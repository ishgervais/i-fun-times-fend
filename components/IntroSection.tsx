/* eslint-disable @next/next/no-img-element */
export default function IntroSection(): JSX.Element {
    return (
        <section className="p-2 w-full flex justify-center my-10">
            <div className="w-full">
            <h1 className="font-bold text-4xl"> <span className="text-red-500"> i-Fun Times </span> <br /> Magazine</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 mt-5 md:my-10">
                <div className="">
                        <img src="./benon.png" alt="" className=" my-5 rounded lg-img" />

                </div>
                <div className="text-gray-500 my-4">
                    <h1 className="text-gray-500 text-sm">September 30, 2021</h1>
                    <p className="my-5 text-black text-3xl font-bold">
                    Isomo academy had been a friend!
                    </p>
                    {/* content */}
                    <p className="text-sm text-gray-500">
                    Isomo academy had been a friend, a family, a teacher and an adventure that drenched our minds with education, the only weapon that one can use to change the world. This quest twisted our identification. Thanks to Isomo Academy, change has come to Rwandan society. The sun of hope has risen in the sky of Africa, and its light will never fade away.
                    </p>

                    {/* author */}
                    <h2 className="italic text-xs my-5">@Dadyne, Isomo scholar</h2>
                </div>
            </div>

            </div>
        </section>
    )
}