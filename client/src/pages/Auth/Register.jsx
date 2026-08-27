import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiUser,
  FiMail,
  FiLock,
} from "react-icons/fi";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "candidate",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!formData.password) {
      setError("Please enter your password.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      // Backend error
      if (!response.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      // Check token and user
      if (!data.token || !data.user) {
        setError(
          "Registration successful, but authentication data was not received."
        );
        return;
      }

      // Save token
      localStorage.setItem(
        "jobfinder_token",
        data.token
      );

      // Save user
      localStorage.setItem(
        "jobfinder_user",
        JSON.stringify(data.user)
      );

      // IMPORTANT:
      // Registration successful → Home page
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Registration error:", error);

      setError(
        "Unable to connect to server. Make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-base-200 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-3xl bg-base-100 shadow-xl lg:grid-cols-2">

        {/* Left Content */}
        <div className="hidden bg-primary p-10 text-primary-content lg:flex lg:flex-col lg:justify-between xl:p-14">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-content text-primary">
                <FiBriefcase size={20} />
              </span>

              JobFinder
            </Link>

            <div className="mt-20">
              <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
                Build your future with JobFinder.
              </h1>

              <p className="mt-5 max-w-md leading-7 opacity-80">
                Create your account and start discovering
                opportunities that match your skills and career
                goals.
              </p>
            </div>
          </div>

          <p className="text-sm opacity-70">
            Create your profile. Discover opportunities. Grow
            your career.
          </p>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-10 lg:p-12 xl:p-14">
          <div className="mx-auto max-w-md">

            {/* Mobile Logo */}
            <div className="mb-8 lg:hidden">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
                  <FiBriefcase size={20} />
                </span>

                Job<span className="text-primary">Finder</span>
              </Link>
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Create account
              </h2>

              <p className="mt-2 text-base-content/60">
                Join JobFinder and start your journey.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-error mt-6">
                <span>{error}</span>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full Name
                </label>

                <label className="input input-bordered flex w-full items-center gap-3">
                  <FiUser className="shrink-0 text-base-content/50" />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="grow"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </label>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="register-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <label className="input input-bordered flex w-full items-center gap-3">
                  <FiMail className="shrink-0 text-base-content/50" />

                  <input
                    id="register-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="grow"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </label>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="register-password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <label className="input input-bordered flex w-full items-center gap-3">
                  <FiLock className="shrink-0 text-base-content/50" />

                  <input
                    id="register-password"
                    name="password"
                    type="password"
                    placeholder="Create a password"
                    className="grow"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                  />
                </label>
              </div>

              {/* Role */}
              <div>
                <label
                  htmlFor="role"
                  className="mb-2 block text-sm font-medium"
                >
                  Account Type
                </label>

                <select
                  id="role"
                  name="role"
                  className="select select-bordered w-full"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={loading}
                >
                  <option value="candidate">
                    Candidate
                  </option>

                  <option value="employer">
                    Employer
                  </option>
                </select>
              </div>

              {/* Terms */}
              <label className="flex cursor-pointer items-start gap-3 text-sm leading-5">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mt-0.5"
                  required
                  disabled={loading}
                />

                <span>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="font-medium text-primary hover:underline"
                  >
                    Terms & Conditions
                  </button>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full rounded-xl"
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}

                {!loading && (
                  <FiArrowRight size={18} />
                )}
              </button>
            </form>

            {/* Login */}
            <p className="mt-7 text-center text-sm text-base-content/60">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:underline"
              >
                Login
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Register;