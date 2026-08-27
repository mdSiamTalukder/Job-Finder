import { useMemo, useState } from "react";

import JobSearch from "./components/JobSearch";
import JobFilters from "./components/JobFilters";
import JobList from "./components/JobList";

import { jobs } from "../../constants/jobs";

function Jobs() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const [filters, setFilters] = useState({
    category: "",
    jobType: "",
    experience: "",
    salary: "",
    workMode: "",
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchText = keyword.trim().toLowerCase();
      const searchLocation = location.trim().toLowerCase();

      const matchesKeyword =
        !searchText ||
        job.title.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLocation =
        !searchLocation ||
        job.location.toLowerCase().includes(searchLocation) ||
        job.mode.toLowerCase().includes(searchLocation);

      const matchesCategory =
        !filters.category || job.category === filters.category;

      const matchesJobType =
        !filters.jobType || job.type === filters.jobType;

      const matchesExperience =
        !filters.experience || job.experience === filters.experience;

      const matchesWorkMode =
        !filters.workMode || job.mode === filters.workMode;

      let matchesSalary = true;

      const salaryText = job.salary.replace(/[৳,K\s]/g, "");

      const salaryNumbers = salaryText
        .split("-")
        .map((value) => parseInt(value, 10))
        .filter((value) => !Number.isNaN(value));

      const minSalary = salaryNumbers[0] || 0;

      if (filters.salary === "under30") {
        matchesSalary = minSalary < 30;
      }

      if (filters.salary === "30to60") {
        matchesSalary = minSalary >= 30 && minSalary < 60;
      }

      if (filters.salary === "60to100") {
        matchesSalary = minSalary >= 60 && minSalary < 100;
      }

      if (filters.salary === "over100") {
        matchesSalary = minSalary >= 100;
      }

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesCategory &&
        matchesJobType &&
        matchesExperience &&
        matchesSalary &&
        matchesWorkMode
      );
    });
  }, [keyword, location, filters]);

  const clearFilters = () => {
    setKeyword("");
    setLocation("");

    setFilters({
      category: "",
      jobType: "",
      experience: "",
      salary: "",
      workMode: "",
    });
  };

  return (
    <main>
      <JobSearch
        keyword={keyword}
        location={location}
        setKeyword={setKeyword}
        setLocation={setLocation}
      />

      <JobFilters
        filters={filters}
        setFilters={setFilters}
        onClear={clearFilters}
      />

      <JobList jobs={filteredJobs} />
    </main>
  );
}

export default Jobs;