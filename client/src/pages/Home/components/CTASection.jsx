import { Link } from "react-router-dom";
import { FiArrowRight, FiBriefcase, FiUserPlus } from "react-icons/fi";

function CTASection() {
  return (
    <section className="bg-base-100 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-primary px-6 py-12 text-primary-content shadow-xl sm:px-10 sm:py-16 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider opacity-80">
                Start your journey
              </p>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to take the next step in your career?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 opacity-80 sm:text-lg">
                Whether you are looking for your dream job or searching for
                talented people, JobFinder helps you move forward.
              </p>
            </div>

            {/* Actions */}
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
              <Link
                to="/jobs"
                className="btn btn-neutral w-full rounded-xl px-6 sm:w-auto lg:w-52"
              >
                <FiBriefcase size={18} />
                Find a Job
                <FiArrowRight size={17} />
              </Link>

              <Link
                to="/register"
                className="btn btn-outline border-primary-content/50 bg-transparent text-primary-content hover:border-primary-content hover:bg-primary-content hover:text-primary w-full rounded-xl px-6 sm:w-auto lg:w-52"
              >
                <FiUserPlus size={18} />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;