// "use client";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Slide1 from "./Slide1";
// import Slide2 from "./Slide2";
// import Slide3 from "./Slide3";
// import Slide4 from "./Slide4";
// import Slide5 from "./Slide5";
// import Slide6 from "./Slide6";
// import Slide7 from "./Slide7";
// import Slide8 from "./Slide8";
// import Slide10 from "./Slide10";
// import Slide11 from "./Slide11";
// import FormSlider from "./FormSlider";
// import Slide12 from "./Slide12";
// import Slide13 from "./Slide13";
// import Slide9 from "./Slide9";
// import WhatsappRefButton from "./WhatsappRefButton";

// const slides = [
//   { id: 1, item: Slide1 },
//   { id: 2, item: Slide2 },
//   { id: 3, item: Slide3 },
//   { id: 4, item: Slide4 },
//   { id: 5, item: Slide5 },
//   { id: 6, item: Slide6 },
//   { id: 7, item: Slide7 },
//   { id: 8, item: Slide8 },
//   { id: 9, item: Slide9 },
//   { id: 10, item: Slide10 },
//   { id: 11, item: Slide11 },
//   { id: 12, item: FormSlider },
//   { id: 13, item: Slide12 },
//   { id: 14, item: Slide13 },
// ];

// export function MainCarousel() {
//   const [api, setApi] = useState();
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     if (!api) return;

//     setCurrent(api.selectedScrollSnap());

//     api.on("select", () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <div className="w-screen h-screen fixed inset-0 overflow-hidden">
//       <Carousel
//         setApi={setApi}
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         orientation="vertical"
//         className="w-full h-full"
//         style={{ height: "100vh" }}
//       >
//         <CarouselContent
//           className="h-full"
//           style={{ height: "100vh", margin: 0 }}
//         >
//           {slides.map((slide, index) => {
//             const SlideComponent = slide.item;
//             const isActive = current === index;

//             return (
//               <CarouselItem
//                 key={slide.id}
//                 className="h-screen basis-full"
//                 style={{
//                   height: "100vh",
//                   minHeight: "100vh",
//                   padding: 0,
//                   flexShrink: 0,
//                 }}
//               >
//                 <div className="w-full h-full">
//                   <SlideComponent isActive={isActive} />
//                 </div>
//               </CarouselItem>
//             );
//           })}
//         </CarouselContent>

//         {/* Navigation Arrows */}
//         <CarouselPrevious className="absolute top-8 left-1/2 -translate-x-1/2 rotate-90 z-50 bg-white/20 hover:bg-white/40" />
//         <CarouselNext className="absolute bottom-8 left-1/2 -translate-x-1/2 rotate-90 z-50 bg-white/20 hover:bg-white/40" />

//         {/* Logo - Sol altta, ilk slide hariç tüm slide'larda göster */}
//         {current !== 0 && (
//           <div className="absolute bottom-12 left-9 z-50 hidden md:block">
//             <Image
//               src="/favicon.png"
//               alt="Logo"
//               width={100}
//               height={100}
//               className="transition-opacity duration-300"
//             />
//           </div>
//         )}

//         {/* WhatsApp Button - Sağ altta */}
//         <div className="absolute bottom-20 right-5 md:bottom-12 md:right-12 z-50">
//           <WhatsappRefButton />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide10 from "./Slide10";
import Slide11 from "./Slide11";
import FormSlider from "./FormSlider";
import Slide12 from "./Slide12";
import Slide13 from "./Slide13";
import Slide9 from "./Slide9";
import WhatsappRefButton from "./WhatsappRefButton";

const slides = [
  { id: 1, item: Slide1 },
  { id: 2, item: Slide2 },
  { id: 3, item: Slide3 },
  { id: 4, item: Slide4 },
  { id: 5, item: Slide5 },
  { id: 6, item: Slide6 },
  { id: 7, item: Slide7 },
  { id: 8, item: Slide8 },
  { id: 9, item: Slide9 },
  { id: 10, item: Slide10 },
  { id: 11, item: Slide11 },
  { id: 12, item: FormSlider },
  { id: 13, item: Slide12 },
  { id: 14, item: Slide13 },
];

export function MainCarousel() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index) => {
    api?.scrollTo(index);
  };

  return (
    <div className="w-screen h-screen fixed inset-0 overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        className="w-full h-full"
        style={{ height: "100vh" }}
      >
        <CarouselContent
          className="h-full"
          style={{ height: "100vh", margin: 0 }}
        >
          {slides.map((slide, index) => {
            const SlideComponent = slide.item;
            const isActive = current === index;

            return (
              <CarouselItem
                key={slide.id}
                className="h-screen basis-full"
                style={{
                  height: "100vh",
                  minHeight: "100vh",
                  padding: 0,
                  flexShrink: 0,
                }}
              >
                <div className="w-full h-full">
                  <SlideComponent isActive={isActive} />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="absolute top-8 left-1/2 -translate-x-1/2 rotate-90 z-50 bg-white/20 hover:bg-white/40" />
        <CarouselNext className="absolute bottom-8 left-1/2 -translate-x-1/2 rotate-90 z-50 bg-white/20 hover:bg-white/40" />

        {/* Dikey Pagination - Sol tarafta */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => scrollTo(index)}
              className={`
                w-8 h-8 rounded-full transition-all duration-300 flex items-center justify-center
                font-semibold text-sm cursor-pointer
                ${
                  current === index
                    ? "bg-gray-100 text-black scale-110"
                    : "bg-gray-300 text-gray-400 hover:bg-white/40"
                }
              `}
              aria-label={`Slide ${index + 1}'e git`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {/* Logo - Sol altta, ilk slide hariç tüm slide'larda göster */}
        {current !== 0 && (
          <div className="absolute bottom-12 left-9 z-50 hidden md:block">
            <Image
              src="/favicon.png"
              alt="Logo"
              width={80}
              height={80}
              className="transition-opacity duration-300"
            />
          </div>
        )}

        {/* WhatsApp Button - Sağ altta */}
        <div className="absolute bottom-20 right-5 md:bottom-12 md:right-12 z-50">
          <WhatsappRefButton />
        </div>
      </Carousel>
    </div>
  );
}
