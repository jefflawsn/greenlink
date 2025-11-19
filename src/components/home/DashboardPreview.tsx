'use client';

import { BarChart3, Calendar, CheckCircle2, Home, LineChart, MessageSquare, PieChart, Search, Settings, User, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function DashboardPreview() {
    return (
        <div className="relative w-full max-w-5xl mx-auto perspective-1000">
            <motion.div
                initial={{ rotateX: 5, y: 20, opacity: 0 }}
                animate={{ rotateX: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-white rounded-[2rem] shadow-2xl border border-border/20 overflow-hidden"
            >
                {/* Window Controls */}
                <div className="h-12 bg-gray-50/80 border-b border-gray-100 flex items-center px-6 gap-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
                    <div className="h-3 w-3 rounded-full bg-[#FEBC2E] border border-[#D89E24]" />
                    <div className="h-3 w-3 rounded-full bg-[#28C840] border border-[#1AAB29]" />
                </div>

                <div className="flex h-[600px] md:h-[500px]">
                    {/* Sidebar */}
                    <div className="w-20 md:w-56 bg-gray-50/50 border-r border-gray-100 p-4 md:p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-3 px-2 mb-8">
                            <div className="h-8 w-8 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 flex-shrink-0">
                                <Zap className="h-4 w-4" />
                            </div>
                            <span className="font-bold text-lg text-primary hidden md:block tracking-tight">GreenLink</span>
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
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all cursor-default ${item.active
                                        ? 'bg-primary text-white shadow-md shadow-primary/20'
                                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                                    }`}
                            >
                                <item.icon className={`h-4 w-4 ${item.active ? 'text-white' : 'text-gray-400'}`} />
                                <span className="hidden md:block">{item.label}</span>
                            </div>
                        ))}

                        <div className="mt-auto pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-3 px-2">
                                <div className="h-9 w-9 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm flex-shrink-0">
                                    <User className="h-4 w-4 text-gray-600" />
                                </div>
                                <div className="hidden md:block overflow-hidden">
                                    <p className="text-sm font-semibold text-gray-900 truncate">Alex Morgan</p>
                                    <p className="text-xs text-gray-500 truncate">Pro Landlord</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-white p-6 md:p-8 overflow-hidden relative">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard</h2>
                                <p className="text-sm text-gray-500 mt-1">Your portfolio performance.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-10 w-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm">
                                    <Search className="h-4 w-4 text-gray-400" />
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {[
                                { label: 'Total Savings', value: '£1,250', sub: '+12% vs last year', color: 'text-primary', trend: 'text-green-600' },
                                { label: 'CO₂ Reduced', value: '2.4t', sub: 'Target: 5 Tons', color: 'text-gray-900', trend: 'text-blue-600' },
                                { label: 'EPC Rating', value: 'B', sub: 'Avg Score', color: 'text-gray-900', trend: 'text-green-600' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
                                    <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">{stat.label}</p>
                                    <div className="flex items-baseline gap-1">
                                        <p className={`text-2xl lg:text-3xl font-bold ${stat.color} tracking-tight`}>{stat.value}</p>
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                                        <p className="text-[10px] lg:text-xs text-gray-500 truncate">{stat.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                            {/* Main Chart Area */}
                            <div className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] p-6 h-72">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="font-semibold text-sm text-gray-900">Efficiency Score</h3>
                                    <div className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-md">Last 6 Months</div>
                                </div>
                                <div className="flex items-end justify-between h-40 px-2 gap-2 md:gap-4">
                                    {[40, 55, 45, 70, 60, 85, 75, 90].map((h, i) => (
                                        <div key={i} className="w-full bg-gray-50 rounded-t-lg relative group overflow-hidden">
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                                className="absolute bottom-0 w-full bg-primary rounded-t-lg opacity-90"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-3 text-[10px] font-medium text-gray-400 px-1">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span>
                                </div>
                            </div>

                            {/* Right Column - Activity */}
                            <div className="hidden md:block space-y-6">
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] p-5">
                                    <h3 className="font-semibold text-sm mb-4 text-gray-900">Latest Activity</h3>
                                    <div className="space-y-4">
                                        {[
                                            { text: 'Quote from EcoWarm', time: '2h ago', icon: MessageSquare, bg: 'bg-blue-50', color: 'text-blue-600' },
                                            { text: 'EPC Assessed', time: '5h ago', icon: CheckCircle2, bg: 'bg-green-50', color: 'text-green-600' },
                                            { text: 'New Grant Found', time: '1d ago', icon: Zap, bg: 'bg-amber-50', color: 'text-amber-600' },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 items-start group">
                                                <div className={`h-8 w-8 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                                                    <item.icon className={`h-4 w-4 ${item.color}`} />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-xs font-medium text-gray-900 leading-tight mb-0.5 truncate">{item.text}</p>
                                                    <p className="text-[10px] text-gray-400">{item.time}</p>
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
