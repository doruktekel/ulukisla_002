// "use client";

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { SplitText } from "gsap/SplitText";
// import Image from "next/image";

// gsap.registerPlugin(SplitText);

// const Slide10 = ({ isActive }) => {
//   useGSAP(() => {
//     if (!isActive) return;
//     const tl = gsap.timeline({ delay: 0.5 });

//     let split1 = SplitText.create(".content1", { type: "words, lines" });
//     let split2 = SplitText.create(".content2", {
//       type: "words , lines ",
//     });

//     // Timeline ile sırayla
//     tl.from(split1.lines, {
//       duration: 0.5,
//       y: 100,
//       autoAlpha: 0,
//       ease: "power4.out",
//     }).from(
//       split2.words,
//       {
//         // Birinciden hemen sonra başlar
//         duration: 1,
//         y: 100,
//         autoAlpha: 0,
//         ease: "power4.out",
//       },
//       "+=0.2"
//     ); // 0.2 saniye bekle sonra başla
//   }, [isActive]);

//   return (
//     <div className="w-full h-screen bg-white">
//       <Image
//         src="/2+1.webp"
//         alt="Logo"
//         width={1400}
//         height={1000}
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
//       />

//       <div className="w-full h-screen flex flex-col items-center justify-center md:hidden">
//         <Image src="/2+1K.webp" alt="Logo" width={800} height={800} />
//         <Image src="/2+1Y.webp" alt="Logo" width={300} height={300} />
//       </div>
//     </div>
//   );
// };

// export default Slide10;

"use client";

import Image from "next/image";

const Slide10 = ({ isActive }) => {
  // isActive değilse hiçbir şey render etme
  if (!isActive) {
    return <div className="w-full h-screen bg-white" />;
  }

  return (
    <div className="w-full h-screen bg-white relative">
      <Image
        src="/2+1.webp"
        alt="Logo"
        width={1400}
        height={1000}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      <div className="w-full h-screen flex flex-col items-center justify-center md:hidden">
        <Image src="/2+1K.webp" alt="Logo" width={800} height={800} />
        <Image src="/2+1Y.webp" alt="Logo" width={300} height={300} />
      </div>
    </div>
  );
};

export default Slide10;
