"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading> About me </SectionHeading>
      <p className="mb-3">
        I'm a software engineer with experience in building web applications,
        working
      </p>
      <p>
        I'm a software engineer with experience in building web applications,
        working
      </p>
    </motion.section>
  );
}
