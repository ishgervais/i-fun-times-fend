/* eslint-disable @next/next/no-img-element */
import NavLink from "./NavLink"
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined, WhatsAppOutlined} from '@ant-design/icons'
import Button from "./buttons/Button"
export default function Footer(): JSX.Element {
    return (
        <section className="mt-5 md:mt-10 text-gray-500 p-2" id="footer">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
                <div className="flex items-center gap-2 justify-start my-5">
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
                    <NavLink title="I-Fun Credits " path="#credits" styles="hover:text-red-500 hover:font-bold"/>
                    </div>
                </div>
                <div className="my-5 lg:my-0">
                    <h1 className="font-bold text-black">Contact us</h1>
                    <div className="my-3">
                    <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex gap-2 items-center">
                            <InstagramOutlined/>
                            <NavLink title="I-Fun Times" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>

                        <div className="flex gap-2 items-center">
                            <FacebookOutlined/>
                            <NavLink title="I-Fun Times" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <TwitterOutlined/>
                            <NavLink title="I-Fun Times" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <LinkedinOutlined/>
                            <NavLink title="I-Fun Times" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <WhatsAppOutlined/>
                            <NavLink title="+250 782 842 174" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MailOutlined/>
                            <NavLink title="ifuntimes01@gmail.com" path="#academics" styles="hover:text-red-500 hover:font-bold"/>
                        </div>

                       
                        


                        
                        </div>
                    </div>
                </div>

                <div className="my-5 lg:my-0">
                <h1 className="font-bold text-black">Talk to Us</h1>
                    <form action="" className="my-3">
                        <div className="form-group border rounded p-2 gap-2 flex items-center text-sm">
                            <MailOutlined/>
                            <input type="email" name="" id="" className="focus:outline-none px-1 w-full" placeholder="Email address" />

                        </div>
                        <div className="form-group border rounded p-2 text-sm my-3">
                            <textarea rows={5} name="" id="" className="focus:outline-none px-3 w-full" placeholder="Message"/>

                        </div>
                        <Button title="Send" loading={false} loadingTitle="Sending ..."/>
                    </form>
                </div>
            </div>
            <div className="mt-5 md:mt-10 w-full text-center">
                <span className="text-black text-sm">&copy; {new Date().getFullYear()} i-Fun Times, All rights reserved</span>
            </div>
        </section>
    )
}