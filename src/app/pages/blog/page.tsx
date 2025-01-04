import Image from "next/image";

export default function Blog(){
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center overflow-hidden">
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
                    <h1 className="text-[44px] text-center font-semibold">Blog</h1>
                        <li className="flex ml-2 "><p className="font-semibold">Home</p> 
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
                                <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
                            </svg>Blog
                        </li>
                </div>
            </div>

            <div className="flex m-20">
                <Image className="banner" 
                        src="/blog1.png"
                        alt="img"
                        width={817}
                        height={500}/>
                <div className="ml-16">
                    <div className='flex max-lg:w-full'>
                        <div className='flex xl:w-80 max-xl:w-full px-4 py-3 rounded-xl outline outline-transparent border focus-within:border-blue-600 focus-within:bg-transparent transition-all'>
                            <input type='text' placeholder=''
                            className='w-full text-sm bg-transparent rounded outline-none pr-2' />
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
                            </svg>
                        </div>
                    </div>
                    {/* Categories */}
                        <h1 className="text-[26px] pl-10 py-6 font-semibold">Categories</h1>
                    <div className=" flex grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <ul className="pl-10"> 
                                <li className=" text-[#9F9F9F] pt-5">Crafts</li><br />
                                <li className=" text-[#9F9F9F] pt-5">Design</li><br />
                                <li className=" text-[#9F9F9F] pt-5">Handmade</li><br />     
                                <li className=" text-[#9F9F9F] pt-5">Interior</li><br />
                                <li className=" text-[#9F9F9F] pt-5">Wood</li><br />
                            </ul>
                        </div>
                        <div>
                            <ul className="text-[#9F9F9F] pl-32">
                                <li className="pt-5">2</li>
                                <li className="pt-11">8</li>
                                <li className="pt-11">7</li>
                                <li className="pt-11">1</li>
                                <li className="pt-11">6</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex text-[#9F9F9F] gap-8 -mt-16 ml-20">
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"></path>
                        </svg>
                    <li className="ml-2">Admin</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.75 4a.75.75 0 0 0-1.5 0v1.816a3.375 3.375 0 0 0-2.872 2.899l-.087.653q-.022.165-.042.332a.493.493 0 0 0 .492.55H20.26a.493.493 0 0 0 .492-.55l-.042-.332l-.087-.653a3.375 3.375 0 0 0-2.872-2.899V4a.75.75 0 0 0-1.5 0v1.668a48 48 0 0 0-8.5 0zm13.195 8.226a.494.494 0 0 0-.496-.476H3.551a.494.494 0 0 0-.496.476a29 29 0 0 0 .33 5.41a3.01 3.01 0 0 0 2.678 2.532l1.193.118c3.155.31 6.333.31 9.488 0l1.193-.118a3.01 3.01 0 0 0 2.678-2.532a29 29 0 0 0 .33-5.41"></path>
                        </svg>
                    <li className="ml-2">14 Oct 2022</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10.368 0a.68.68 0 0 1 .484.201l8.35 8.39c.558.586.836 1.249.794 1.958c-.04.664-.304 1.274-.807 1.846l-7.074 7.037l-.115.092c-.638.406-1.26.564-1.85.428c-.515-.118-1.054-.436-1.677-.978l-8.16-8.219a.68.68 0 0 1-.199-.47L0 1.472C.007 1.044.126.681.392.413C.666.138 1.055.023 1.588 0zM6.473 4.574a1.59 1.59 0 1 0 0 3.18c.879 0 1.593-.711 1.593-1.59c0-.878-.713-1.59-1.593-1.59"></path>
                        </svg>
                    <li className="ml-2">Wood</li>
                    </div>
                </ul>
            </div>
            {/* content */}
            <div className="flex">
                <div className="ml-20">
                    <h1 className="text-[30px] py-6 font-semibold">Going all-in with millennial design</h1>
                    <p className="w-[817px] text-[#9F9F9F] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="mt-10 font-semibold border-b border-black tracking-wider pb-2">Read more</button>
                    <Image className="mt-14" 
                        src="/blog2.png"
                        alt="img"
                        width={817}
                        height={500}/>
                </div>
                <div className="ml-16 w-[260px]">
                <h1 className="text-[26px]  pt-8 font-semibold">Recent Posts</h1>
                <ul className="">
                    <li className="flex">
                        <Image className="mt-8" 
                            src="/post1.png"
                            alt="img"
                            width={80}
                            height={80}/>
                        <div className="pl-4 pt-8">
                            <h2 className="font-semibold tracking-wider">Going all-in with millennial design</h2>
                            <h3 className="text-[#9F9F9F] text-[14px]">03 Aug 2022</h3>
                        </div>
                    </li>
                    <li className="flex">
                        <Image className="mt-8" 
                            src="/post2.png"
                            alt="img"
                            width={80}
                            height={80}/>
                        <div className="pl-4 pt-8">
                            <h2 className="font-semibold tracking-wider">Exploring new ways of decorating</h2>
                            <h3 className="text-[#9F9F9F] text-[14px]">03 Aug 2022</h3>
                        </div>
                    </li>
                    <li className="flex">
                        <Image className="mt-8" 
                            src="/post3.png"
                            alt="img"
                            width={80}
                            height={80}/>
                        <div className="pl-4 pt-8">
                            <h2 className="font-semibold tracking-wider">Handmade pieces that took time to make</h2>
                            <h3 className="text-[#9F9F9F] text-[14px]">03 Aug 2022</h3>
                        </div>
                    </li>
                    <li className="flex">
                        <Image className="mt-8" 
                            src="/post4.png"
                            alt="img"
                            width={80}
                            height={80}/>
                        <div className="pl-4 pt-8">
                            <h2 className="font-semibold tracking-wider">Modern home in Milan</h2>
                            <h3 className="text-[#9F9F9F] text-[14px]">03 Aug 2022</h3>
                        </div>
                    </li>
                    <li className="flex">
                        <Image className="mt-8" 
                            src="/post5.png"
                            alt="img"
                            width={80}
                            height={80}/>
                        <div className="pl-4 pt-8">
                            <h2 className="font-semibold tracking-wider">Colorful office redesign</h2>
                            <h3 className="text-[#9F9F9F] text-[14px]">03 Aug 2022</h3>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
            <div>
                <ul className="flex text-[#9F9F9F] gap-8 mt-4 ml-20">
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"></path>
                        </svg>
                    <li className="ml-2">Admin</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.75 4a.75.75 0 0 0-1.5 0v1.816a3.375 3.375 0 0 0-2.872 2.899l-.087.653q-.022.165-.042.332a.493.493 0 0 0 .492.55H20.26a.493.493 0 0 0 .492-.55l-.042-.332l-.087-.653a3.375 3.375 0 0 0-2.872-2.899V4a.75.75 0 0 0-1.5 0v1.668a48 48 0 0 0-8.5 0zm13.195 8.226a.494.494 0 0 0-.496-.476H3.551a.494.494 0 0 0-.496.476a29 29 0 0 0 .33 5.41a3.01 3.01 0 0 0 2.678 2.532l1.193.118c3.155.31 6.333.31 9.488 0l1.193-.118a3.01 3.01 0 0 0 2.678-2.532a29 29 0 0 0 .33-5.41"></path>
                        </svg>
                    <li className="ml-2">14 Oct 2022</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10.368 0a.68.68 0 0 1 .484.201l8.35 8.39c.558.586.836 1.249.794 1.958c-.04.664-.304 1.274-.807 1.846l-7.074 7.037l-.115.092c-.638.406-1.26.564-1.85.428c-.515-.118-1.054-.436-1.677-.978l-8.16-8.219a.68.68 0 0 1-.199-.47L0 1.472C.007 1.044.126.681.392.413C.666.138 1.055.023 1.588 0zM6.473 4.574a1.59 1.59 0 1 0 0 3.18c.879 0 1.593-.711 1.593-1.59c0-.878-.713-1.59-1.593-1.59"></path>
                        </svg>
                    <li className="ml-2">Wood</li>
                    </div>
                </ul>
            </div>
            <div className="ml-20">
                    <h1 className="text-[30px] py-6 font-semibold">Exploring new ways of decorating</h1>
                    <p className="w-[817px] text-[#9F9F9F] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="mt-10 font-semibold border-b border-black tracking-wider pb-2">Read more</button>
                    <Image className="mt-14" 
                        src="/blog3.png"
                        alt="img"
                        width={817}
                        height={500}/>
            </div>
            <div>
                <ul className="flex text-[#9F9F9F] gap-8 mt-4 ml-20">
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10 9.25c-2.27 0-2.73-3.44-2.73-3.44C7 4.02 7.82 2 9.97 2c2.16 0 2.98 2.02 2.71 3.81c0 0-.41 3.44-2.68 3.44m0 2.57L12.72 10c2.39 0 4.52 2.33 4.52 4.53v2.49s-3.65 1.13-7.24 1.13c-3.65 0-7.24-1.13-7.24-1.13v-2.49c0-2.25 1.94-4.48 4.47-4.48z"></path>
                        </svg>
                    <li className="ml-2">Admin</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M7.75 4a.75.75 0 0 0-1.5 0v1.816a3.375 3.375 0 0 0-2.872 2.899l-.087.653q-.022.165-.042.332a.493.493 0 0 0 .492.55H20.26a.493.493 0 0 0 .492-.55l-.042-.332l-.087-.653a3.375 3.375 0 0 0-2.872-2.899V4a.75.75 0 0 0-1.5 0v1.668a48 48 0 0 0-8.5 0zm13.195 8.226a.494.494 0 0 0-.496-.476H3.551a.494.494 0 0 0-.496.476a29 29 0 0 0 .33 5.41a3.01 3.01 0 0 0 2.678 2.532l1.193.118c3.155.31 6.333.31 9.488 0l1.193-.118a3.01 3.01 0 0 0 2.678-2.532a29 29 0 0 0 .33-5.41"></path>
                        </svg>
                    <li className="ml-2">14 Oct 2022</li>
                    </div>
                    <div className="flex ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20">
                            <path fill="currentColor" d="M10.368 0a.68.68 0 0 1 .484.201l8.35 8.39c.558.586.836 1.249.794 1.958c-.04.664-.304 1.274-.807 1.846l-7.074 7.037l-.115.092c-.638.406-1.26.564-1.85.428c-.515-.118-1.054-.436-1.677-.978l-8.16-8.219a.68.68 0 0 1-.199-.47L0 1.472C.007 1.044.126.681.392.413C.666.138 1.055.023 1.588 0zM6.473 4.574a1.59 1.59 0 1 0 0 3.18c.879 0 1.593-.711 1.593-1.59c0-.878-.713-1.59-1.593-1.59"></path>
                        </svg>
                    <li className="ml-2">Wood</li>
                    </div>
                </ul>
            </div>
            <div className="ml-20">
                    <h1 className="text-[30px] py-6 font-semibold">Handmade pieces that took time to make</h1>
                    <p className="w-[817px] text-[#9F9F9F] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                    <button className="mt-10 font-semibold border-b border-black tracking-wider pb-2">Read more</button>
            </div>
            <ul className="flex space-x-5 pt-8 justify-center font-[sans-serif]">
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white cursor-pointer text-base text-black p-[20px] h-12 rounded-md">
                    1
                </li>
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white cursor-pointer text-base text-black px-[20px] h-12 rounded-md">
                    2
                </li>
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white  cursor-pointer text-base text-black px-[20px] h-12 rounded-md">
                    3
                </li>
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white  cursor-pointer text-base text-black px-[20px] h-12 rounded-md">
                    Next
                </li>
            </ul>







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
                                <h3 className="ml-8 w-[480px] text-[#9F9F9F]">Order over 150 $</h3>
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
    )
}