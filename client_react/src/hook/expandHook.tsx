import { useRef } from "react";

export const CustomExpand: React.FC<{ children: React.ReactNode; mode: "visible" | "hidden" }> = ({ children, mode }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const height = mode === "visible" && contentRef.current ? contentRef.current.scrollHeight : 0;

    return (
        <div
            style={{ maxHeight: `${height}px` }}
            className="transition-all duration-500 ease-in-out overflow-hidden"
        >
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};