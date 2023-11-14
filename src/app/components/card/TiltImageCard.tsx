'use client'

import React from "react";
import Image from 'next/image'
import pfp from '../../../../public/profile.jpg'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
//Shoutout to hover.dev and Tom-is-loading(youtube) for this component

const TiltImageCard = () => {
  return (
    
      <TiltCard />
    
  );
};

const TiltCard = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["7.5deg", "-7.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-7.5deg", "7.5deg"]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const imageStyle = {
    borderRadius: '50%',
    transform: 'translateZ(30px)'
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-fit w-fit rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          borderRadius: '50%',
          outline: '2px solid #fff',
          outlineOffset: '10px',
        }}
        className="grid place-content-center shadow-lg"
      >
        <Image
            src={pfp}
            width={400}
            height={400}
            alt="Dilip Singh Gurjar"
            style={imageStyle}
          />
      </div>
    </motion.div>
  );
};

export default TiltImageCard;