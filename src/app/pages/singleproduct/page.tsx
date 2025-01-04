import Image from "next/image";
import ProductGrid from "./grid";
import Link from "next/link";

export default function SingleProduct(){
    return (
      <div className="font-sans">

<div className="flex items-center justify-between bg-[#f8f1e9] p-4 rounded-md shadow-sm">
      {/* Filter and View Options */}
      <div className="flex items-center pl-24">
        <div className="flex items-center font-semibold text-black">
        <li className="flex "><p className="font-semibold text-[#898989]">Home &nbsp;</p> 
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
              <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
          </svg> 
          <p className="text-[#898989]">&nbsp; Shop &nbsp;</p> 
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 12 24">
              <path fill="black" fillRule="evenodd" d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"></path>
          </svg>
        </li>
        </div>
        <div className="text-black ml-4 pl-4 font-semibold border-[#898989] border-l">
          Asgaard sofa
        </div>
    </div>
      
    </div>
  
        <div className="flex flex-col lg:flex-row mt-10 gap-8 px-6">
            <div className="gap-2 ml-20 mt-4">
              <div>
              <Image className="rounded-lg mt-6 shadow-md"
              src="/Group 94.png"
              alt="Asgaard Sofa"
              width={76}
              height={80}/>
              </div>
              <div>
              <Image className="rounded-lg mt-6 shadow-md"
              src="/Group 96.png"
              alt="Asgaard Sofa"
              width={76}
              height={80}/>
              </div>
              <div>
              <Image className="rounded-lg mt-6 shadow-md"
              src="/Group 97.png"
              alt="Asgaard Sofa"
              width={76}
              height={80}/> <br />
              </div>
              <div>
              <Image className="rounded-lg shadow-md"
              src="/Group 98.png"
              alt="Asgaard Sofa"
              width={76}
              height={80}/>
              </div>
            </div>
          <div className="ml-6">
            <Image className="bg-[#f8f1e9] rounded-lg shadow-md"
              src="/sofa1.png"
              alt="Asgaard Sofa"
                width={481}
                height={391}
            />
          </div>
  
          <div className="flex-1">
            <h1 className="text-2xl font-bold pb-4 text-gray-800">Asgaard Sofa</h1>
            <span className="text-lg font-semibold tracking-wide text-gray-500">Rs. 250,000.00</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <div className="text-sm text-gray-500 ml-4 pl-4 font-semibold border-[#898989] border-l">
              5 Customer Review
              </div>
            </div>
            <p className="text-xl font-semibold text-gray-800 mt-4">$1200.00</p>
            <p className="text-sm text-gray-600 mt-2">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            <div>
            <span className="block font-medium text-gray-800 mt-4">Colors:</span>
            <ul className="flex space-x-5 -ml-80 pt-4 justify-center font-[sans-serif]">
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white cursor-pointer text-base text-black p-[20px] h-12 rounded-md">
                    L
                </li>
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white cursor-pointer text-base text-black px-[20px] h-12 rounded-md">
                    XL
                </li>
                <li
                    className="flex items-center justify-center shrink-0 bg-[#FAF3EA] hover:bg-[#B88E2F] hover:text-white  cursor-pointer text-base text-black px-[20px] h-12 rounded-md">
                    XS
                </li>
            </ul>
            </div>

            <div className="mt-6">
              <span className="block font-medium text-gray-800 mb-2">Colors:</span>
              <div className="flex gap-2">
                {['#4A90E2', '#1C1C1C', '#B88E2F'].map((color) => (
                  <div
                    key={color}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex">
                <div>
                  <button type="button"
                      className="flex items-center mt-2 px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                          <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                      </svg>

                      <span className="mx-2.5">1</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                          <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                      </svg>
                  </button>
                </div>
                    <Link href={"/pages/cart"}><button className="w-40 ml-12 py-2 border border-black text-gray-800 rounded-lg shadow-lg hover:bg-gray-100">
                    <p className="font-bold">Add To Cart</p>
                    </button></Link>
                    <button className="px-4 py-2 border border-black text-gray-800  rounded-lg shadow-lg ml-4 hover:bg-gray-100">
                    <p className="font-bold">+ Compare</p>
                    </button>
            </div>
          </div>
        </div>

        
        <div className="ml-20">
          <div className="flex gap-16 ml-52">
            <h1 className="text-[30px]  py-12 font-semibold">Description</h1>
            <h1 className="text-[30px] text-[#9F9F9F] py-12 font-semibold">Additional Information</h1>
            <h1 className="text-[30px] text-[#9F9F9F] py-12 font-semibold">Reviews [5]</h1>

          </div>
          <p className="w-[817px] text-[#9F9F9F] text-justify">Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p><br />
          <p className="w-[817px] text-[#9F9F9F] text-justify">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
          <button className="mt-10 font-semibold border-b border-black tracking-wider pb-2">Read more</button>
        </div>
            
        <Image className="bg-[#f8f1e9] ml-14 mt-8 rounded-lg shadow-md"
          src="/Group 109.png"
          alt="img"
            width={1239}
            height={348}
        />

        
      <div className="text-center mt-10 mx-auto text-[#333333]">
        <h1 className="text-[28px]"><strong>Related Products</strong></h1>
      </div>

        <ProductGrid/>
      
      <div className="text-center mx-auto"> 
          <button className="my-10 px-16 py-2 bg-white border border-[#B88E2F] text-[#B88E2F] hover:bg-yellow-700 hover:text-white">
            Show More
          </button>
      </div>

      </div>
    );
  };
  