'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { BadgeCheck, BookOpen, FileText, Lightbulb, Search, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ARTICLES } from "@/lib/articles"; // Import shared data

// Define missing mock articles locally if needed to fill the grid, or rely on ARTICLES
// For now, let's combine ARTICLES with some placeholders to keep the grid full as in the original mock
const placeholderArticles = [
    {
        id: "4",
        slug: "green-grants-future",
        title: "The Future of Green Grants in the UK",
        desc: "An overview of upcoming government funding for energy efficiency improvements. Don't miss out on the Boiler Upgrade Scheme.",
        category: "Grants",
        readTime: "4 min read",
        date: "Nov 15, 2024",
        image: "bg-green-50",
        icon: Zap,
        color: "text-green-600"
    },
    {
        id: "5",
        slug: "heat-pumps-vs-boilers",
        title: "Heat Pumps vs. Gas Boilers",
        desc: "A detailed cost-benefit analysis to help you decide which heating system is right for your rental property investment.",
        category: "Guides",
        readTime: "7 min read",
        date: "Nov 10, 2024",
        image: "bg-orange-50",
        icon: Lightbulb,
        color: "text-orange-600"
    },
    {
        id: "6",
        slug: "solar-panels-roi",
        title: "Solar Panels: Are They Worth It?",
        desc: "Analyzing the ROI of solar PV systems for rental properties in the UK climate.",
        category: "Guides",
        readTime: "5 min read",
        date: "Nov 05, 2024",
        image: "bg-yellow-50",
        icon: Lightbulb,
        color: "text-yellow-600"
    }
];

const allArticles = [...ARTICLES, ...placeholderArticles];

const categories = ["All", "Guides", "Regulations", "Grants", "Case Studies"];

export default function ResourcesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter Logic
    const filteredArticles = allArticles.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-3xl -z-10" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-medium text-muted-foreground">Updated Weekly</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                            GreenLink Knowledge Hub
                        </h1>
                        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                            Expert advice, detailed guides, and the latest regulations to help you master sustainable property management.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            </div>
                            <Input
                                placeholder="Search guides, regulations, grants..."
                                className="pl-12 h-14 text-lg rounded-2xl shadow-sm border-border/50 bg-white/60 backdrop-blur-xl focus:bg-white transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-md border-b border-border/50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 md:justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${selectedCategory === cat
                                        ? "bg-primary text-primary-foreground shadow-md transform scale-105"
                                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
                            <span className="text-sm font-normal text-muted-foreground ml-2 bg-secondary px-2 py-0.5 rounded-full">
                                {filteredArticles.length}
                            </span>
                        </h2>
                    </div>

                    {filteredArticles.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="bg-secondary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-lg font-medium text-foreground">No articles found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or category filter.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="mt-2"
                            >
                                Clear all filters
                            </Button>
                        </div>
                    ) : (
                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence>
                                {filteredArticles.map((article) => (
                                    <motion.div
                                        layout
                                        key={article.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {/* Dynamic Link: if slug exists use it, else placeholder link */}
                                        <Link href={article.slug ? `/resources/${article.slug}` : "#"} className="group block h-full">
                                            <Card className="h-full border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-white/50 backdrop-blur-sm">
                                                <div className={`h-48 ${article.image} relative overflow-hidden`}>
                                                    <div className="absolute inset-0 flex items-center justify-center">
                                                        <article.icon className={`h-20 w-20 ${article.color} opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500`} />
                                                    </div>
                                                    <div className="absolute top-4 left-4">
                                                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                                                            {article.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <CardHeader className="pb-3">
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                                        <span className="flex items-center gap-1"><BookOpen className="h-3 w-3" /> {article.readTime}</span>
                                                        <span>•</span>
                                                        <span>{article.date}</span>
                                                    </div>
                                                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                                                        {article.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent>
                                                    <CardDescription className="line-clamp-3 mb-4 text-base">
                                                        {article.desc}
                                                    </CardDescription>
                                                    <div className="flex items-center text-sm font-semibold text-primary">
                                                        Read Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-primary rounded-3xl p-12 shadow-2xl relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0 translate-x-1/3 -translate-y-1/3" />

                        <div className="relative z-10 max-w-lg text-primary-foreground">
                            <h2 className="text-3xl font-bold mb-4">Weekly Green Insights</h2>
                            <p className="text-primary-foreground/80 text-lg">
                                Join 10,000+ landlords receiving the latest tips on sustainable property management and grant opportunities.
                            </p>
                        </div>

                        <div className="relative z-10 w-full max-w-md">
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-2">
                                    <Input
                                        placeholder="Enter your email"
                                        className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                                    />
                                    <Button variant="secondary" className="h-12 px-6 font-bold whitespace-nowrap">
                                        Subscribe
                                    </Button>
                                </div>
                                <p className="text-xs text-primary-foreground/60 text-center md:text-left">
                                    No spam, just value. Unsubscribe anytime.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
