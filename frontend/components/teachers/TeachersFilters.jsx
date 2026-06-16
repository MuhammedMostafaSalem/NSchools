const TeachersFilters = () => {
    return (
        <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <input
                type="text"
                placeholder="ابحث عن مدرس..."
                className="
                    w-full md:w-80
                    border border-gray-200
                    rounded-lg
                    px-4 py-3
                    focus:outline-none
                    focus:ring-0
                    text-gray-600
                "
            />

            <div className="flex flex-wrap gap-2">
                <button className="btn-primary">
                    الكل
                </button>

                <button className="border border-primary rounded-lg px-4 py-2 text-primary">
                    Python
                </button>

                <button className="border border-primary rounded-lg px-4 py-2 text-primary">
                    UI/UX
                </button>

                <button className="border border-primary rounded-lg px-4 py-2 text-primary">
                    Frontend
                </button>
            </div>
        </section>
    )
}

export default TeachersFilters