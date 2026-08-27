
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CTASection from "./components/CTASection";
import FeaturedJobs from "./components/FeaturedJobs";
import HowItWorks from "./components/HowItWorks";
import PopularCategories from "./components/PopularCategories";
import WhyChooseUs from "./components/WhyChooseUs";

function Home() {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("search", keyword.trim());
    }

    if (location.trim()) {
      params.set("location", location.trim());
    }

    navigate(`/jobs${params.toString() ? `?${params.toString()}` : ""}`);
  };

  const handlePopularSearch = (job) => {
    navigate(`/jobs?search=${encodeURIComponent(job)}`);
  };

  const popularJobs = [
    "React Developer",
    "UI/UX Designer",
    "Marketing",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-base-200">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary sm:text-base">
              Find your next opportunity
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Find a job you{" "}
              <span className="text-primary">love</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-base-content/70 sm:text-lg">
              Discover thousands of jobs from top companies and find the
              perfect opportunity to grow your career.
            </p>

            {/* Search Box */}
            <form
              onSubmit={handleSearch}
              className="mx-auto mt-8 grid max-w-4xl gap-3 rounded-2xl bg-base-100 p-3 shadow-lg sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]"
            >
              <label className="input input-bordered flex w-full items-center gap-3">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="grow"
                  placeholder="Job title or keyword"
                />
              </label>

              <label className="input input-bordered flex w-full items-center gap-3">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="grow"
                  placeholder="Location"
                />
              </label>

              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl px-7 lg:w-auto"
              >
                Search Jobs
              </button>
            </form>

            {/* Popular Searches */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-base-content/60">
              <span>Popular:</span>

              {popularJobs.map((job) => (
                <button
                  key={job}
                  type="button"
                  onClick={() => handlePopularSearch(job)}
                  className="cursor-pointer transition hover:text-primary"
                >
                  {job}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <PopularCategories />

      {/* Featured Jobs */}
      <FeaturedJobs />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* How It Works */}
      <HowItWorks />

      {/* CTA */}
      <CTASection />
    </main>
  );
}

export default Home;

