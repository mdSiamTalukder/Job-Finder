import JobCard from "./JobCard";

function JobList({ jobs }) {
  return (
    <section className="bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              Latest opportunities
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              Available Jobs
            </h2>
          </div>

          <p className="text-sm text-base-content/60">
            Showing {jobs.length} {jobs.length === 1 ? "job" : "jobs"}
          </p>
        </div>

        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-base-300 bg-base-100 px-6 py-16 text-center">
            <h3 className="text-xl font-bold">No jobs found</h3>

            <p className="mt-2 text-sm text-base-content/60">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default JobList;