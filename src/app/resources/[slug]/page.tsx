'use client';

import { ARTICLES } from "@/lib/articles";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default function ArticlePage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        router.push('/resources');
        return null;
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.desc,
                url: window.location.href,
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        }
    };

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Header */}
            <div className={`relative py-24 px-4 sm:px-6 lg:px-8 ${article.image} bg-opacity-20`}>
                <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
                <div className="max-w-3xl mx-auto">
                    <Link href="/resources">
                        <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all text-muted-foreground hover:text-primary">
                            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Resources
                        </Button>
                    </Link>
                    
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-white shadow-sm ${article.color}`}>
                            {article.category}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" /> {article.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" /> {article.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                        {article.title}
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        {article.desc}
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="prose prose-lg prose-green max-w-none">
                     <ReactMarkdown
                        components={{
                            h3: ({node, ...props}: any) => <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props} />,
                            p: ({node, ...props}: any) => <p className="text-muted-foreground leading-relaxed mb-6" {...props} />,
                            ul: ({node, ...props}: any) => <ul className="list-disc pl-6 space-y-2 mb-6 text-muted-foreground" {...props} />,
                            li: ({node, ...props}: any) => <li className="pl-2" {...props} />,
                            strong: ({node, ...props}: any) => <strong className="font-semibold text-foreground" {...props} />,
                        }}
                     >
                        {article.content}
                     </ReactMarkdown>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                    <p className="font-medium text-muted-foreground">Share this article</p>
                    <div className="flex gap-2">
                         <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                            <Share2 className="h-4 w-4" /> Copy Link
                         </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
