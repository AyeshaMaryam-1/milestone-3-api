import Image from "next/image";

export default function Contact(){
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center overflow-hidden">
                {/* banner */}
                <Image className="banner" 
                    src="/banner.png"
                    alt="img"
                    width={1440}
                    height={316}/>
                <div className=" absolute mx-[620px]">
                    <Image className="mx-auto" 
                        src="/logo.png"
                        alt="img"
                        width={50}
                        height={32}/>
                    <h1 className="text-[44px] text-center font-semibold">Contact</h1>
                        <li className="flex ml-4 "><p className="font-semibold">Home</p> 
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
                                <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
                            </svg>Contact
                        </li>
                </div>
            </div>

            <div className="text-center mx-auto my-10">
                <h1 className="text-[28px] text-black"><strong>Get In Touch With Us</strong></h1>
                <h3 className="mx-auto mt-4 w-[580px] text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h3>
            </div>

            <div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-40">
            <div className="grid lg:grid-cols-2 items-center gap-10 sm:p-8 p-4 font-[sans-serif]">
                <div className="w-[220px]">
                    <ul>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="mt-1">
                                <path fill="currentColor" fillRule="evenodd" d="M11.291 21.706L12 21zM12 21l.708.706a1 1 0 0 1-1.417 0l-.006-.007l-.017-.017l-.062-.063a48 48 0 0 1-1.04-1.106a50 50 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C4.535 12.612 4 11.248 4 10c0-4.539 3.592-8 8-8s8 3.461 8 8c0 1.248-.535 2.612-1.213 3.87c-.693 1.286-1.604 2.585-2.497 3.735a50 50 0 0 1-3.496 4.014l-.062.063l-.017.017l-.006.006zm0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clipRule="evenodd"></path>
                            </svg>
                            <h3 className="text-[22px] ml-8 font-semibold">Address</h3>
                        </div>
                            <li className="flex items-center text-[20px]">
                                <a href="javascript:void(0)" className="text-black text-sm ml-14 w-[200px]">
                                    236 5th SE Avenue, New York NY10000, United States
                                </a>
                            </li>
                        <div className="flex mt-14">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="mt-1">
                                <path fill="currentColor" d="m20.487 17.14l-4.065-3.696a1 1 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a1 1 0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39"></path>
                            </svg>
                            <h3 className="text-[22px] ml-8 font-semibold">Phone</h3>
                        </div>
                        <li className="flex items-center">
                            <a href="javascript:void(0)" className="text-black text-sm ml-14">Mobile: +(84) 546-6789</a>
                        </li>
                        <li className="flex items-center">
                            <a href="javascript:void(0)" className="text-black text-sm ml-14">Hotline: +(84) 456-6789</a>
                        </li>
                        <div className="flex mt-14">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" className="mt-2">
                                <path fill="currentColor" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                            </svg>
                            <h3 className="text-[22px] ml-8 font-semibold">Working Time</h3>
                        </div>
                        <li className="flex items-center">
                            <a href="javascript:void(0)" className="text-black text-sm ml-14">Monday-Friday: 9:00 - 22:00
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a href="javascript:void(0)" className="text-black text-sm ml-14">Saturday-Sunday: 9:00 - 21:00
                            </a>
                        </li>
                    </ul>
                </div>

                {/* form */}
                <div className="mt-6">
                    <form className="mt-4 space-y-6">
                        <label className="text-gray-800 text-sm">Your Name</label>
                        <input type='text' placeholder='abc'
                            className="w-full rounded-md border py-3 px-4 text-gray-800 text-sm outline-[#a91079]" /><br /><br />
                        <label className="text-gray-800 text-sm">Email address</label>
                        <input type='email' placeholder='Abc@def.com'
                            className="w-full rounded-md border py-3 px-4 text-gray-800 text-sm outline-[#a91079]" /><br /><br />
                        <label className="text-gray-800 text-sm">Subject</label>
                        <input type='text' placeholder='This is an optional'
                            className="w-full rounded-md border py-3 px-4 text-gray-800 text-sm outline-[#a91079]" /><br /><br />
                        <label className="text-gray-800 text-sm">Message</label>
                        <textarea placeholder='Hi! i&apos;d like to ask about' 
                            className="w-full rounded-md border px-4 text-gray-800 text-sm pt-3 outline-[#a91079]"></textarea>
                        <button type='button'
                            className="text-white bg-[#B88E2F] hover:bg-[#a91079e2] tracking-wide rounded-md text-sm px-4 py-3 flex items-center justify-center w-48 !mt-6">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            </div>
            {/* services */}
            <div>
                <div className="w-[1348px] h-[270px] bg-[#FAF3EA] mt-8"> 
                    <ul className="flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-screen-xl px-16 py-28">
                        <li className="ml-10 flex">
                                <Image className="logo mt-1" 
                                    src="/g1.png"
                                    alt="img"
                                    width={60}
                                    height={60}/>
                            <div>
                                <h2 className="text-[20px] ml-8 font-semibold text-[#242424]">High Quality</h2>
                                <h3 className="ml-8 w-[580px] text-[#9F9F9F]">crafted from top materials</h3>
                            </div>
                        </li>
                        <li className="ml-14 flex">
                                <Image className="logo mt-1" 
                                    src="/g2.png"
                                    alt="img"
                                    width={60}
                                    height={60}/>
                            <div>
                                <h2 className="text-[20px] ml-8 font-semibold text-[#242424]">Warranty Protection</h2>
                                <h3 className="ml-8 w-[580px] text-[#9F9F9F]">Over 2 years</h3>
                            </div>
                        </li>
                        <li className="ml-20 flex">
                                <Image className="logo mt-1" 
                                    src="/g3.png"
                                    alt="img"
                                    width={60}
                                    height={60}/>
                            <div>
                                <h2 className="text-[20px] ml-8 font-semibold text-[#242424]">Free Shipping</h2>
                                <h3 className="ml-8 w-[580px] text-[#9F9F9F]">Order over 150 $</h3>
                            </div>
                        </li>
                        <li className="ml-10 flex">
                                <Image className="logo mt-1" 
                                    src="/g4.png"
                                    alt="img"
                                    width={60}
                                    height={60}/>
                            <div>
                                <h2 className="text-[20px] ml-8 font-semibold text-[#242424]">24 / 7 Support</h2>
                                <h3 className="text-[#9F9F9F] ml-8">Dedicated support</h3>
                            </div>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    )
}