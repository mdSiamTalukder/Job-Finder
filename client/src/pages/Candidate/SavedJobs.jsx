import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiClock,
  FiMapPin,
  FiTrash2,
  FiDollarSign,
} from "react-icons/fi";
import { useState } from "react";

function SavedJobs() {
  const [savedJobs, setSavedJobs] = useState(() => {
    return JSON.parse(
      localStorage.getItem("jobfinder-saved-jobs")
    ) || [];
  });

  const removeJob = (jobId) => {
    const updatedJobs = savedJobs.filter(
      (job) => job.id !== jobId
    );

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "jobfinder-saved-jobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary"
        >
          <FiArrowLeft />
          Back to Jobs
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary">
            Candidate Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Saved Jobs
          </h1>

          <p className="mt-2 text-sm text-base-content/60 sm:text-base">
            Jobs you've saved for later.
          </p>
        </div>

        {/* Empty State */}
        {savedJobs.length === 0 ? (
          <div className="rounded-3xl border border-base-300 bg-base-100 px-6 py-16 text-center shadow-sm">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiBriefcase size={28} />
            </div>

            <h2 className="mt-5 text-xl font-bold">
              No Saved Jobs
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-base-content/60">
              You haven't saved any jobs yet. Browse available jobs
              and save the ones you're interested in.
            </p>

            <Link
              to="/jobs"
              className="btn btn-primary mt-6 rounded-xl"
            >
              Browse Jobs
            </Link>
          </div>
        ) : (
          <>
            {/* Count */}
            <div className="mb-5 flex items-center gap-2 text-sm text-base-content/60">
              <FiBriefcase />
              <span>
                {savedJobs.length}{" "}
                {savedJobs.length === 1 ? "job" : "jobs"} saved
              </span>
            </div>

            {/* Jobs */}
            <div className="space-y-4">
              {savedJobs.map((job) => (
                <article
                  key={job.id}
                  className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md sm:p-6"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                    {/* Job Info */}
                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FiBriefcase size={22} />
                      </div>

                      <div>
                        <h2 className="text-lg font-bold sm:text-xl">
                          {job.title}
                        </h2>

                        <p className="mt-1 text-sm font-medium text-primary">
                          {job.company}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-base-content/60 sm:text-sm">

                          <span className="flex items-center gap-1.5">
                            <FiMapPin />
                            {job.location}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <FiClock />
                            {job.type}
                          </span>

                          <span className="flex items-center gap-1.5">
                            <FiDollarSign />
                            {job.salary}
                          </span>

                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 sm:self-end lg:self-auto">

                      <Link
                        to={`/jobs/${job.id}`}
                        className="btn btn-primary btn-sm rounded-xl"
                      >
                        View Job
                      </Link>

                      <button
                        type="button"
                        onClick={() => removeJob(job.id)}
                        className="btn btn-error btn-outline btn-sm rounded-xl"
                      >
                        <FiTrash2 />
                        Remove
                      </button>

                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default SavedJobs;