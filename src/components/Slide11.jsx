import Image from "next/image";

const Slide11 = ({ isActive }) => {
  // isActive değilse hiçbir şey render etme
  if (!isActive) {
    return <div className="w-full h-screen bg-white" />;
  }

  return (
    <div className="w-full h-screen bg-white relative">
      <Image
        src="/3+1.webp"
        alt="Logo"
        width={1400}
        height={1000}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />

      <div className="w-full h-screen flex flex-col items-center justify-center md:hidden">
        <Image src="/3+1K.webp" alt="Logo" width={800} height={800} />
        <Image src="/3+1Y.webp" alt="Logo" width={300} height={300} />
      </div>
    </div>
  );
};

export default Slide11;
