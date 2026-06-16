const StatsCard = ({
    title,
    value,
    icon,
}) => {
    return (
            <div className="flex items-center gap-3">
                <div className="bg-background-alt p-2 rounded-md text-primary">
                    {icon}
                </div>

                <div className="font-bold">
                    <h3 className="font-bold text-secondary-dark">
                        {title}
                    </h3>

                    <p className="text-gray-700">
                        {value}
                    </p>
                </div>
            </div>
    )
}

export default StatsCard