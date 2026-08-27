import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiCheckCircle,
  FiFileText,
  FiMail,
  FiPhone,
  FiSend,
  FiUser,
} from "react-icons/fi";

import { jobs } from "../../constants/jobs";

function ApplyJob() {
  const { id } = useParams();

  const job = jobs.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    expectedSalary: "",
    coverLetter: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newApplication = {
    id: Date.now(),
    jobId: job.id,
    jobTitle: job.title,
    company: job.company,
    location: job.location,
    date: new Date().toLocaleDateString("en-GB"),
    status: "Pending",

    applicant: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      resume: formData.resume,
      expectedSalary: formData.expectedSalary,
      coverLetter: formData.coverLetter,
    },
  };

  const existingApplications =
    JSON.parse(
      localStorage.getItem("jobfinder-applications")
    ) || [];

  localStorage.setItem(
    "jobfinder-applications",
    JSON.stringify([
      newApplication,
      ...existingApplications,
    ])
  );

  setSubmitted(true);
};

  if (!job) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Job Not Found</h1>

          <p className="mt-3 text-base-content/60">
            The job you're trying to apply for doesn't exist.
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

  if (submitted) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
            <FiCheckCircle size={34} />
          </div>

          <h1 className="mt-6 text-2xl font-bold sm:text-3xl">
            Application Submitted!
          </h1>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-base-content/60 sm:text-base">
            Your application for{" "}
            <span className="font-semibold text-base-content">
              {job.title}
            </span>{" "}
            at{" "}
            <span className="font-semibold text-primary">
              {job.company}
            </span>{" "}
            has been submitted successfully.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to={`/jobs/${job.id}`}
              className="btn btn-outline rounded-xl"
            >
              View Job
            </Link>

            <Link
              to="/jobs"
              className="btn btn-primary rounded-xl"
            >
              Browse More Jobs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-base-200 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <Link
          to={`/jobs/${job.id}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 transition hover:text-primary"
        >
          <FiArrowLeft />
          Back to Job Details
        </Link>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Form */}
          <section className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-semibold text-primary">
                Job Application
              </p>

              <h1 className="mt-2 text-2xl font-bold sm:text-3xl">
                Apply for this position
              </h1>

              <p className="mt-2 text-sm text-base-content/60">
                Fill in your information carefully before submitting
                your application.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiUser className="text-base-content/50" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="grow"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email Address
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiMail className="text-base-content/50" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="grow"
                      required
                    />
                  </label>
                </div>
              </div>

              {/* Phone + Salary */}
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Phone Number
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiPhone className="text-base-content/50" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXXXXXXXX"
                      className="grow"
                      required
                    />
                  </label>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Expected Salary
                  </label>

                  <input
                    type="text"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    placeholder="e.g. ৳50,000"
                    className="input input-bordered h-12 w-full rounded-xl"
                  />
                </div>
              </div>

              {/* Resume */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Resume URL
                </label>

                <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                  <FiFileText className="text-base-content/50" />

                  <input
                    type="url"
                    name="resume"
                    value={formData.resume}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/..."
                    className="grow"
                    required
                  />
                </label>

                <p className="mt-2 text-xs text-base-content/50">
                  Upload your resume to Google Drive or another service
                  and paste the public link here.
                </p>
              </div>

              {/* Cover Letter */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Cover Letter
                </label>

                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell the employer why you're a good fit for this position..."
                  className="textarea textarea-bordered min-h-40 w-full rounded-xl leading-6"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn btn-primary h-12 w-full rounded-xl"
              >
                <FiSend size={18} />
                Submit Application
              </button>
            </form>
          </section>

          {/* Job Summary */}
          <aside className="h-fit rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm lg:sticky lg:top-24">
            <p className="text-sm font-medium text-primary">
              Applying for
            </p>

            <div className="mt-4 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FiBriefcase size={22} />
              </div>

              <div>
                <h2 className="font-bold">{job.title}</h2>

                <p className="mt-1 text-sm text-base-content/60">
                  {job.company}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-base-300 pt-5">
              <div>
                <p className="text-xs text-base-content/50">
                  Location
                </p>

                <p className="mt-1 text-sm font-medium">
                  {job.location}
                </p>
              </div>

              <div>
                <p className="text-xs text-base-content/50">
                  Job Type
                </p>

                <p className="mt-1 text-sm font-medium">
                  {job.type}
                </p>
              </div>

              <div>
                <p className="text-xs text-base-content/50">
                  Salary
                </p>

                <p className="mt-1 text-sm font-medium">
                  {job.salary}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default ApplyJob;