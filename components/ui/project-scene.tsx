"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

const Spline = dynamic(
  () => import("@splinetool/react-spline"),
  { ssr: false }
);

type Media =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      src: string;
    }
  | {
      type: "spline";
      scene: string;
    };

export default function ProjectMedia({
  media,
  title,
}: {
  media: Media;
  title: string;
}) {
  switch (media.type) {
    case "image":
      return (
        <Image
          src={media.src}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      );

    case "video":
      return (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={media.src} />
        </video>
      );

    case "spline":
      return (
        <Spline scene={media.scene} />
      );

    default:
      return null;
  }
}