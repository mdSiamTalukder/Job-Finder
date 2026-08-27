import {
  FiSearch,
  FiFileText,
  FiCheckCircle,
} from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiSearch,
    title: "Search for Jobs",
    description:
      "Explore thousands of job opportunities and find positions that match your skills and interests.",
  },
  {
    number: "02",
    icon: FiFileText,
    title: "Apply Easily",
    description:
      "Create your profile, upload your resume, and apply to your favorite jobs with just a few clicks.",
  },
  {
    number: "03",
    icon: FiCheckCircle,
    title: "Get Hired",
    description:
      "Connect with employers, attend interviews, and take the next step toward your dream career.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-base-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simple process
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            How JobFinder Works
          </h2>

          <p className="mt-4 text-base leading-7 text-base-content/60 sm:text-lg">
            Finding your next opportunity has never been easier.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-16 lg:gap-10">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-[16.66%] right-[16.66%] top-16 hidden border-t border-dashed border-primary/30 md:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative z-10 text-center"
              >
                {/* Icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg">
                  <Icon size={28} />
                </div>

                {/* Number */}
                <span className="mt-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  STEP {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-base-content/60">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;