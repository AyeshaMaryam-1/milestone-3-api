import Image from "next/image";
import Link from "next/link";
import ProductGrid from "./pages/hover/productGrid";

export default function Home(){
  return(
    <div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
        <Image className="main" 
        src="/img1.png"
        alt="img"
        width={1440}
        height={716.83}/>
        <div className="absolute mt-18 right-24 w-[550px] h-[380px] pl-10 pt-14 pr-20 bg-[#FFF3E3] rounded-lg">
          <h2 className="text-sm font-medium text-gray-600 uppercase">
            New Arrival
          </h2>
          <h1 className="text-5xl font-bold text-[#B88E2F] mt-2">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-black mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-10 px-12 py-3 bg-[#B88E2F] text-white hover:bg-yellow-700">
            BUY NOW
          </button>
        </div>
      </div>
    </div>

      <div className="text-center mx-auto text-[#333333] my-10">
        <h1 className="text-[28px]"><strong>Browse The Range</strong></h1>
        <h3 className="mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
      </div>
      <div>
        <div className="font-[sans-serif] p-4 mx-auto lg:max-w-5xl sm:max-w-2xl max-w-md">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-md overflow-hidden cursor-pointer">
            <div className="w-full overflow-hidden">
              <Image className="h-full w-full object-cover object-top hover:scale-110 transition-all" 
                src="/dining.png"
                alt="img"
                width={381}
                height={480}/>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                <h3 className="text-lg font-bold text-gray-800">Dining</h3>
              </div>
            </div>
          </div>

          <div className="rounded-md overflow-hidden cursor-pointer">
            <div className="w-full overflow-hidden">
              <Image className="h-full w-full object-cover object-top hover:scale-110 transition-all" 
                  src="/living.png"
                  alt="img"
                  width={381}
                  height={480}/>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                <h3 className="text-lg font-bold text-gray-800">Living</h3>
              </div>
            </div>
          </div>

          <div className="rounded-md overflow-hidden cursor-pointer">
            <div className=" overflow-hidden">
              <Image className="h-auto object-cover object-top hover:scale-110 transition-all" 
                  src="/bedroom.png"
                  alt="img"
                  width={381}
                  height={480}/>
            </div>

            <div className="p-6">
              <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                <h3 className="text-lg font-bold text-gray-800">Bedroom</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mx-auto text-[#333333]">
        <h1 className="text-[28px]"><strong>Our Products</strong></h1>
      </div>

    <div>

      <ProductGrid />

      <div className="text-center mx-auto"> 
          <button className="mt-10 px-16 py-2 bg-white border border-[#B88E2F] text-[#B88E2F] hover:bg-yellow-700 hover:text-white">
            <Link href={"/pages/singleproduct"}>Show More</Link>
          </button>
      </div>

    <div>
      <Image className="h-auto object-cover object-top" 
        src="/Inspirations.png"
        alt="img"
        width={1760}
        height={734}/>
    </div>
      <div className="text-center mx-auto text-[#333333] my-10">
        <h3 className="mx-auto">Share your setup with</h3>
        <h1 className="text-[28px]"><strong>#FuniroFurniture</strong></h1>
      </div>

      </div>
      <Image className="h-auto object-cover object-top mb-10" 
        src="/funiro.png"
        alt="img"
        width={1799}
        height={721}/>
      </div>
    </div>
  )
}