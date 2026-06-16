"use client";

import { useEffect, useRef, useState } from "react";

const FilterBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const filterRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                filterRef.current &&
                !filterRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative mb-8" ref={filterRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white border border-border px-6 py-2 rounded-lg flex items-center gap-2 hover:border-primary transition"
            >
                <span>فلترة الدورات</span>
                {/* هنا يمكن إضافة أيقونة فلتر */}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-[15rem] md:w-[18rem] bg-white border border-border rounded-xl shadow-xl p-6 z-40">
                    <h4 className="font-bold text-dark mb-4">حسب المستوى</h4>
                    <div className="space-y-2 mb-6">
                        {['مبتدئ', 'متوسط', 'متقدم'].map(level => (
                            <label key={level} className="flex items-center gap-2 text-sm">
                                <input type="checkbox" className="rounded text-primary" /> {level}
                            </label>
                        ))}
                    </div>
                    {/* يمكنك تكرار نفس المنطق للمجالات والأسعار */}
                </div>
            )}
        </div>
    )
}

export default FilterBar