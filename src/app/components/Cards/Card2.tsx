"use client";
import Image from "next/image";
import { useState } from "react";
import comments from "../../../../public/comments.svg";
import dots from "../../../../public/dots.svg";
import like from "../../../../public/like.svg";
import post2 from "../../../../public/post2.png";
import pp from "../../../../public/pp.webp";
import save from "../../../../public/save.svg";
import saved from "../../../../public/saved.svg";
import share from "../../../../public/share.svg";
import unlike from "../../../../public/unlike.svg";
export default function Card() {
  const [liked, setLiked] = useState(false);
  const [upSaved, setSaved] = useState(false);
  const isLikeButtonPressed = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };
  const isSaveButtonPressed = () => {
    if (upSaved) {
      setSaved(false);
    } else {
      setSaved(true);
    }
  };
  return (
    <div className="bg-card bg-center flex flex-col w-11/12 h-fit rounded shadow py-4 mx-auto lg:">
      <div className="flex flex-row justify-between px-2 ">
        <Image
          className="rounded-full "
          src={pp}
          alt={"reddidPP"}
          width={30}
          height={30}
        ></Image>
        <p className="absolute px-10">Author: Dominic Garcia</p>
        <button onClick={isLikeButtonPressed}>
          <Image
            src={liked ? like : unlike}
            alt={"unlike"}
            width={34}
            height={34}
          ></Image>
          <p className="absolute">1222</p>
        </button>
      </div>
      <section className="flex flex-col px-10 text-left text-xl break-normal">
        The Truth About Collagen, Vitamins, and Probiotics
        <div className="pt-3 ">
          <Image src={post2} alt={"post"}></Image>
        </div>
      </section>
      <section className="flex flex-row pt-7 mx-2 justify-start">
        <Image src={comments} width={30} height={30} alt={"comments"}></Image>
        <p className="mx-3">Comments</p>
        <Image src={share} width={30} height={30} alt={"share"}></Image>
        <p className="mx-3">Share</p>
        <button className="flex flex-row " onClick={isSaveButtonPressed}>
          <Image
            src={upSaved ? saved : save}
            width={30}
            height={30}
            alt={"save"}
          ></Image>
          <p className="mx-3">Save</p>
        </button>
        <Image
          className="mx-24"
          src={dots}
          width={30}
          height={30}
          alt={"save"}
        ></Image>
      </section>
    </div>
  );
}
