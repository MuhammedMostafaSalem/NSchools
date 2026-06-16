const CourseOutline = () => {
    return (
        <section className="bg-white rounded-lg shadow-card p-6 flex flex-col space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-primary-dark">
                المنهج الدراسي
            </h2>

            <div className="space-y-4">
                <details open className="border rounded-md">
                    <summary className="cursor-pointer p-4 bg-background-soft font-semibold text-primary-dark text-sm md:text-base focus:outline-none">
                        Module 1: Getting Started
                    </summary>

                    <ul className="p-4 space-y-2 text-xs md:text-sm">
                        <li>Python Getting Started</li>
                        <li>Python Basics</li>
                    </ul>
                </details>

                <details className="border rounded-md">
                    <summary className="cursor-pointer p-4 bg-background-soft font-semibold text-primary-dark text-sm md:text-base focus:outline-none">
                        Module 2: Variables & Types
                    </summary>

                    <ul className="p-4 space-y-2 text-xs md:text-sm">
                        <li>Variables</li>
                        <li>Data Types</li>
                        <li>Type Conversion</li>
                    </ul>
                </details>

                <details className="border rounded-md">
                    <summary className="cursor-pointer p-4 bg-background-soft font-semibold text-primary-dark text-sm md:text-base focus:outline-none">
                        Module 3: Control Flow
                    </summary>

                    <ul className="p-4 space-y-2 text-xs md:text-sm">
                        <li>If Statements</li>
                        <li>Loops</li>
                    </ul>
                </details>
            </div>
        </section>
    )
}

export default CourseOutline