"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import { experiences, education, certifications } from "@/data/experience";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="Where I've worked and what I've built along the way"
        />

        {/* Timeline */}
        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-2 md:left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[30px] md:-left-[34px] top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800" />

                <Card>
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <div className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </div>
                    </div>
                    {exp.current && (
                      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs px-3 py-1 rounded-full font-medium">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                      >
                        <span className="text-primary-600 mt-0.5">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <GraduationCap className="w-6 h-6 text-primary-600" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu) => (
                <Card key={edu.id}>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {edu.institution}
                  </div>
                  <div className="text-primary-600 dark:text-primary-400 font-medium">
                    {edu.degree}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 dark:text-gray-400 mt-2">
                    <span>{edu.period}</span>
                    <span>{edu.location}</span>
                    <span>{edu.detail}</span>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <Award className="w-6 h-6 text-primary-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id}>
                  <div className="font-bold text-gray-900 dark:text-white">
                    {cert.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {cert.issuer}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
