import React from "react";
export function InfiniteLooper({ children, looperInstances }) {
    // Add looperInstances prop

    return (
        <div className="slider">
            <div className="slider-track">
                {[...Array(looperInstances)].map((_, ind) => (
                    <div key={ind} className="slide">
                        {children}
                    </div>
                ))}
            </div>
        </div>
    );
}
