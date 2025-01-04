import Image from "next/image";

export default function Checkout(){
    return(
        <div>
            <div className="flex flex-col md:flex-row items-center overflow-hidden">
                <Image className="banner relative flex flex-col -z-10 " 
                    src="/banner.png"
                    alt="img"
                    width={1440}
                    height={316}/>
                <div className="absolute mx-[620px]">
                    <Image className="mx-auto" 
                        src="/logo.png"
                        alt="img"
                        width={50}
                        height={32}/>
                    <h1 className="text-[44px] text-center font-semibold">Checkout</h1>
                        <li className="flex ml-4 "><p className="font-semibold">Home</p> 
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
                                <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
                            </svg>Checkout
                        </li>
                </div>
            </div>
            {/* checkout form */}
            <div className="flex my-16 mx-40 gap-40">
                <div>
                    <h1 className="text-[28px] text-black mb-10"><strong>Billing details</strong></h1>
                    <div className="flex gap-8">
                        <div>
                            <label className="text-gray-800 text-sm">First Name</label><br />
                                <input type='text' className="w-[120px] rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm outline-[#a91079]" /><br />
                        </div>
                        <div>
                            <label className="text-gray-800 text-sm">Last Name</label><br />
                                <input type='text' className="w-[120px] rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm outline-[#a91079]" /><br />
                        </div>
                    </div>
                    <div className="mt-6">
                            <label className="text-gray-800 text-sm">Company Name (Optional)</label>
                            <input type='text' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Contry / Region</label>
                            <input type='email' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Street Address</label>
                            <input type='text' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Town / City</label>
                            <input type='text' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Province</label>
                            <input type='text' placeholder='This is an optional'
                                className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">ZIP code</label>
                            <input type='text' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Phone</label>
                            <input type='tel' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <label className="text-gray-800 text-sm">Email address</label>
                            <input type='email' className="w-full rounded-md border py-3 px-4 mt-3 text-gray-800 text-sm " /><br /><br />
                            <input type='text' placeholder="Additional Information" className="w-full rounded-md border py-3 px-4 mt-4 text-gray-800 text-sm" /><br /><br />
                    </div>
                </div>
                <div className="w-[460px]">
                    <div>
                        <div className=" flex grid grid-cols-1 md:grid-cols-2 gap-32 mt-20 pb-6 border-b border-[#9F9F9F]">
                            <div>
                                <ul>
                                    <li><h1 className="text-[24px] my-2 font-semibold">Product</h1></li>
                                    <li className="text-[#9F9F9F] my-4 flex">Asgaard sofa <p className="text-black">&nbsp;x 1</p></li>
                                    <li className="text-[20px] my-2">Subtotal</li>
                                    <li className="text-[20px] my-2">Total</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="ml-10">
                                    <li><h1 className="text-[24px] my-2 font-semibold">Subtotal</h1></li>
                                    <li className=" my-4">Rs. 250,000.00</li>
                                    <li className="mt-1  my-2">Rs. 250,000.00</li>
                                    <li className="text-[24px] my-2 -ml-16 font-bold text-[#B88E2F]">Rs. 250,000.00  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="list-disc">
                            <li><h1 className="text-[24px] my-3 font-semibold">Direct Bank Transfer</h1></li>
                        </ul>
                        <p className="text-[#9F9F9F] text-justify">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <ul className="list-disc text-[#9F9F9F] my-3">
                            <li className="mb-3">Direct Bank Transfer</li>
                            <li>Cash On Delivery</li>
                        </ul>
                        <p className="text-justify">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
                        
                        <button type='button'
                            className="mx-auto text-black border border-black hover:bg-[#B88E2F] hover:text-white  hover:border-none tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-48 mt-10">
                            Place order
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {/* services */}
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
        </div>
    )
}