"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    scale: 0,
  },
  animate: (index: number) => ({
    rotate: 360,
    scale: 1,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-sm text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="px-5 py-3  dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="flex flex-col items-center justify-center">
              <div
                style={{ fontSize: "50px", color: skill.iconColor }}
                className="px-5"
              >
                {skill.icon}
              </div>
              <span className="pt-3 text-connect">{skill.text}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
