"use client";

import { useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(1);
    let currentPage = page;
    let totalPages = 3;
    let onPageChange = setPage;

    return (
        <div className="flex items-center justify-center gap-2 mt-8">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm text-secondary-dark border border-primary rounded-md disabled:opacity-50 disabled:hidden"
            >
                السابق
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`
                        w-8 h-8 text-sm rounded-md border transition border-primary
                        ${currentPage === index + 1
                            ? 'bg-primary text-white'
                            : 'bg-white hover:bg-gray-100'
                        }
                    `}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm text-secondary-dark border border-primary rounded-md disabled:opacity-50 disabled:hidden"
            >
                التالي
            </button>
        </div>
    )
}

export default Pagination