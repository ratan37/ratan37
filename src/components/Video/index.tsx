"use client";

import Image from "next/image";


const Video = () => {
 

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">

        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-2">
            <div
              className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
              <Image src="/images/promo.gif" alt="Promo GIF" className="w-full h-100" width={100} height={200}/>
                
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
};

export default Video;
