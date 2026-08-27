import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiEye,
  FiUser,
  FiXCircle,
} from "react-icons/fi";

const defaultApplications = [
  {
    id: 1,
    candidateName: "Rahim Ahmed",
    email: "rahim@example.com",
    jobTitle: "Frontend Developer",
    appliedDate: "27 Aug 2026",
    status: "Pending",
  },
  {
    id: 2,
    candidateName: "Nusrat Jahan",
    email: "nusrat@example.com",
    jobTitle: "UI/UX Designer",
    appliedDate: "26 Aug 2026",
    status: "Reviewed",
  },
  {
    id: 3,
    candidateName: "Tanvir Hasan",
    email: "tanvir@example.com",
    jobTitle: "Backend Developer",
    appliedDate: "25 Aug 2026",
    status: "Pending",
  },
];

function Applicants() {
  const [applications, setApplications] = useState(() => {
    const saved = localStorage.getItem(
      "jobfinder-applications"
    );

    return saved
      ? JSON.parse(saved)
      : defaultApplications;
  });

  const updateStatus = (id, status) => {
    const updatedApplications = applications.map(
      (application) =>
        application.id === id
          ? {
              ...application,
              status,
            }
          : application
    );

    setApplications(updatedApplications);

    localStorage.setItem(
      "jobfinder-applications",
      JSON.stringify(updatedApplications)
    );
  };

  const getStatusBadge = (status) => {
    if (status === "Hired") {
      return "badge-success";
    }

    if (status === "Rejected") {
      return "badge-error";
    }

    if (status === "Reviewed") {
      return "badge-info";
    }

    return "badge-warning";
  };

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/employer/dashboard"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-primary"
        >
          <FiArrowLeft />
          Back to Dashboard
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary">
            Employer Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Applicants
          </h1>

          <p className="mt-2 text-sm text-base-content/60 sm:text-base">
            Manage candidates who applied to your jobs.
          </p>
        </div>

        {/* Applications */}
        {applications.length > 0 ? (
          <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">

            {/* Desktop */}
            <div className="hidden overflow-x-auto md:block">
              <table className="table">
                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Position</th>
                    <th>Applied Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application) => (
                    <tr key={application.id}>

                      {/* Candidate */}
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <FiUser />
                          </div>

                          <div>
                            <p className="font-semibold">
                              {application.candidateName}
                            </p>

                            <p className="text-xs text-base-content/50">
                              {application.email}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Job */}
                      <td>
                        {application.jobTitle}
                      </td>

                      {/* Date */}
                      <td className="text-base-content/60">
                        {application.appliedDate}
                      </td>

                      {/* Status */}
                      <td>
                        <span
                          className={`badge ${getStatusBadge(
                            application.status
                          )}`}
                        >
                          {application.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="flex gap-2">

                          <Link
  to={`/employer/applicants/${application.id}`}
  className="btn btn-outline btn-xs rounded-lg"
>
  <FiEye />
  View
</Link>

                          {application.status !== "Hired" &&
                            application.status !== "Rejected" && (
                              <>
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateStatus(
                                      application.id,
                                      "Hired"
                                    )
                                  }
                                  className="btn btn-success btn-xs rounded-lg"
                                >
                                  <FiCheckCircle />
                                  Hire
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    updateStatus(
                                      application.id,
                                      "Rejected"
                                    )
                                  }
                                  className="btn btn-error btn-xs rounded-lg"
                                >
                                  <FiXCircle />
                                  Reject
                                </button>
                              </>
                            )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile */}
            <div className="space-y-4 p-4 md:hidden">
              {applications.map((application) => (
                <article
                  key={application.id}
                  className="rounded-2xl border border-base-300 p-4"
                >
                  <div className="flex items-start justify-between gap-3">

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <FiUser />
                      </div>

                      <div>
                        <h2 className="font-semibold">
                          {application.candidateName}
                        </h2>

                        <p className="text-xs text-base-content/50">
                          {application.email}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`badge ${getStatusBadge(
                        application.status
                      )}`}
                    >
                      {application.status}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-medium">
                        Position:
                      </span>{" "}
                      {application.jobTitle}
                    </p>

                    <p className="text-base-content/60">
                      <span className="font-medium">
                        Applied:
                      </span>{" "}
                      {application.appliedDate}
                    </p>
                  </div>

                  <div className="mt-4 flex gap-2">

                    <Link
  to={`/employer/applicants/${application.id}`}
  className="btn btn-outline btn-sm flex-1 rounded-xl"
>
  <FiEye />
  View
</Link>

                    {application.status !== "Hired" &&
                      application.status !== "Rejected" && (
                        <>
                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Hired"
                              )
                            }
                            className="btn btn-success btn-sm rounded-xl"
                          >
                            <FiCheckCircle />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              updateStatus(
                                application.id,
                                "Rejected"
                              )
                            }
                            className="btn btn-error btn-sm rounded-xl"
                          >
                            <FiXCircle />
                          </button>
                        </>
                      )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-base-300 bg-base-100 py-16 text-center">
            <FiClock
              size={42}
              className="mx-auto text-base-content/30"
            />

            <h2 className="mt-4 text-xl font-bold">
              No Applications Yet
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              Candidates haven't applied to your jobs yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Applicants;