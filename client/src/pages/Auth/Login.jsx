
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiArrowRight,
  FiBriefcase,
  FiMail,
  FiLock,
} from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const email = formData.email.trim().toLowerCase();
    const password = formData.password;

    // Validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      let data;

      try {
        data = await response.json();
      } catch {
        throw new Error("Invalid response from server.");
      }

      // Backend error
      if (!response.ok) {
        setError(data.message || "Invalid email or password.");
        return;
      }

      // Check authentication data
      if (!data.token || !data.user) {
        setError(
          "Login successful, but authentication data was not received."
        );
        return;
      }

      // Save JWT token
      localStorage.setItem("jobfinder_token", data.token);

      // Save user
      localStorage.setItem(
        "jobfinder_user",
        JSON.stringify(data.user)
      );

      // Login successful → Home
      navigate("/", { replace: true });
    } catch (err) {
      console.error("Login error:", err);

      setError(
        err.message === "Invalid response from server."
          ? err.message
          : "Unable to connect to server. Make sure the backend is running."
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
                Welcome back to JobFinder.
              </h1>

              <p className="mt-5 max-w-md leading-7 opacity-80">
                Sign in to discover new opportunities, manage
                your applications, and grow your career.
              </p>
            </div>
          </div>

          <p className="text-sm opacity-70">
            Find opportunities. Build connections. Grow your career.
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
                Welcome back
              </h2>

              <p className="mt-2 text-base-content/60">
                Login to continue to your JobFinder account.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="alert alert-error mt-6">
                <span>{error}</span>
              </div>
            )}

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email Address
                </label>

                <label className="input input-bordered flex w-full items-center gap-3">
                  <FiMail className="shrink-0 text-base-content/50" />

                  <input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="grow"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="email"
                  />
                </label>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="login-password"
                    className="block text-sm font-medium"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </button>
                </div>

                <label className="input input-bordered flex w-full items-center gap-3">
                  <FiLock className="shrink-0 text-base-content/50" />

                  <input
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="grow"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={loading}
                    autoComplete="current-password"
                  />
                </label>
              </div>

              {/* Remember Me */}
              <label className="flex cursor-pointer items-center gap-3 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary"
                  disabled={loading}
                />

                <span>Remember me</span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full rounded-xl"
              >
                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Logging in...
                  </>
                ) : (
                  <>
                    Login
                    <FiArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            {/* Register */}
            <p className="mt-7 text-center text-sm text-base-content/60">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-primary hover:underline"
              >
                Create account
              </Link>
            </p>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Login;

