"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  link,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // 3D mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]));

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = (event.clientX - rect.left - width / 2) / width;
    const mouseYPos = (event.clientY - rect.top - height / 2) / height;
    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        perspective: "1000px",
      }}
      className="group mb-8 sm:mb-12 last:mb-0"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.section
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative max-w-[75rem] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-2xl hover:shadow-4xl transition-all duration-500 group"
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: isHovered
              ? [
                  "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                  "linear-gradient(45deg, #8b5cf6, #06b6d4)",
                  "linear-gradient(45deg, #06b6d4, #3b82f6)",
                ]
              : "linear-gradient(45deg, transparent, transparent)",
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Glassmorphism background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 dark:from-white/5 dark:to-white/2 backdrop-blur-md" />

        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: isHovered
              ? "linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(6, 182, 212, 0.5))"
              : "transparent",
          }}
          style={{
            background: "linear-gradient(45deg, transparent, transparent)",
            padding: "2px",
            borderRadius: "16px",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 p-6 sm:p-8 h-full min-h-[24rem] flex flex-col lg:flex-row items-center gap-8">
          {/* Text content */}
          <motion.div
            className="flex-1 space-y-4"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="group/title inline-block"
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover/title:from-blue-600 group-hover/title:to-purple-600 transition-all duration-300">
                  {title}
                </h3>
              </a>
            </motion.div>

            <motion.p
              className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-md"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {description}
            </motion.p>

            {/* Animated tags */}
            <motion.ul
              className="flex flex-wrap gap-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {tags.map((tag, index) => (
                <motion.li
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 backdrop-blur-sm hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-default"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 15,
                  }}
                >
                  {tag}
                </motion.li>
              ))}
            </motion.ul>

            {/* View project button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
                <motion.svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Image with enhanced effects */}
          <motion.div
            className="flex-1 relative group/image"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Glowing image border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-0 group-hover/image:opacity-50 transition-opacity duration-500"
                style={{ transform: "scale(1.1)" }}
              />

              <Image
                src={imageUrl}
                alt={`${title} project screenshot`}
                width={600}
                height={400}
                quality={95}
                className="relative z-10 w-full h-auto rounded-xl transition-transform duration-500 group-hover/image:scale-110"
              />

              {/* Image overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
