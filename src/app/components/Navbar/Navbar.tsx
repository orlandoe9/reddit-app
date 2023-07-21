import Image from "next/image";
import reddit from "../../../../public/reddit.webp";
export default function Navbar() {
  return (
    <nav className="bg-navbar w-full flex flex-row items-center justify-center lg:justify-start ">
      <div className="p-4">
        <Image src={reddit} alt={"reddit"} width={30} height={30}></Image>
      </div>
      <p className="text-lg font-readex text-white">reddit</p>
    </nav>
  );
}
