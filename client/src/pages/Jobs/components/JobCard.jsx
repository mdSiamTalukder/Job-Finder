import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiMapPin,
  FiClock,
  FiDollarSign,
  FiArrowRight,
} from "react-icons/fi";

function JobCard({ job }) {
  return (
    <article className="group rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg sm:p-6">
      {/* Top */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <FiBriefcase size={22} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold">
              {job.title}
            </h3>

            <p className="mt-1 text-sm font-medium text-primary">
              {job.company}
            </p>
          </div>
        </div>

        <span className="shrink-0 rounded-full bg-base-200 px-3 py-1 text-xs text-base-content/60">
          {job.posted}
        </span>
      </div>

      {/* Information */}
      <div className="mt-5 grid grid-cols-1 gap-3 text-sm text-base-content/60 sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <FiMapPin className="text-primary" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiClock className="text-primary" />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiDollarSign className="text-primary" />
          <span>{job.salary}</span>
        </div>

        <div className="flex items-center gap-2">
          <FiBriefcase className="text-primary" />
          <span>{job.experience}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {job.category}
        </span>

        <span className="rounded-full bg-base-200 px-3 py-1 text-xs">
          {job.mode}
        </span>

        {job.skills.slice(0, 2).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-base-200 px-3 py-1 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-base-300 pt-5">
        <p className="hidden text-sm text-base-content/50 sm:block">
          Posted {job.posted}
        </p>

        <Link
          to={`/jobs/${job.id}`}
          className="btn btn-primary btn-sm ml-auto rounded-lg"
        >
          View Details
          <FiArrowRight size={15} />
        </Link>
      </div>
    </article>
  );
}

export default JobCard;