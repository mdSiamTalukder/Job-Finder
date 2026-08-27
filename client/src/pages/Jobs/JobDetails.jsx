import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiMapPin,
} from "react-icons/fi";

import { jobs } from "../../constants/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find(
    (item) => item.id === Number(id)
  );

  const [isSaved, setIsSaved] = useState(() => {
    const savedJobs =
      JSON.parse(
        localStorage.getItem("jobfinder-saved-jobs")
      ) || [];

    return savedJobs.some(
      (savedJob) => savedJob.id === Number(id)
    );
  });

  const handleSaveJob = () => {
    const savedJobs =
      JSON.parse(
        localStorage.getItem("jobfinder-saved-jobs")
      ) || [];

    const alreadySaved = savedJobs.some(
      (savedJob) => savedJob.id === job.id
    );

    if (alreadySaved) {
      const updatedJobs = savedJobs.filter(
        (savedJob) => savedJob.id !== job.id
      );

      localStorage.setItem(
        "jobfinder-saved-jobs",
        JSON.stringify(updatedJobs)
      );

      setIsSaved(false);
      return;
    }

    const updatedJobs = [
      ...savedJobs,
      job,
    ];

    localStorage.setItem(
      "jobfinder-saved-jobs",
      JSON.stringify(updatedJobs)
    );

    setIsSaved(true);
  };

  if (!job) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold">
            Job Not Found
          </h1>

          <p className="mt-3 text-base-content/60">
            The job you're looking for doesn't exist or has been removed.
          </p>

          <Link
            to="/jobs"
            className="btn btn-primary mt-6 rounded-xl"
          >
            <FiArrowLeft />
            Back to Jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-base-200 py-8 sm:py-12 lg:py-16">
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
        <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

            <div className="flex items-start gap-4">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FiBriefcase size={28} />
              </div>

              <div>
                <h1 className="text-2xl font-bold sm:text-3xl">
                  {job.title}
                </h1>

                <p className="mt-2 font-medium text-primary">
                  {job.company}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-base-content/60">

                  <span className="flex items-center gap-2">
                    <FiMapPin />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiClock />
                    {job.type}
                  </span>

                  <span className="flex items-center gap-2">
                    <FiCalendar />
                    {job.posted}
                  </span>

                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">

              <Link
                to={`/jobs/${job.id}/apply`}
                className="btn btn-primary rounded-xl px-7"
              >
                Apply Now
              </Link>

              <button
                type="button"
                onClick={handleSaveJob}
                className={`btn rounded-xl px-7 ${
                  isSaved
                    ? "btn-secondary"
                    : "btn-outline"
                }`}
              >
                {isSaved ? "✓ Saved" : "♡ Save Job"}
              </button>

            </div>
          </div>
        </section>

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

          {/* Description */}
          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">

            <h2 className="text-xl font-bold">
              Job Description
            </h2>

            <p className="mt-4 leading-7 text-base-content/70">
              {job.description}
            </p>

            <h2 className="mt-8 text-xl font-bold">
              Required Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="mt-8 text-xl font-bold">
              What You'll Get
            </h2>

            <div className="mt-4 space-y-3">
              {[
                "Competitive salary",
                "Flexible working environment",
                "Professional growth opportunities",
                "Friendly and collaborative team",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm text-base-content/70"
                >
                  <FiCheckCircle className="shrink-0 text-success" />
                  {item}
                </div>
              ))}
            </div>

          </section>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm">

            <h2 className="text-lg font-bold">
              Job Overview
            </h2>

            <div className="mt-5 space-y-5">

              <div className="flex gap-3">
                <FiDollarSign className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Salary
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {job.salary}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FiBriefcase className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Experience
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {job.experience}
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
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <FiClock className="mt-1 text-primary" />

                <div>
                  <p className="text-xs text-base-content/50">
                    Work Mode
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {job.mode}
                  </p>
                </div>
              </div>

            </div>

            <Link
              to={`/jobs/${job.id}/apply`}
              className="btn btn-primary mt-7 w-full rounded-xl"
            >
              Apply for this Job
            </Link>

          </aside>
        </div>
      </div>
    </main>
  );
}

export default JobDetails;