import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiCalendar,
  FiEye,
  FiMapPin,
} from "react-icons/fi";

function getApplications() {
  try {
    return (
      JSON.parse(
        localStorage.getItem("jobfinder-applications")
      ) || []
    );
  } catch {
    return [];
  }
}

function Applications() {
  const [applications] = useState(getApplications);

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary">
            Candidate Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            My Applications
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
            Track the jobs you've applied for and check your
            application status.
          </p>
        </div>

        {/* Empty State */}
        {applications.length === 0 ? (
          <section className="rounded-3xl border border-base-300 bg-base-100 px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <FiBriefcase size={30} />
            </div>

            <h2 className="mt-6 text-2xl font-bold">
              No applications yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-base-content/60">
              You haven't applied to any jobs yet. Find your next
              opportunity and start applying.
            </p>

            <Link
              to="/jobs"
              className="btn btn-primary mt-6 rounded-xl"
            >
              Browse Jobs
            </Link>
          </section>
        ) : (
          <div className="space-y-4">
            {applications.map((application) => (
              <article
                key={application.id}
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
                        {application.jobTitle}
                      </h2>

                      <p className="mt-1 font-medium text-primary">
                        {application.company}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-base-content/60 sm:text-sm">
                        <span className="flex items-center gap-1.5">
                          <FiMapPin />
                          {application.location}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <FiCalendar />
                          {application.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status + Action */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <span
                      className={`badge h-8 rounded-full px-4 ${
                        application.status === "Accepted"
                          ? "badge-success"
                          : application.status === "Rejected"
                          ? "badge-error"
                          : "badge-warning"
                      }`}
                    >
                      {application.status || "Pending"}
                    </span>

                    <Link
                      to={`/jobs/${application.jobId}`}
                      className="btn btn-outline btn-sm rounded-xl"
                    >
                      <FiEye />
                      View Job
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Applications;