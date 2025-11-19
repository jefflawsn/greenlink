'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BarChart3, Calendar, CheckCircle2, Home, LineChart, MessageSquare, PieChart, Search, Settings, User, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardPreview() {
    return (
        <div className="relative w-full max-w-5xl mx-auto perspective-1000">
            <motion.div
                initial={{ rotateX: 10, y: 40, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-white rounded-xl shadow-2xl border border-border overflow-hidden"
            >
                {/* Window Controls */}
                <div className="h-8 bg-secondary/50 border-b flex items-center px-4 gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="flex h-[500px]">
                    {/* Sidebar */}
                    <div className="w-16 md:w-64 bg-secondary/30 border-r p-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2 px-2 mb-6">
                            <div className="h-8 w-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Zap className="h-5 w-5 text-primary" />
                            </div>
                            <span className="font-bold text-sm hidden md:block">GreenLink</span>
                        </div>

                        {[
                            { icon: Home, label: 'Overview', active: true },
                            { icon: CheckCircle2, label: 'Projects' },
                            { icon: MessageSquare, label: 'Messages' },
                            { icon: LineChart, label: 'Analytics' },
                            { icon: Settings, label: 'Settings' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium transition-colors ${item.active
                                        ? 'bg-white shadow-sm text-primary'
                                        : 'text-muted-foreground hover:bg-white/50'
                                    }`}
                            >
                                <item.icon className="h-5 w-5" />
                                <span className="hidden md:block">{item.label}</span>
                            </div>
                        ))}

                        <div className="mt-auto pt-4 border-t">
                            <div className="flex items-center gap-3 p-2">
                                <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User className="h-4 w-4 text-gray-500" />
                                </div>
                                <div className="hidden md:block">
                                    <p className="text-xs font-medium">John Doe</p>
                                    <p className="text-[10px] text-muted-foreground">Landlord</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-background/50 p-6 overflow-hidden relative">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-xl font-bold">Overview</h2>
                                <p className="text-sm text-muted-foreground">Welcome back, here's what's happening.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-9 w-9 bg-white border rounded-full flex items-center justify-center shadow-sm">
                                    <Search className="h-4 w-4 text-muted-foreground" />
                                </div>
                                <div className="h-9 w-9 bg-white border rounded-full flex items-center justify-center shadow-sm">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {[
                                { label: 'Total Savings', value: '£1,250', sub: '+12% this year', color: 'text-green-600' },
                                { label: 'CO₂ Reduced', value: '2.4 Tons', sub: 'Target: 5 Tons', color: 'text-blue-600' },
                                { label: 'Active Projects', value: '3', sub: '1 completing soon', color: 'text-orange-600' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-4 rounded-xl border shadow-sm">
                                    <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                    <p className="text-[10px] text-muted-foreground mt-1">{stat.sub}</p>
                                </div>
                            ))}
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-3 gap-6 h-full">
                            {/* Main Chart Area */}
                            <div className="col-span-2 bg-white rounded-xl border shadow-sm p-4 h-64">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-semibold text-sm">Energy Efficiency Score</h3>
                                    <select className="text-xs border rounded px-2 py-1 bg-secondary/30">
                                        <option>This Year</option>
                                    </select>
                                </div>
                                <div className="flex items-end justify-between h-40 px-2 gap-2">
                                    {[40, 65, 50, 80, 55, 90, 70].map((h, i) => (
                                        <div key={i} className="w-full bg-secondary/30 rounded-t-sm relative group">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                className="absolute bottom-0 w-full bg-primary/80 rounded-t-sm group-hover:bg-primary transition-colors"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-2 text-[10px] text-muted-foreground px-1">
                                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-4">
                                <div className="bg-white rounded-xl border shadow-sm p-4">
                                    <h3 className="font-semibold text-sm mb-3">Recent Activity</h3>
                                    <div className="space-y-3">
                                        {[
                                            { text: 'Quote received from EcoWarm', time: '2h ago', icon: MessageSquare, color: 'bg-blue-100 text-blue-600' },
                                            { text: 'Site visit confirmed', time: '5h ago', icon: Calendar, color: 'bg-green-100 text-green-600' },
                                            { text: 'New grant available', time: '1d ago', icon: Zap, color: 'bg-yellow-100 text-yellow-600' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start">
                                                <div className={`h-6 w-6 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}>
                                                    <item.icon className="h-3 w-3" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-medium leading-tight">{item.text}</p>
                                                    <p className="text-[10px] text-muted-foreground">{item.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
