'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { ArrowRight, CheckCircle2, Home, LineChart, Users, Zap, ShieldCheck, Leaf } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DashboardPreview } from "@/components/home/DashboardPreview";

export default function HomePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-green-100/50 to-transparent rounded-full blur-3xl -z-10 opacity-60" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-secondary shadow-sm mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground">Now available in London & Manchester</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Upgrade Your Property <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-600">
                Sustainably & Simply
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              GreenLink connects landlords with trusted retrofit providers.
              Assess your property, find certified installers, and track your project—all in one place.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/landlord/assessment">
                <Button size="lg" className="w-full sm:w-auto gap-2 h-14 px-8 text-lg shadow-lg shadow-primary/20">
                  Start Assessment <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/provider/profile">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">
                  Join as Provider
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-20 relative mx-auto max-w-5xl px-4"
          >
            <DashboardPreview />
          </motion.div>
        </div>
      </section>

      {/* How It Works - Bento Grid */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">How GreenLink Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined journey from diagnosis to installation, designed for simplicity.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Home,
                title: "1. Assess Property",
                desc: "Fill out our smart form to get instant retrofit recommendations and savings estimates.",
                color: "bg-blue-50 text-blue-600"
              },
              {
                icon: Users,
                title: "2. Compare Providers",
                desc: "Browse verified installers, read reviews, and request quotes directly through the platform.",
                color: "bg-orange-50 text-orange-600"
              },
              {
                icon: LineChart,
                title: "3. Track Progress",
                desc: "Manage bookings, documents, and payments in your dedicated project dashboard.",
                color: "bg-green-50 text-green-600"
              }
            ].map((step, i) => (
              <motion.div key={i} variants={item}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <step.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Why Choose GreenLink?
              </h2>
              <div className="space-y-6">
                {[
                  "Verified & Certified Installers",
                  "Transparent Pricing & Savings Estimates",
                  "Integrated Green Finance Hub",
                  "End-to-End Project Management"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button variant="outline" size="lg" className="rounded-full">Learn More About Us</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center border border-white/20 shadow-2xl"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10" />
              <div className="text-center p-12 relative z-10 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl max-w-sm mx-4">
                <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2">Energy Efficiency</h3>
                <p className="text-muted-foreground">Boost your property's EPC rating and reduce bills by up to 40%.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-400/30 to-transparent z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Ready to Green Your Property?</h2>
          <p className="text-green-50 max-w-2xl mx-auto mb-12 text-xl leading-relaxed">
            Join thousands of landlords improving energy efficiency and increasing property value today.
          </p>
          <Link href="/landlord/assessment">
            <Button size="lg" variant="secondary" className="h-14 px-10 text-lg font-bold shadow-xl hover:scale-105 transition-transform">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-2.5 rounded-xl">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <span className="font-bold text-xl tracking-tight">GreenLink</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 GreenLink Services.
          </p>
        </div>
      </footer>
    </div>
  );
}
