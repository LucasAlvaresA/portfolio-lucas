import { skillsData } from "@/data/skills";

export const Skills = () => {
    return (
        <div className="w-full bg-gray-100 dark:bg-gray-800 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
                    Skills
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-6 sm:grid-cols-3 gap-8">
                    {skillsData.map(({ name, icon: Icon, color }) => (
                        <div
                            key={name}
                            className="flex flex-col items-center transition-transform transform md:hover:scale-110 md:hover:text-opacity-90"
                        >
                            <Icon
                                className={`text-6xl mb-2 transition-colors duration-300 ${color}`}
                            />
                            <span className="text-lg font-medium text-gray-700 dark:text-gray-200 transition-opacity duration-300 md:hover:opacity-80">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
