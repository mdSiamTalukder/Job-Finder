import { FiFilter, FiRotateCcw } from "react-icons/fi";

function JobFilters({ filters, setFilters, onClear }) {
  const handleChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="border-b border-base-300 bg-base-100 py-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2">
            <FiFilter className="text-primary" size={19} />

            <h2 className="font-semibold">Filter Jobs</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap">
            <select
              value={filters.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="select select-bordered h-11 min-w-44 rounded-xl"
            >
              <option value="">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="Human Resources">Human Resources</option>
            </select>

            <select
              value={filters.jobType}
              onChange={(e) => handleChange("jobType", e.target.value)}
              className="select select-bordered h-11 min-w-40 rounded-xl"
            >
              <option value="">All Job Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>

            <select
              value={filters.experience}
              onChange={(e) => handleChange("experience", e.target.value)}
              className="select select-bordered h-11 min-w-40 rounded-xl"
            >
              <option value="">Experience</option>
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Expert">Expert</option>
            </select>

            <select
              value={filters.salary}
              onChange={(e) => handleChange("salary", e.target.value)}
              className="select select-bordered h-11 min-w-40 rounded-xl"
            >
              <option value="">Salary Range</option>
              <option value="under30">Under ৳30K</option>
              <option value="30to60">৳30K - ৳60K</option>
              <option value="60to100">৳60K - ৳100K</option>
              <option value="over100">৳100K+</option>
            </select>

            <select
              value={filters.workMode}
              onChange={(e) => handleChange("workMode", e.target.value)}
              className="select select-bordered h-11 min-w-40 rounded-xl"
            >
              <option value="">Work Mode</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>

            <button
              type="button"
              onClick={onClear}
              className="btn btn-ghost h-11 rounded-xl"
            >
              <FiRotateCcw size={16} />
              Clear
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JobFilters;