"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Mail, Phone } from "lucide-react";
import { aboutData } from "@/data/about";
import SectionTitle from "./SectionTitle";
import Card from "./Card";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know more about who I am and what I do"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl transform rotate-6" />
              <div className="relative bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                {/* Placeholder - replace with actual image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-6xl">👤</span>
                </div>
                {/* Uncomment when you have an image */}
                {/* <Image
                  src={aboutData.image}
                  alt={aboutData.name}
                  fill
                  className="object-cover"
                /> */}
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Who am I?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {aboutData.bio}
            </p>

            {/* Contact Info */}
            <Card className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>{aboutData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-5 h-5 text-primary-600" />
                <a
                  href={`mailto:${aboutData.email}`}
                  className="hover:text-primary-600 transition-colors"
                >
                  {aboutData.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Phone className="w-5 h-5 text-primary-600" />
                <span>{aboutData.phone}</span>
              </div>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <Card className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  5+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years Experience
                </div>
              </Card>
              <Card className="text-center">
                <div className="text-3xl font-bold text-accent-600 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Projects Done
                </div>
              </Card>
              <Card className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  30+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Happy Clients
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
