import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiEdit3,
  FiMapPin,
  FiPlus,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";

const defaultJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Company",
    category: "Technology",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    mode: "Hybrid",
    salary: "৳50K - ৳80K",
    applicants: 18,
    status: "Active",
    experience: "Mid Level",
    description: "Build modern web applications.",
    requirements: "Experience with React and JavaScript.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio",
    category: "Design",
    location: "Dhaka, Bangladesh",
    type: "Full Time",
    mode: "Remote",
    salary: "৳40K - ৳70K",
    applicants: 12,
    status: "Active",
    experience: "Mid Level",
    description: "Design beautiful and user-friendly interfaces.",
    requirements: "Experience with Figma and UI/UX design.",
    skills: ["Figma", "UI/UX", "Prototyping"],
  },
  {
    id: 3,
    title: "Marketing Intern",
    company: "Growth Agency",
    category: "Marketing",
    location: "Chattogram, Bangladesh",
    type: "Internship",
    mode: "On-site",
    salary: "৳15K - ৳20K",
    applicants: 7,
    status: "Closed",
    experience: "Entry Level",
    description: "Support marketing campaigns and research.",
    requirements: "Good communication and marketing knowledge.",
    skills: ["Marketing", "Communication", "Research"],
  },
];

function EmployerJobs() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem(
      "jobfinder-employer-jobs"
    );

    if (savedJobs) {
      return JSON.parse(savedJobs);
    }

    localStorage.setItem(
      "jobfinder-employer-jobs",
      JSON.stringify(defaultJobs)
    );

    return defaultJobs;
  });

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (!confirmDelete) return;

    const updatedJobs = jobs.filter(
      (job) => String(job.id) !== String(id)
    );

    setJobs(updatedJobs);

    localStorage.setItem(
      "jobfinder-employer-jobs",
      JSON.stringify(updatedJobs)
    );
  };

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">
              Employer Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Jobs
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Manage all the jobs you've posted.
            </p>
          </div>

          <Link
            to="/employer/jobs/create"
            className="btn btn-primary rounded-xl"
          >
            <FiPlus size={18} />
            Post a New Job
          </Link>
        </div>

        {/* Job Count */}
        <div className="mb-5 flex items-center gap-2 text-sm text-base-content/60">
          <FiBriefcase />

          <span>
            {jobs.length}{" "}
            {jobs.length === 1 ? "job" : "jobs"} posted
          </span>
        </div>

        {/* Jobs */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:shadow-md sm:p-6"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Job Info */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FiBriefcase size={22} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold sm:text-xl">
                        {job.title}
                      </h2>

                      <span
                        className={`badge ${
                          job.status === "Active"
                            ? "badge-success"
                            : "badge-error"
                        }`}
                      >
                        {job.status}
                      </span>
                    </div>

                    <p className="mt-1 text-sm font-medium text-primary">
                      {job.category}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-base-content/60 sm:text-sm">
                      <span className="flex items-center gap-1.5">
                        <FiMapPin />
                        {job.location}
                      </span>

                      <span>{job.type}</span>

                      <span>{job.mode}</span>

                      <span>{job.salary}</span>
                    </div>
                  </div>
                </div>

                {/* Applicants + Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <div className="flex items-center gap-2 text-sm text-base-content/60">
                    <FiUsers />

                    <span>
                      {job.applicants} applicants
                    </span>
                  </div>

                  <div className="flex gap-2">

                    {/* Edit */}
                    <Link
                      to={`/employer/jobs/edit/${job.id}`}
                      className="btn btn-outline btn-sm rounded-xl"
                    >
                      <FiEdit3 />
                      Edit
                    </Link>

                    {/* Delete */}
                    <button
                      type="button"
                      onClick={() => handleDelete(job.id)}
                      className="btn btn-error btn-sm rounded-xl"
                    >
                      <FiTrash2 />
                      Delete
                    </button>

                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {jobs.length === 0 && (
          <div className="rounded-3xl border border-base-300 bg-base-100 py-16 text-center">
            <FiBriefcase
              size={42}
              className="mx-auto text-base-content/30"
            />

            <h2 className="mt-4 text-xl font-bold">
              No jobs found
            </h2>

            <p className="mt-2 text-sm text-base-content/60">
              You haven't posted any jobs yet.
            </p>

            <Link
              to="/employer/jobs/create"
              className="btn btn-primary mt-5 rounded-xl"
            >
              <FiPlus />
              Post a New Job
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default EmployerJobs;