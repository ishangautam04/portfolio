"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies I use in my projects"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-xl font-bold mb-6">
                  <span
                    className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                  >
                    {category.title}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
