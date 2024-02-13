"use client";
import Image from "next/image";
import Heart from "./components/Heart";
import { useState } from "react";

export default function Home() {
  const [noButtonText, setNoButtonText] = useState("No!");
  const [yesButtonSize, setYesButtonSize] = useState(10);
  const [imageSrc, setImageSrc] = useState("/images/bemine.gif");
  const [showNewImage, setShowNewImage] = useState(false); // State to control visibility of new image
  const [showQuestion, setShowQuestion] = useState(true); // State to control visibility of the question text
  const [showFinish, setShowFinish] = useState(false); // State to control visibility of the finish text

  const handleNoButtonClick = () => {
    if (noButtonText === "No!") {
      setNoButtonText("Are you sure?");
      setImageSrc("/images/hehe.gif");
      setShowQuestion(false); // Hide the "Will you be my valentine?" text
    } else if (noButtonText === "Are you sure?") {
      setNoButtonText("Lordy! I already am your girlfriend.");
      setImageSrc("/images/angry2.jfif");
    } else if (noButtonText === "Lordy! I already am your girlfriend.") {
      setNoButtonText("Blood! Are you flipping kidding me?");
      setImageSrc("/images/angry.jfif");
    } else if (noButtonText === "Blood! Are you flipping kidding me?") {
      setNoButtonText("Mandem! Wagwan with you?");
      setImageSrc("/images/angry3.gif");
    } else if (noButtonText === "Mandem! Wagwan with you?") {
      setNoButtonText("Mon amour! Stop teasing and be my valentine already!");
      setImageSrc("/images/unhappy2.gif");
    }
    setYesButtonSize(yesButtonSize + 1);
  };

  const handleYesButtonClick = () => {
    // Show the "I love you" image
    setImageSrc("/images/ily2.gif");
    // Hide the buttons
    setShowNewImage(true);
    // Hide the question text
    setShowQuestion(false);
    // Show the finish text
    setShowFinish(true);
  };

  return (
    <main className="flex min-h-screen bg-rose-300 relative">
      <div className="container mt-2 ml-2 flex">
        <div>
          <Heart />
          <Heart />
          <Heart />
        </div>
      </div>

      <div className="flex justify-end items-end flex-grow-2 py-6">
        <div className="flex flex-col items-end">
          <Heart />
          <Heart />
          <Heart />
        </div>
      </div>

      <Image
        key={imageSrc} // Add key prop here
        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        src={imageSrc}
        alt="iloveyou image"
        width={200}
        height={200}
        loading="lazy"
        style={{ objectFit: "cover", objectPosition: "center center", zIndex: 1 }}
        loop
      />

      {!showNewImage && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-md"
            onClick={handleYesButtonClick}
            style={{ fontSize: `${yesButtonSize}px` }}
          >
            Yes
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={handleNoButtonClick}>
            {noButtonText}
          </button>
        </div>
      )}
      
      {showQuestion && (
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-24 text-center">
          <p className="text-lg font-bold text-gray-800">Will you be my Valentine?</p>
        </div>
      )}

      {showFinish && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-lg font-bold text-gray-800">Yay! You&apos;re now my Valentine! We will have a date where we do some fun activities.(Let&apos;s pick an actual date!)</p>
        </div>
      )}
    </main>
  );
}