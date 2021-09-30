/* eslint-disable @next/next/no-img-element */
import NavLink from "./NavLink"
export default function Footer(): JSX.Element {
    return (
        <section className="mt-5 md:mt-10 text-gray-500 p-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
                <div className="flex items-center gap-5 justify-start my-5">
                    <div className="bg-red-500 sm-circle flex items-center justify-center text-white p-1 rounded-full font-bold text-sm">I-Fun</div>
                    <h1 className="font-bold text-black">i-Fun Times Magazine</h1>
                </div>
                <div className="my-5 lg:my-0">
                    <h1 className="font-bold text-black mb-5 grid">Sections</h1>
                    <div className="grid grid-cols-1 gap-3 text-sm">

                    <NavLink title="Academics" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Literature" path="#literature" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Internal relations" path="#relations" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Culture week " path="#culture" styles="hover:text-red-500 hover:font-bold"/>
                    </div>
                </div>
                <div className="my-5 lg:my-0">
                    <h1 className="font-bold text-black">Contact us</h1>
                </div>
            </div>
            <div className="mt-5 md:mt-10 w-full text-center">
                <span className="text-black text-sm">&copy; {new Date().getFullYear()} i-Fun Times, All rights reserved</span>
            </div>
        </section>
    )
}