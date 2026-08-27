import { FiMapPin, FiSearch } from "react-icons/fi";

function JobSearch({ keyword, location, setKeyword, setLocation }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Find your opportunity
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Find your next job
          </h1>

          <p className="mt-4 text-sm leading-6 text-base-content/60 sm:text-base">
            Search thousands of jobs and discover the opportunity that's
            right for you.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-base-300 bg-base-100 p-3 shadow-lg sm:p-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_1fr_auto]"
          >
            <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
              <FiSearch className="shrink-0 text-base-content/50" />

              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job title, skills or keywords"
                className="grow"
              />
            </label>

            <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
              <FiMapPin className="shrink-0 text-base-content/50" />

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, country or remote"
                className="grow"
              />
            </label>

            <button
              type="submit"
              className="btn btn-primary h-12 rounded-xl px-7"
            >
              <FiSearch size={18} />
              Search Jobs
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default JobSearch;