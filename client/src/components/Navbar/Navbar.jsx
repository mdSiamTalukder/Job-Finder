import { Link, NavLink } from "react-router-dom";
import {
  FiBriefcase,
  FiClipboard,
  FiLogIn,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
  {
    name: "Saved Jobs",
    path: "/saved-jobs",
    icon: <FiBriefcase />,
  },
  {
    name: "Applications",
    path: "/applications",
    icon: <FiClipboard />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FiUser />,
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Employer Dashboard",
    path: "/employer/dashboard",
  },
];

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-semibold text-primary"
        : "text-base-content/70 hover:text-primary"
    }`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/95 backdrop-blur">
      <div className="navbar mx-auto min-h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="navbar-start">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-content">
              <FiBriefcase size={19} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Job<span className="text-primary">Finder</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
              >
                <span className="flex items-center gap-2">
                  {link.icon}
                  {link.name}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Desktop Login */}
        <div className="navbar-end hidden lg:flex">
          <Link
            to="/login"
            className="btn btn-primary rounded-xl px-6"
          >
            <FiLogIn size={17} />
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end lg:hidden">
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX size={23} />
            ) : (
              <FiMenu size={23} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-base-300 bg-base-100 lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                      isActive
                        ? "bg-primary/10 font-semibold text-primary"
                        : "text-base-content/70 hover:bg-base-200 hover:text-primary"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/login"
                onClick={closeMenu}
                className="btn btn-primary mt-3 rounded-xl"
              >
                <FiLogIn size={17} />
                Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;