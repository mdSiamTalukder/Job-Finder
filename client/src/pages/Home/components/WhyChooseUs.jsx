import {
  FiSearch,
  FiShield,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

const features = [
  {
    icon: FiSearch,
    title: "Find the Right Job",
    description:
      "Search thousands of opportunities using smart filters and find jobs that match your skills.",
  },
  {
    icon: FiShield,
    title: "Trusted Companies",
    description:
      "Discover opportunities from verified companies and build your career with confidence.",
  },
  {
    icon: FiTrendingUp,
    title: "Grow Your Career",
    description:
      "Find meaningful opportunities that help you develop your skills and reach your goals.",
  },
  {
    icon: FiUsers,
    title: "Connect With Employers",
    description:
      "Connect directly with employers and take the next step toward your dream career.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-base-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Why JobFinder
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to find your next job
          </h2>

          <p className="mt-4 text-base leading-7 text-base-content/60 sm:text-lg">
            We make the job search simple, reliable, and focused on helping
            you find the right opportunity.
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-base-300 bg-base-100 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-7"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-base-content/60">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;