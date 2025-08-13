import React from 'react';

export function NFTBoxSkeleton() {
    return (
        <div className="group relative overflow-hidden rounded-xl border bg-card shadow-nft">
            {/* Image placeholder */}
            <div className="aspect-square w-full bg-muted" />
            
            {/* Content placeholder */}
            <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <div className="h-5 bg-muted rounded w-24" />
                    </div>
                    <div className="h-8 bg-muted rounded-md w-20" />
                </div>
                <div className="h-4 bg-muted rounded w-32" />
                
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-muted" />
                        <div className="h-3 bg-muted rounded w-16" />
                    </div>
                    <div className="h-8 w-8 rounded-full bg-muted" />
                </div>
            </div>
        </div>
    );
}