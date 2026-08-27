import {
  FiBriefcase,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-content">
              <FiBriefcase size={19} />
            </span>

            <span>
              Job<span className="text-primary">Finder</span>
            </span>
          </div>

          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-content/70">
            Find the right opportunity, connect with great companies, and
            build your career with JobFinder.
          </p>

          <div className="mt-5 flex gap-2">
            <button className="btn btn-ghost btn-circle" aria-label="Facebook">
              <FiFacebook size={18} />
            </button>

            <button className="btn btn-ghost btn-circle" aria-label="Twitter">
              <FiTwitter size={18} />
            </button>

            <button className="btn btn-ghost btn-circle" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </button>
          </div>
        </div>

        {/* For Candidates */}
        <div>
          <h3 className="mb-4 font-semibold">For Candidates</h3>

          <div className="flex flex-col gap-3 text-sm text-neutral-content/70">
            <a className="hover:text-primary">Browse Jobs</a>
            <a className="hover:text-primary">Saved Jobs</a>
            <a className="hover:text-primary">My Applications</a>
            <a className="hover:text-primary">Career Advice</a>
          </div>
        </div>

        {/* For Employers */}
        <div>
          <h3 className="mb-4 font-semibold">For Employers</h3>

          <div className="flex flex-col gap-3 text-sm text-neutral-content/70">
            <a className="hover:text-primary">Post a Job</a>
            <a className="hover:text-primary">Find Candidates</a>
            <a className="hover:text-primary">Employer Dashboard</a>
            <a className="hover:text-primary">Pricing</a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 font-semibold">Company</h3>

          <div className="flex flex-col gap-3 text-sm text-neutral-content/70">
            <a className="hover:text-primary">About Us</a>
            <a className="hover:text-primary">Contact</a>
            <a className="hover:text-primary">Privacy Policy</a>
            <a className="hover:text-primary">Terms & Conditions</a>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-content/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-center text-sm text-neutral-content/60 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} JobFinder. All rights reserved.</p>

          <p>Built with React & Node.js 🚀</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;