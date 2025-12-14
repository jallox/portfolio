import React from "react";

export default function HeaderContainer({ children, className = "" }) {
    return (
        <header className={`relative w-full min-h-screen bg-gray-950 overflow-hidden ${className}`}>
            <div className="pointer-events-none absolute top-[-80%] left-1/2 -translate-x-1/2 w-350 h-350 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.35)_0%,rgba(34,197,94,0.18)_22%,rgba(34,197,94,0.06)_42%,transparent_65%)] blur-[140px]"/>

            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </header>
    );
}
