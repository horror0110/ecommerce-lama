"use client";
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/27116945/pexels-photo-27116945/free-photo-of-a-narrow-alleyway-with-blue-and-white-buildings.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/15599692/pexels-photo-15599692/free-photo-of-halves-of-green-lime.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/16575637/pexels-photo-16575637/free-photo-of-woman-looking-out-the-restaurant-window.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/28056124/pexels-photo-28056124/free-photo-of-a-book-and-an-apple-on-a-rock-by-the-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, index) => (
          <div onClick={()=> setIndex(index)} key={image.id} className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer">
            <Image
              src={image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
