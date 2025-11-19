'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useAppStore } from '@/lib/store';
import { ArrowRight, Home, MapPin, AlertCircle, Calendar, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AssessmentPage() {
    const router = useRouter();
    const { setAssessmentData, setUserRole } = useAppStore();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        address: '',
        postcode: '',
        propertyType: '',
        yearBuilt: '',
        issues: [] as string[],
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleIssue = (issue: string) => {
        setFormData(prev => ({
            ...prev,
            issues: prev.issues.includes(issue)
                ? prev.issues.filter(i => i !== issue)
                : [...prev.issues, issue]
        }));
    };

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        } else {
            setAssessmentData(formData);
            setUserRole('LANDLORD');
            router.push('/landlord/results');
        }
    };

    return (
        <div className="min-h-screen bg-secondary/30 py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-2xl">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Property Assessment</h1>
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground">
                        <span className={step >= 1 ? "text-primary" : ""}>Details</span>
                        <div className="w-8 h-px bg-border" />
                        <span className={step >= 2 ? "text-primary" : ""}>Building</span>
                        <div className="w-8 h-px bg-border" />
                        <span className={step >= 3 ? "text-primary" : ""}>Issues</span>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="border-none shadow-xl bg-white/80 backdrop-blur-md">
                            <CardHeader className="pb-8">
                                <CardTitle className="text-2xl">
                                    {step === 1 && "Let's start with the basics"}
                                    {step === 2 && "Tell us about the structure"}
                                    {step === 3 && "What needs fixing?"}
                                </CardTitle>
                                <CardDescription className="text-base">
                                    {step === 1 && "Where is the property located?"}
                                    {step === 2 && "This helps us estimate energy efficiency."}
                                    {step === 3 && "Select all that apply to get tailored solutions."}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-8">
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-sm font-medium mb-2 block text-muted-foreground">Address</label>
                                            <div className="relative group">
                                                <Home className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <Input
                                                    name="address"
                                                    placeholder="123 Green Street"
                                                    className="pl-12 h-12 text-lg bg-secondary/30 border-transparent focus:bg-white transition-all"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    autoFocus
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block text-muted-foreground">Postcode</label>
                                            <div className="relative group">
                                                <MapPin className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <Input
                                                    name="postcode"
                                                    placeholder="SW1A 1AA"
                                                    className="pl-12 h-12 text-lg bg-secondary/30 border-transparent focus:bg-white transition-all"
                                                    value={formData.postcode}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-sm font-medium mb-3 block text-muted-foreground">Property Type</label>
                                            <div className="grid grid-cols-2 gap-4">
                                                {['Detached', 'Semi-Detached', 'Terraced', 'Flat'].map((type) => (
                                                    <button
                                                        key={type}
                                                        onClick={() => setFormData({ ...formData, propertyType: type })}
                                                        className={`p-6 rounded-xl border text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] ${formData.propertyType === type
                                                                ? 'border-primary bg-primary/5 ring-1 ring-primary shadow-sm'
                                                                : 'border-input hover:border-primary/30 bg-white'
                                                            }`}
                                                    >
                                                        {type}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-sm font-medium mb-2 block text-muted-foreground">Year Built (Approx)</label>
                                            <div className="relative group">
                                                <Calendar className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                                <Input
                                                    name="yearBuilt"
                                                    type="number"
                                                    placeholder="1980"
                                                    className="pl-12 h-12 text-lg bg-secondary/30 border-transparent focus:bg-white transition-all"
                                                    value={formData.yearBuilt}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                'Damp or Mold',
                                                'Drafty Windows',
                                                'High Energy Bills',
                                                'Cold Rooms',
                                                'Noise Pollution',
                                                'Old Boiler'
                                            ].map((issue) => (
                                                <button
                                                    key={issue}
                                                    onClick={() => toggleIssue(issue)}
                                                    className={`p-4 rounded-xl border text-left flex items-center justify-between gap-3 transition-all hover:shadow-md ${formData.issues.includes(issue)
                                                            ? 'border-primary bg-primary/5 ring-1 ring-primary'
                                                            : 'border-input hover:border-primary/30 bg-white'
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <AlertCircle className={`h-5 w-5 flex-shrink-0 ${formData.issues.includes(issue) ? 'text-primary' : 'text-muted-foreground'
                                                            }`} />
                                                        <span className="text-sm font-medium">{issue}</span>
                                                    </div>
                                                    {formData.issues.includes(issue) && <Check className="h-4 w-4 text-primary" />}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between pt-6 border-t">
                                    <Button
                                        variant="ghost"
                                        onClick={() => setStep(Math.max(1, step - 1))}
                                        disabled={step === 1}
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        Back
                                    </Button>
                                    <Button onClick={handleNext} size="lg" className="gap-2 px-8 shadow-lg shadow-primary/20">
                                        {step === 3 ? 'Analyze Property' : 'Next Step'}
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
