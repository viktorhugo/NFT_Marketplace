"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, QrCode, Fingerprint, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function WalletConnect() {
    const [selectedTab, setSelectedTab] = useState("connect");

    return (
        <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
            >
                <div className="text-center mb-8">
                <div className="mx-auto h-24 w-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                    <Wallet className="h-10 w-10 text-primary" />
                    </div>
                </div>
                <h2 className="mt-6 text-3xl font-extrabold">Welcome to NexusFi</h2>
                <p className="mt-2 text-muted-foreground">
                    Connect your wallet to access your portfolio, supply assets, and borrow against your collateral
                </p>
                </div>

                <Tabs defaultValue="connect" className="w-full" onValueChange={setSelectedTab}>
                    <TabsList className="grid w-full grid-cols-2 mb-8">
                        <TabsTrigger value="connect">Connect Wallet</TabsTrigger>
                        <TabsTrigger value="create">Create Wallet</TabsTrigger>
                    </TabsList>

                    <TabsContent value="connect" className="space-y-4">
                        <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
                            <div className="grid grid-cols-1 divide-y divide-border/50">
                                {[
                                    { name: "MetaMask", icon: "🦊" },
                                    { name: "WalletConnect", icon: "🔗" },
                                    { name: "Coinbase Wallet", icon: "📱" },
                                    { name: "Ledger", icon: "🔒" },
                                ].map((wallet) => (
                                    <Button
                                        key={wallet.name}
                                        variant="ghost"
                                        className="flex items-center justify-between w-full p-4 h-auto"
                                    >
                                        <div className="flex items-center">
                                        <span className="text-2xl mr-3">{wallet.icon}</span>
                                        <span>{wallet.name}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center space-x-4 pt-4">
                            <Button variant="outline" size="sm" className="gap-2">
                                <QrCode className="h-4 w-4" />
                                Scan QR Code
                            </Button>
                            <Button variant="outline" size="sm" className="gap-2">
                                <Fingerprint className="h-4 w-4" />
                                Biometric Auth
                            </Button>
                        </div>
                    </TabsContent>

                    <TabsContent value="create">
                        <div className="bg-card rounded-lg border border-border/50 p-6 text-center">
                            <h3 className="text-lg font-medium mb-4">Create a New Wallet</h3>
                            <p className="text-muted-foreground mb-6">
                                Generate a new wallet to start your DeFi journey. Your keys, your crypto.
                            </p>
                            <Button className="w-full">Create New Wallet</Button>
                        </div>
                    </TabsContent>
                </Tabs>

                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>
                        By connecting, you agree to our{" "}
                        <a href="#" className="font-medium text-primary hover:underline">
                        Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-medium text-primary hover:underline">
                        Privacy Policy
                        </a>
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
