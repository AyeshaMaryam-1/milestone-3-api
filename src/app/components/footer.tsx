export default function Footer(){
    return(
        <div>
            <footer className="font-sans tracking-wide pb-4 px-10">
                
            <hr className="mb-8 border-[#9F9F9F] -mx-10" />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-4 max-w-screen-lg">
                    <div className="ml-8 ">
                        <h1 className="text-[28px]"><strong>Furniro</strong></h1>
                        <p className="text-[#9F9F9F] pt-8">400 University Drive Suite 200 Coral <br /> Gables, <br />
                        FL 33134 USA</p>
                    </div>

                    <div className="pl-20">
                    <h4 className="text-[#9F9F9F] font-semibold text-lg mb-6 pt-2">Links</h4>
                    <ul className="space-y-7">
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Home</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Shop</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">About</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Contact</a>
                        </li>
                    </ul>
                    </div>

                    <div>
                    <h4 className="text-[#9F9F9F] font-semibold text-lg mb-6 pt-2">Help</h4>
                    <ul className="space-y-7">
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Payment Options</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Returns</a>
                        </li>
                        <li>
                        <a href="javascript:void(0)" className="hover:text-[#FFA726] text-black font-semibold text-[15px] transition-all">Privacy Policies</a>
                        </li>
                    </ul>
                    </div>
                    <div className="font-semibold">
                        <h4 className="text-[#9F9F9F] font-semibold text-lg mb-6 pt-2">Newsletter</h4>
                        <div className="flex">
                            <input type="email" placeholder="Enter Your Email Address" className="text-[#9F9F9F] border-b border-black w-52"/>
                        <button className="ml-4 border-b border-black">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <hr className="mt-14 mb-6 border-[#9F9F9F]" />
                    <p className="text-black font-semibold text-[15px] pl-8">2023 furino. All rights reverved</p>
            </footer>
        </div>
    )
}