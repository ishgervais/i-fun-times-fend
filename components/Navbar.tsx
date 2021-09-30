import NavLink from "./NavLink";

export default function Navbar(): JSX.Element {
    return (
        <nav className="p-2 top">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="flex items-center gap-2 md:gap-5 justify-center md:justify-start">
                    <div className="bg-red-500 sm-circle flex items-center justify-center text-white p-1 rounded-full font-bold text-sm">I-Fun</div>
                    <h1 className="font-bold">i-Fun Times Magazine</h1>
                </div>
                <div className="overflow-x-auto">
                <div className="text-gray-500 flex gap-5 md:gap-0 md:justify-between mt-5 md:mt-0 text-sm w-max md:w-full">
                    <NavLink title="Academics" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Literature" path="#literature" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Internal relations" path="#relations" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Culture week " path="#culture" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="I-Fun Credits " path="#credits" styles="hover:text-red-500 hover:font-bold"/>
                    <NavLink title="Talk to Us " path="#footer" styles="hover:text-red-500 hover:font-bold"/>
                </div>
                </div>
               
            </div>
        </nav>
    )
}