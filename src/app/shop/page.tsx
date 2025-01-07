import Image from "next/image";
import { Product } from "@/context/CartProvider";
import Buying from "@/components/addtocart";
import Link from "next/link";
import { cardItems } from "@/components/home/cards/item";
import Header from "@/components/header";

const Shopcards = () => {
  return (
    <>
      <Header title="Shoping" />
      <section className="overflow-hidden bg-siteBg  md:h-full ">
        <div className=" xs:h-full md:h-full bg-no-repeat bg-[url('/photo/download1.png')] bg-center py-[70px] md:bg-[length:102%_94%] lg:bg-[length:97%_109%]">
          <div className="">
            <div className="w-full ">
              <div className="cards mt-[140px]  xs:gap-[7rem] md:gap-y-[7rem] md:gap-x-[4rem] ">
                <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3    gap-12 !overflow-visible xs:!px-7 md:!px-12">
                  {cardItems.map((item) => {
                    return (
                      <>
                        <Link href={`/shop-detail/${item.id}`} key={item.id}>
                          <div className="card mb-16 h-[391px] bg-cardBg text-center flex items-center justify-center flex-col px-5 pb-[51px] rounded-tl-[4rem] rounded-br-[4rem]">
                            <div>
                              <div className="m-auto  relative block  ">
                                <div className="relative mt-[-6rem] mb-[2rem]">
                                  <div className="group after:bg-imghover after:absolute after:left-0 after:top-0 after:w-full after:h-0 after:opacity-[1] hover:after:h-full hover:after:opacity-0 hover:after:duration-700 w-full h-full relative  ">
                                    <Image
                                      src={item.url}
                                      alt="img"
                                      width={207}
                                      height={207}
                                      className="rounded-full group-hover:scale-[1.1]  duration-[0.4s] ease-in-out imgAnm "
                                    />
                                  </div>
                                </div>
                                <div className="imgAnm bg-siteColor rounded-full w-[54px] h-[54px]  text-white  absolute top-[3rem] left-[160px]  flex items-center justify-center  font-bold">
                                  {item.price}$
                                </div>
                              </div>
                            </div>
                            <div className="text-center">
                              <div>
                                <h1 className="mb-[15px] text-[20px] font-bold text-white">
                                  {item.title}
                                </h1>
                                <p className="mb-5 text-[15px] leading-[26px] font-normal text-white line-clamp-3">
                                  {item.description}
                                </p>
                              </div>
                              <div className="justify-center flex ">
                                <Buying product={item} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shopcards;
