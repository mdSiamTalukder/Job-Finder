import {
  FiCode,
  FiPenTool,
  FiBarChart2,
  FiBriefcase,
  FiHeart,
  FiSettings,
  FiDollarSign,
  FiMonitor,
} from "react-icons/fi";

const categories = [
  {
    title: "Development",
    jobs: "1,240 Jobs",
    icon: FiCode,
  },
  {
    title: "Design",
    jobs: "860 Jobs",
    icon: FiPenTool,
  },
  {
    title: "Marketing",
    jobs: "720 Jobs",
    icon: FiBarChart2,
  },
  {
    title: "Business",
    jobs: "540 Jobs",
    icon: FiBriefcase,
  },
  {
    title: "Healthcare",
    jobs: "430 Jobs",
    icon: FiHeart,
  },
  {
    title: "Engineering",
    jobs: "380 Jobs",
    icon: FiSettings,
  },
  {
    title: "Finance",
    jobs: "320 Jobs",
    icon: FiDollarSign,
  },
  {
    title: "IT & Support",
    jobs: "290 Jobs",
    icon: FiMonitor,
  },
];

function PopularCategories() {
  return (
    <section className="bg-base-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Explore opportunities
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Popular Job Categories
            </h2>

            <p className="mt-3 max-w-xl text-base text-base-content/60">
              Explore jobs across different industries and find an opportunity
              that matches your skills.
            </p>
          </div>

          <button className="btn btn-outline btn-primary w-full sm:w-auto">
            View All Categories
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.title}
                className="group flex items-center gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content">
                  <Icon size={23} />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm text-base-content/60">
                    {category.jobs}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularCategories;