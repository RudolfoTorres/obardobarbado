"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Clock, Calendar, ChevronRight } from "lucide-react";
import { Conto } from "@/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "./ui-elements";
import { useState } from "react";

export const TaleCard = ({ conto, index }: { conto: Conto; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative bg-parchment border border-wood/20 p-6 rounded-sm hover:border-bardo-purple/40 transition-colors"
        >
            <div className="flex flex-wrap gap-2 mb-4">
                {(conto.tags || []).slice(0, 3).map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                ))}
            </div>

            <h3 className="font-serif text-2xl mb-3 text-ink group-hover:text-bardo-purple transition-colors">
                <Link href={`/contos/${conto.slug.current}`}>
                    {conto.title}
                </Link>
            </h3>

            <p className="text-ink/70 font-sans line-clamp-3 mb-6">
                {conto.excerpt}
            </p>

            <div className="flex items-center justify-between text-xs text-ink/50 font-sans border-t border-wood/10 pt-4">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(conto.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {conto.readingTime} min
                    </span>
                </div>
                <Link
                    href={`/contos/${conto.slug.current}`}
                    className="flex items-center gap-1 text-wood font-serif hover:text-bardo-purple"
                >
                    Ler conto <ChevronRight className="w-4 h-4" />
                </Link>
            </div>
        </motion.div>
    );
};

export const Accordion = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-y border-wood/20">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <h3 className="font-serif text-xl text-ink group-hover:text-bardo-purple transition-colors">{title}</h3>
                <ChevronDown
                    className={cn(
                        "w-5 h-5 text-wood transition-transform duration-300",
                        isOpen && "rotate-180"
                    )}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-8 prose prose-ink max-w-none font-sans text-ink/80 italic whitespace-pre-line">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

import { cn } from "@/lib/utils";
