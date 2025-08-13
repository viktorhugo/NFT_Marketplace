import React from 'react';
import { NFTBoxSkeleton } from './NFTBoxSkeleton';

export default function LoadingSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8 animate-pulse">
            <div className="h-10 bg-muted rounded-md w-32 float-right" />
            <div className="h-8 w-72 bg-muted rounded mb-6" />

            <div className="clear-both grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, index) => (
                    <NFTBoxSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}