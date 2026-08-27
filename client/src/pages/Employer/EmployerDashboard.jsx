import { Link } from "react-router-dom";
import {
  FiBriefcase,
  FiCheckCircle,
  FiClock,
  FiUsers,
} from "react-icons/fi";

function EmployerDashboard() {
  const stats = [
    {
      title: "Total Jobs",
      value: "12",
      icon: FiBriefcase,
    },
    {
      title: "Total Applicants",
      value: "86",
      icon: FiUsers,
    },
    {
      title: "Pending Applications",
      value: "24",
      icon: FiClock,
    },
    {
      title: "Hired Candidates",
      value: "8",
      icon: FiCheckCircle,
    },
  ];

  const recentApplications = [
    {
      id: 1,
      name: "Rahim Ahmed",
      position: "Frontend Developer",
      date: "27 Aug 2026",
      status: "Pending",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      position: "UI/UX Designer",
      date: "26 Aug 2026",
      status: "Reviewed",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      position: "Backend Developer",
      date: "25 Aug 2026",
      status: "Pending",
    },
  ];

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">
              Employer Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Welcome back 👋
            </h1>

            <p className="mt-3 max-w-2xl text-sm text-base-content/60 sm:text-base">
              Manage your jobs, applications, and find the right
              candidates for your company.
            </p>
          </div>

          {/* Manage My Jobs */}
         {/* Dashboard Actions */}
<div className="flex flex-col gap-3 sm:flex-row">
  <Link
    to="/employer/jobs"
    className="btn btn-primary rounded-xl"
  >
    <FiBriefcase size={18} />
    Manage My Jobs
  </Link>

  <Link
    to="/employer/applicants"
    className="btn btn-outline rounded-xl"
  >
    <FiUsers size={18} />
    Applicants
  </Link>
</div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={21} />
                  </div>
                </div>

                <p className="mt-5 text-sm text-base-content/60">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold">
                  {stat.value}
                </h2>
              </div>
            );
          })}
        </div>

        {/* Recent Applications */}
        <section className="mt-8 rounded-3xl border border-base-300 bg-base-100 shadow-sm">
          <div className="border-b border-base-300 p-5 sm:p-6">
            <h2 className="text-xl font-bold">
              Recent Applications
            </h2>

            <p className="mt-1 text-sm text-base-content/60">
              Latest candidates who applied to your jobs.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="table">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Position</th>
                  <th>Applied Date</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentApplications.map((application) => (
                  <tr key={application.id}>
                    <td>
                      <div className="font-medium">
                        {application.name}
                      </div>
                    </td>

                    <td>{application.position}</td>

                    <td className="text-base-content/60">
                      {application.date}
                    </td>

                    <td>
                      <span
                        className={`badge ${
                          application.status === "Reviewed"
                            ? "badge-info"
                            : "badge-warning"
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-3 p-4 md:hidden">
            {recentApplications.map((application) => (
              <div
                key={application.id}
                className="rounded-2xl border border-base-300 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold">
                      {application.name}
                    </h3>

                    <p className="mt-1 text-sm text-primary">
                      {application.position}
                    </p>
                  </div>

                  <span
                    className={`badge ${
                      application.status === "Reviewed"
                        ? "badge-info"
                        : "badge-warning"
                    }`}
                  >
                    {application.status}
                  </span>
                </div>

                <p className="mt-3 text-xs text-base-content/50">
                  Applied: {application.date}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default EmployerDashboard;