import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiFileText,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";

function ApplicationDetails() {
  const { id } = useParams();

  const applications =
    JSON.parse(
      localStorage.getItem("jobfinder-applications")
    ) || [];

  const application = applications.find(
    (item) => String(item.id) === String(id)
  );

  if (!application) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold">
            Application Not Found
          </h1>

          <p className="mt-3 text-base-content/60">
            The application you're trying to view doesn't exist.
          </p>

          <Link
            to="/employer/applicants"
            className="btn btn-primary mt-6 rounded-xl"
          >
            <FiArrowLeft />
            Back to Applicants
          </Link>
        </div>
      </main>
    );
  }

  const applicant = application.applicant;

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/employer/applicants"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary"
        >
          <FiArrowLeft />
          Back to Applicants
        </Link>

        {/* Header */}
        <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiUser size={28} />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Application Details
                </p>

                <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
                  {applicant?.name || "Unknown Candidate"}
                </h1>

                <p className="mt-1 text-sm text-base-content/60">
                  Applied for {application.jobTitle}
                </p>
              </div>
            </div>

            <span
              className={`badge badge-lg ${
                application.status === "Hired"
                  ? "badge-success"
                  : application.status === "Rejected"
                  ? "badge-error"
                  : application.status === "Reviewed"
                  ? "badge-info"
                  : "badge-warning"
              }`}
            >
              {application.status}
            </span>
          </div>
        </section>

        {/* Application Info */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

          {/* Applicant Information */}
          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold">
              Candidate Information
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Name */}
              <div className="rounded-2xl border border-base-300 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <FiUser />
                  <span className="text-xs font-medium">
                    Full Name
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {applicant?.name || "Not provided"}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-base-300 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <FiMail />
                  <span className="text-xs font-medium">
                    Email Address
                  </span>
                </div>

                <p className="mt-2 break-all font-semibold">
                  {applicant?.email || "Not provided"}
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-base-300 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <FiPhone />
                  <span className="text-xs font-medium">
                    Phone Number
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {applicant?.phone || "Not provided"}
                </p>
              </div>

              {/* Expected Salary */}
              <div className="rounded-2xl border border-base-300 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <FiBriefcase />
                  <span className="text-xs font-medium">
                    Expected Salary
                  </span>
                </div>

                <p className="mt-2 font-semibold">
                  {applicant?.expectedSalary || "Not provided"}
                </p>
              </div>
            </div>

            {/* Resume */}
            <div className="mt-6">
              <h2 className="text-xl font-bold">
                Resume
              </h2>

              <div className="mt-4 rounded-2xl border border-base-300 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <FiFileText />
                    </div>

                    <div>
                      <p className="font-semibold">
                        Candidate Resume
                      </p>

                      <p className="text-xs text-base-content/50">
                        Resume URL
                      </p>
                    </div>
                  </div>

                  {applicant?.resume && (
                    <a
                      href={applicant.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm rounded-xl"
                    >
                      View Resume
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div className="mt-6">
              <h2 className="text-xl font-bold">
                Cover Letter
              </h2>

              <div className="mt-4 rounded-2xl border border-base-300 bg-base-200/40 p-5">
                <p className="whitespace-pre-line text-sm leading-7 text-base-content/70">
                  {applicant?.coverLetter ||
                    "No cover letter provided."}
                </p>
              </div>
            </div>
          </section>

          {/* Job Information */}
          <aside className="h-fit rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm lg:sticky lg:top-24">

            <h2 className="text-lg font-bold">
              Job Information
            </h2>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">
                <FiBriefcase className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Position
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {application.jobTitle}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FiBriefcase className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Company
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {application.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FiMapPin className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {application.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FiCheckCircle className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Applied Date
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {application.date}
                  </p>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default ApplicationDetails;