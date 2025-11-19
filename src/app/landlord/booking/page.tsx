'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { useAppStore } from '@/lib/store';
import { PROVIDERS } from '@/lib/mock-data';
import { Calendar as CalendarIcon, CheckCircle2, Clock } from 'lucide-react';

export default function BookingPage() {
    const router = useRouter();
    const { selectedProviderId } = useAppStore();
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isConfirmed, setIsConfirmed] = useState(false);

    const provider = PROVIDERS.find(p => p.id === selectedProviderId);

    if (!provider) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">No Provider Selected</h2>
                    <Button onClick={() => router.push('/landlord/marketplace')}>Go to Marketplace</Button>
                </div>
            </div>
        );
    }

    const handleBooking = () => {
        setIsConfirmed(true);
        // Simulate API call
        setTimeout(() => {
            router.push('/landlord/dashboard');
        }, 2000);
    };

    if (isConfirmed) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-secondary/30 px-4">
                <Card className="w-full max-w-md text-center p-8">
                    <div className="flex justify-center mb-6">
                        <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="h-8 w-8 text-green-600" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
                    <p className="text-muted-foreground mb-6">
                        Your appointment with {provider.name} has been scheduled. You will be redirected to your dashboard shortly.
                    </p>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">Schedule Appointment</h1>

                <Card>
                    <CardHeader>
                        <CardTitle>Book with {provider.name}</CardTitle>
                        <CardDescription>Select a date and time for your initial consultation.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="bg-secondary/50 p-4 rounded-lg flex items-center gap-4">
                            <div className="h-10 w-10 bg-background rounded-full flex items-center justify-center border">
                                <span className="font-bold text-primary">{provider.name.charAt(0)}</span>
                            </div>
                            <div>
                                <p className="font-medium">{provider.name}</p>
                                <p className="text-xs text-muted-foreground">{provider.services.join(', ')}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium mb-1 block">Date</label>
                                <div className="relative">
                                    <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="date"
                                        className="pl-10"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium mb-1 block">Time</label>
                                <div className="relative">
                                    <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <select
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        <option value="">Select a time</option>
                                        <option value="09:00">09:00 AM</option>
                                        <option value="10:00">10:00 AM</option>
                                        <option value="11:00">11:00 AM</option>
                                        <option value="14:00">02:00 PM</option>
                                        <option value="15:00">03:00 PM</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="ghost" onClick={() => router.back()}>Cancel</Button>
                        <Button onClick={handleBooking} disabled={!date || !time}>Confirm Booking</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
