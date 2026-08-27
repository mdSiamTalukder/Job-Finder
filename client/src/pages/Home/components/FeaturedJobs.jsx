
import { Link } from "react-router-dom";
import {
  FiBookmark,
  FiBriefcase,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

const jobs = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "TechNova",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    salary: "$1,200 - $1,800",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "CreativeHub",
    location: "Remote",
    type: "Full Time",
    salary: "$900 - $1,400",
    posted: "3 days ago",
  },
  {
    id: 3,
    title: "Digital Marketing Specialist",
    company: "GrowthLabs",
    location: "Dhaka, Bangladesh",
    type: "Part Time",
    salary: "$600 - $900",
    posted: "4 days ago",
  },
  {
    id: 4,
    title: "Backend Node.js Developer",
    company: "CodeCraft",
    location: "Chittagong, Bangladesh",
    type: "Full Time",
    salary: "$1,000 - $1,600",
    posted: "5 days ago",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateX",
    location: "Remote",
    type: "Full Time",
    salary: "$1,500 - $2,300",
    posted: "6 days ago",
  },
  {
    id: 6,
    title: "Content Writer",
    company: "MediaWorks",
    location: "Dhaka, Bangladesh",
    type: "Contract",
    salary: "$500 - $800",
    posted: "1 week ago",
  },
];

function FeaturedJobs() {
  return (
    <section className="bg-base-200 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Latest opportunities
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Jobs
            </h2>

            <p className="mt-3 max-w-xl text-base text-base-content/60">
              Discover hand-picked opportunities from companies looking for
              talented people like you.
            </p>
          </div>

          {/* View All Jobs */}
          <Link
            to="/jobs"
            className="btn btn-primary w-full sm:w-auto"
          >
            View All Jobs
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-6"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-start gap-4">

                  {/* Company Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiBriefcase size={22} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-bold transition group-hover:text-primary sm:text-xl">
                      {job.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-base-content/60">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Save */}
                <button
                  type="button"
                  className="btn btn-ghost btn-circle shrink-0"
                  aria-label={`Save ${job.title}`}
                >
                  <FiBookmark size={19} />
                </button>
              </div>

              {/* Job Details */}
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-base-content/60">
                <span className="flex items-center gap-2">
                  <FiMapPin className="text-primary" />
                  {job.location}
                </span>

                <span className="flex items-center gap-2">
                  <FiClock className="text-primary" />
                  {job.type}
                </span>
              </div>

              {/* Bottom */}
              <div className="mt-6 flex flex-col gap-4 border-t border-base-300 pt-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-sm text-base-content/50">
                    Salary
                  </p>

                  <p className="mt-1 font-semibold text-primary">
                    {job.salary}
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:items-end">

                  <span className="text-xs text-base-content/50">
                    {job.posted}
                  </span>

                  {/* View Details */}
                  <Link
                    to={`/jobs/${job.id}`}
                    className="btn btn-primary btn-sm w-full rounded-lg sm:w-auto"
                  >
                    View Details
                  </Link>

                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturedJobs;

