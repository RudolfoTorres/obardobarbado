"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const HeroMascot = () => {
    return (
        <div className="relative flex items-center justify-center">
            {/* Decorative background element */}
            <div className="absolute inset-0 bg-wood/5 rounded-full blur-3xl scale-75 pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 0.8,
                        ease: "easeOut"
                    }
                }}
                className="relative z-10 w-full max-w-[380px]"
            >
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="drop-shadow-[0_20px_50px_rgba(122,83,54,0.15)]"
                >
                    <Image
                        src="/images/glockenspiel.png"
                        alt="Glockenspiel, o Bardo Barbado"
                        width={500}
                        height={600}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};
