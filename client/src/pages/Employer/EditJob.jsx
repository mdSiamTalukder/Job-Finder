import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiBriefcase,
  FiDollarSign,
  FiMapPin,
  FiSave,
} from "react-icons/fi";

const emptyForm = {
  title: "",
  company: "",
  category: "",
  location: "",
  type: "",
  mode: "",
  experience: "",
  salary: "",
  description: "",
  requirements: "",
  skills: "",
};

function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const jobs =
      JSON.parse(localStorage.getItem("jobfinder-employer-jobs")) || [];

    const job = jobs.find(
      (item) => String(item.id) === String(id)
    );

    if (!job) {
      return emptyForm;
    }

    return {
      title: job.title || "",
      company: job.company || "",
      category: job.category || "",
      location: job.location || "",
      type: job.type || "",
      mode: job.mode || "",
      experience: job.experience || "",
      salary: job.salary || "",
      description: job.description || "",
      requirements: job.requirements || "",
      skills: Array.isArray(job.skills)
        ? job.skills.join(", ")
        : job.skills || "",
    };
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const jobs =
      JSON.parse(localStorage.getItem("jobfinder-employer-jobs")) || [];

    const updatedJobs = jobs.map((job) => {
      if (String(job.id) !== String(id)) {
        return job;
      }

      return {
        ...job,
        ...formData,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };
    });

    localStorage.setItem(
      "jobfinder-employer-jobs",
      JSON.stringify(updatedJobs)
    );

    navigate("/employer/jobs");
  };

  const jobExists = (() => {
    const jobs =
      JSON.parse(localStorage.getItem("jobfinder-employer-jobs")) || [];

    return jobs.some(
      (job) => String(job.id) === String(id)
    );
  })();

  if (!jobExists) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-base-200 px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            Job Not Found
          </h1>

          <p className="mt-2 text-sm text-base-content/60">
            The job you're trying to edit doesn't exist.
          </p>

          <Link
            to="/employer/jobs"
            className="btn btn-primary mt-5 rounded-xl"
          >
            Back to My Jobs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/employer/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-primary"
        >
          <FiArrowLeft />
          Back to My Jobs
        </Link>

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-primary">
            Employer Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Edit Job
          </h1>

          <p className="mt-2 text-sm text-base-content/60">
            Update your job information.
          </p>
        </div>

        {/* Form */}
        <section className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-sm sm:p-8">
          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* Basic Information */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiBriefcase />
                </div>

                <div>
                  <h2 className="font-bold">
                    Basic Information
                  </h2>

                  <p className="text-xs text-base-content/50">
                    Update the position information.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Job Title */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Job Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input input-bordered h-12 w-full rounded-xl"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input input-bordered h-12 w-full rounded-xl"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Category
                  </label>

                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="select select-bordered h-12 w-full rounded-xl"
                    required
                  >
                    <option value="">
                      Select category
                    </option>

                    <option value="Technology">
                      Technology
                    </option>

                    <option value="Design">
                      Design
                    </option>

                    <option value="Marketing">
                      Marketing
                    </option>

                    <option value="Finance">
                      Finance
                    </option>

                    <option value="Sales">
                      Sales
                    </option>

                    <option value="Human Resources">
                      Human Resources
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="border-t border-base-300 pt-7">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FiMapPin />
                </div>

                <div>
                  <h2 className="font-bold">
                    Job Details
                  </h2>

                  <p className="text-xs text-base-content/50">
                    Update working conditions and requirements.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="input input-bordered h-12 w-full rounded-xl"
                    required
                  />
                </div>

                {/* Job Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Job Type
                  </label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="select select-bordered h-12 w-full rounded-xl"
                    required
                  >
                    <option value="">
                      Select job type
                    </option>

                    <option value="Full Time">
                      Full Time
                    </option>

                    <option value="Part Time">
                      Part Time
                    </option>

                    <option value="Contract">
                      Contract
                    </option>

                    <option value="Internship">
                      Internship
                    </option>
                  </select>
                </div>

                {/* Work Mode */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Work Mode
                  </label>

                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="select select-bordered h-12 w-full rounded-xl"
                    required
                  >
                    <option value="">
                      Select work mode
                    </option>

                    <option value="Remote">
                      Remote
                    </option>

                    <option value="On-site">
                      On-site
                    </option>

                    <option value="Hybrid">
                      Hybrid
                    </option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Experience Level
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="select select-bordered h-12 w-full rounded-xl"
                    required
                  >
                    <option value="">
                      Select experience
                    </option>

                    <option value="Entry Level">
                      Entry Level
                    </option>

                    <option value="Mid Level">
                      Mid Level
                    </option>

                    <option value="Senior Level">
                      Senior Level
                    </option>

                    <option value="Expert">
                      Expert
                    </option>
                  </select>
                </div>

                {/* Salary */}
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium">
                    Salary Range
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiDollarSign className="text-base-content/50" />

                    <input
                      type="text"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      className="grow"
                      required
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="border-t border-base-300 pt-7">
              <h2 className="mb-5 font-bold">
                Job Description
              </h2>

              <div className="space-y-5">

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="textarea textarea-bordered min-h-40 w-full rounded-xl"
                    required
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Requirements
                  </label>

                  <textarea
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    className="textarea textarea-bordered min-h-32 w-full rounded-xl"
                    required
                  />
                </div>

                {/* Skills */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Skills
                  </label>

                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="React, JavaScript, Node.js"
                    className="input input-bordered h-12 w-full rounded-xl"
                    required
                  />

                  <p className="mt-2 text-xs text-base-content/50">
                    Separate skills using commas.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-base-300 pt-7 sm:flex-row sm:justify-end">
              <Link
                to="/employer/jobs"
                className="btn btn-outline rounded-xl"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="btn btn-primary rounded-xl px-7"
              >
                <FiSave />
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default EditJob;