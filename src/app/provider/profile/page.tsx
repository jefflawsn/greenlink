'use client';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { BadgeCheck, Camera, MapPin, Star } from 'lucide-react';

export default function ProviderProfile() {
    return (
        <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="relative mb-20">
                    {/* Cover Image */}
                    <div className="h-48 w-full bg-gradient-to-r from-primary/80 to-green-400 rounded-xl" />

                    {/* Profile Info */}
                    <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                        <div className="h-32 w-32 bg-background rounded-xl p-1 shadow-lg">
                            <div className="h-full w-full bg-secondary rounded-lg flex items-center justify-center">
                                <Camera className="h-8 w-8 text-muted-foreground" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <h1 className="text-3xl font-bold text-foreground flex items-center gap-2">
                                EcoWarm Solutions
                                <BadgeCheck className="h-6 w-6 text-blue-500" />
                            </h1>
                            <p className="text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-4 w-4" /> London, UK
                            </p>
                        </div>
                    </div>

                    <div className="absolute -bottom-12 right-8">
                        <Button>Edit Profile</Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>About Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    We are specialists in high-efficiency insulation and heat pump installations.
                                    With over 10 years of experience, we help landlords and homeowners reduce their carbon footprint
                                    and save on energy bills. All our engineers are fully certified and insured.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Services & Pricing</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[
                                    { name: 'Heat Pump Installation', price: '£8,000 - £12,000' },
                                    { name: 'Cavity Wall Insulation', price: '£1,500 - £3,000' },
                                    { name: 'Smart Thermostat Setup', price: '£200 - £400' },
                                ].map((service, i) => (
                                    <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                                        <span className="font-medium">{service.name}</span>
                                        <span className="text-muted-foreground text-sm">{service.price}</span>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full mt-2">Add Service</Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Reviews</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="text-4xl font-bold">4.8</div>
                                    <div className="flex flex-col">
                                        <div className="flex text-yellow-400">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                                        </div>
                                        <span className="text-sm text-muted-foreground">124 reviews</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { user: 'John D.', text: 'Excellent service, very professional.', rating: 5 },
                                        { user: 'Sarah M.', text: 'Good work but slightly delayed.', rating: 4 },
                                    ].map((review, i) => (
                                        <div key={i} className="border-b pb-4 last:border-0">
                                            <div className="flex justify-between mb-1">
                                                <span className="font-medium">{review.user}</span>
                                                <div className="flex text-yellow-400">
                                                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                                                </div>
                                            </div>
                                            <p className="text-sm text-muted-foreground">{review.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Certifications</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {['MCS Certified', 'TrustMark', 'Gas Safe Register'].map((cert, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm">
                                        <BadgeCheck className="h-4 w-4 text-green-600" />
                                        {cert}
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Info</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Email</label>
                                    <p className="text-sm font-medium">contact@ecowarm.com</p>
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Phone</label>
                                    <p className="text-sm font-medium">+44 20 1234 5678</p>
                                </div>
                                <div>
                                    <label className="text-xs text-muted-foreground block mb-1">Website</label>
                                    <p className="text-sm font-medium text-primary">www.ecowarm.com</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
