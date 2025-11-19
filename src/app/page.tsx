'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, CheckCircle2, Home, LineChart, Users, Zap, Leaf, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DashboardPreview } from "@/components/home/DashboardPreview";

export default function HomePage() {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-background selection:bg-primary/10 selection:text-primary">
      
      {/* Hero Section with Centered Layout */}
      <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-[1600px] mx-auto w-full overflow-visible">
        {/* Living Ecosystem Background - Clean Dot Grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
          {/* Dot Grid Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.6] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" />
        </div>

        {/* Suppression du grain overlay qui pouvait griser l'image */}
        
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto relative z-10">
          <motion.div 
            className="flex flex-col items-center"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/50 shadow-sm mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-lime"></span>
              </span>
              <span className="text-sm font-medium text-primary tracking-wide">Live in London & Manchester</span>
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-8 leading-[0.95]"
            >
              Future-proof <br />
              <span className="text-muted-foreground font-medium italic serif-like">your property.</span>
            </motion.h1>

            <motion.p 
              variants={fadeIn}
              className="text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed text-balance"
            >
              The all-in-one platform for landlords to assess, retrofit, and finance sustainable property upgrades. Simple, compliant, and profitable.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <Link href="/landlord/assessment">
                <Button size="lg" variant="default" className="gap-2 h-14 px-8 text-lg w-full sm:w-auto">
                  Start Assessment <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/provider/profile">
                <Button size="lg" variant="outline" className="gap-2 h-14 px-8 text-lg w-full sm:w-auto bg-white/50 hover:bg-white">
                  For Installers
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground mb-16">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-lime" />
                <span>EPC C+ Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-brand-lime" />
                <span>Gov. Grant Eligible</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Visual - Centered Below */}
        <motion.div 
          className="relative max-w-6xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 p-2 rounded-[2.5rem] shadow-2xl shadow-primary/10">
            <div className="bg-background rounded-[2rem] overflow-hidden border border-border/50">
                <DashboardPreview />
            </div>
          </div>
          {/* Floating Element - Adjusted Position */}
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-white p-6 rounded-3xl shadow-xl border border-border/50 z-20 max-w-xs animate-slide-up hidden lg:block">
            <div className="flex items-start gap-4">
              <div className="bg-brand-lime/20 p-3 rounded-2xl text-brand-forest">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Savings</p>
                <p className="text-2xl font-bold text-primary">£1,240<span className="text-sm font-normal text-muted-foreground">/year</span></p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Features Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-primary">Simplify the retrofit journey.</h2>
            <p className="text-xl text-muted-foreground">
              We've broken down the complex process of energy efficiency upgrades into three simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-brand-cream p-10 transition-all hover:shadow-lg border border-transparent hover:border-border/50">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <Home className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Smart Assessment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI-driven tool analyzes your property's potential and creates a tailored roadmap to EPC Band C.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-sage/20 to-transparent rounded-tl-full" />
            </div>

            {/* Feature 2 - Dark Mode Card */}
            <div className="group relative overflow-hidden rounded-3xl bg-primary p-10 text-white shadow-xl md:-mt-8 border border-primary/50">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <Users className="h-8 w-8 text-brand-lime" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vetted Marketplace</h3>
              <p className="text-white/70 leading-relaxed">
                Connect with TrustMark accredited installers who understand green technology and compliance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-brand-cream p-10 transition-all hover:shadow-lg border border-transparent hover:border-border/50">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">ROI Tracking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Visualize your energy savings, carbon reduction, and property value increase in real-time.
              </p>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-lime/20 to-transparent rounded-tl-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop / Split Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sage/30 to-transparent rounded-[2.5rem] -rotate-3 scale-105 -z-10" />
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern sustainable home" 
                className="rounded-[2rem] shadow-2xl border border-white/50 object-cover h-[600px] w-full"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-xl border border-border/50 max-w-[200px] hidden md:block">
                <div className="flex flex-col gap-2">
                  <Leaf className="h-8 w-8 text-brand-lime" />
                  <span className="text-4xl font-bold text-primary">40%</span>
                  <span className="text-sm text-muted-foreground">Average reduction in energy bills</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 text-primary-foreground text-sm font-medium mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span>Trust & Security</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-primary">
                Compliant by design. <br />
                <span className="text-muted-foreground/60">Secure by default.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                   <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                     <Building2 className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold mb-2">MEES Regulations Ready</h3>
                     <p className="text-muted-foreground leading-relaxed">Stay ahead of Minimum Energy Efficiency Standards. We ensure your upgrades meet all current and future UK rental requirements.</p>
                   </div>
                </div>
                <div className="flex gap-6">
                   <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                     <ShieldCheck className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                     <h3 className="text-xl font-semibold mb-2">Verified Documentation</h3>
                     <p className="text-muted-foreground leading-relaxed">All certificates, warranties, and invoices are automatically stored and verified within your property's digital logbook.</p>
                   </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-border">
                <div className="flex items-center justify-between gap-8">
                  <div>
                    <p className="text-3xl font-bold text-primary">2,500+</p>
                    <p className="text-sm text-muted-foreground">Properties Upgraded</p>
                  </div>
                  <div className="h-12 w-px bg-border" />
                  <div>
                    <p className="text-3xl font-bold text-primary">£4.2M</p>
                    <p className="text-sm text-muted-foreground">Client Savings Unlocked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[50%] left-[10%] w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl" />
            <div className="absolute top-[50%] right-[10%] w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to upgrade?
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Join the landlords increasing property value and tenant satisfaction with GreenLink.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/landlord/assessment">
                <Button size="lg" variant="secondary" className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 border-none">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-16 px-10 text-lg bg-transparent text-white border-white/20 hover:bg-white/10">
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="py-20 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary text-white p-2 rounded-xl">
                  <Leaf className="h-5 w-5" />
                </div>
                <span className="font-bold text-xl text-primary">GreenLink</span>
              </div>
              <p className="text-muted-foreground">
                Making sustainable property upgrades simple, profitable, and accessible for everyone.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-primary">Platform</h4>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Assessment</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketplace</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Finance</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-primary">Company</h4>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Careers</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="font-semibold text-primary">Legal</h4>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 GreenLink Technologies Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              {/* Social icons placeholder */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
