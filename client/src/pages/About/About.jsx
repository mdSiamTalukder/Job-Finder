import {
  FiBriefcase,
  FiCheckCircle,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

function About() {
  const features = [
    {
      icon: FiBriefcase,
      title: "Find Better Jobs",
      description:
        "Discover job opportunities that match your skills, experience, and career goals.",
    },
    {
      icon: FiUsers,
      title: "Connect With Companies",
      description:
        "Connect with companies and employers looking for talented professionals like you.",
    },
    {
      icon: FiTarget,
      title: "Build Your Career",
      description:
        "Take the next step in your career with the right opportunities and resources.",
    },
  ];

  const values = [
    "Simple and easy job searching",
    "Quality opportunities for candidates",
    "Better hiring experience for employers",
    "Transparent and user-friendly platform",
  ];

  return (
    <main className="min-h-screen bg-base-200">

      {/* Hero */}
      <section className="bg-base-100 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <FiBriefcase size={30} />
          </div>

          <p className="mt-6 text-sm font-semibold text-primary">
            About JobFinder
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Helping People Find Their
            <span className="text-primary"> Next Opportunity</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-base-content/60 sm:text-lg">
            JobFinder is a modern job platform designed to make
            finding jobs and hiring talented people easier, faster,
            and more accessible.
          </p>

        </div>
      </section>

      {/* Mission */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold text-primary">
              Our Mission
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Making career opportunities accessible to everyone.
            </h2>

            <p className="mt-5 leading-7 text-base-content/60">
              We believe finding a job shouldn't be complicated.
              JobFinder brings candidates and employers together
              in one simple platform where people can discover
              opportunities and companies can find the right talent.
            </p>
          </div>

          <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm sm:p-9">
            <p className="text-sm font-semibold text-primary">
              Our Vision
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Building a better future for careers and hiring.
            </h2>

            <p className="mt-5 leading-7 text-base-content/60">
              Our vision is to create a trusted platform where
              candidates can grow their careers and employers can
              build strong teams with confidence.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-base-100 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-primary">
              Why JobFinder
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything you need to move forward
            </h2>

            <p className="mt-4 text-sm leading-6 text-base-content/60 sm:text-base">
              A simple platform built for both job seekers and
              employers.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-base-300 bg-base-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-base-content/60">
                    {feature.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <div className="rounded-3xl border border-base-300 bg-base-100 p-7 shadow-sm sm:p-10">

            <div className="text-center">
              <p className="text-sm font-semibold text-primary">
                What We Value
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Built around people
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-3 rounded-2xl bg-base-200 p-4"
                >
                  <FiCheckCircle className="shrink-0 text-success" />

                  <span className="text-sm font-medium">
                    {value}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-primary-content sm:text-4xl">
            Ready to find your next opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-primary-content/80 sm:text-base">
            Explore thousands of opportunities and take the next
            step in your career with JobFinder.
          </p>

          <a
            href="/jobs"
            className="btn mt-7 rounded-xl bg-base-100 px-7 text-primary hover:bg-base-200"
          >
            Explore Jobs
          </a>

        </div>
      </section>

    </main>
  );
}

export default About;