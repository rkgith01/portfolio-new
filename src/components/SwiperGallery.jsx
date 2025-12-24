// components/SwiperGallery.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const SwiperGallery = ({ images }) => (
  <Swiper
    modules={[EffectFade, Pagination]}
    effect="fade"
    pagination={{ clickable: true }}
    loop={true}
    spaceBetween={50}
    slidesPerView={1}
    className="w-full h-64 md:h-96"
  >
    {images.map((image, idx) => (
      <SwiperSlide key={idx}>
        <Image
          width={500}
          height={500}
          className="drop-shadow-2xl object-cover w-full h-full rounded-lg grayscale"
          src={image}
          alt="project image"
        />
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperGallery;
