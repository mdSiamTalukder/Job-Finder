import { useState } from "react";
import {
  FiEdit3,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSave,
  FiUser,
} from "react-icons/fi";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Siam Talukder",
    email: "siam@example.com",
    phone: "+880 1XXXXXXXXX",
    location: "Dhaka, Bangladesh",
    headline: "Frontend Developer",
    bio: "Passionate developer interested in building modern and user-friendly web applications.",
    skills: ["React", "JavaScript", "Tailwind CSS", "Node.js"],
  });

  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setProfile(formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  return (
    <main className="min-h-screen bg-base-200 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary">
              Candidate Profile
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Profile
            </h1>

            <p className="mt-2 text-sm text-base-content/60">
              Manage your personal information and professional profile.
            </p>
          </div>

          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="btn btn-primary rounded-xl"
            >
              <FiEdit3 />
              Edit Profile
            </button>
          )}
        </div>

        {/* Profile Card */}
        <section className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm">
          {/* Cover */}
          <div className="h-32 bg-primary/10 sm:h-40" />

          {/* Profile Header */}
          <div className="px-5 pb-6 sm:px-8">
            <div className="-mt-10 flex flex-col gap-4 sm:-mt-12 sm:flex-row sm:items-end">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-base-100 bg-primary text-2xl font-bold text-primary-content sm:h-24 sm:w-24">
                {profile.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <div className="pb-1">
                <h2 className="text-xl font-bold sm:text-2xl">
                  {profile.name}
                </h2>

                <p className="mt-1 text-sm text-base-content/60">
                  {profile.headline}
                </p>
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="border-t border-base-300 px-5 py-7 sm:px-8">
            {isEditing ? (
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Full Name
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiUser className="text-base-content/50" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="grow"
                    />
                  </label>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email
                    </label>

                    <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                      <FiMail className="text-base-content/50" />

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="grow"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Phone
                    </label>

                    <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                      <FiPhone className="text-base-content/50" />

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="grow"
                      />
                    </label>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>

                  <label className="input input-bordered flex h-12 items-center gap-3 rounded-xl">
                    <FiMapPin className="text-base-content/50" />

                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="grow"
                    />
                  </label>
                </div>

                {/* Headline */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Professional Headline
                  </label>

                  <input
                    type="text"
                    name="headline"
                    value={formData.headline}
                    onChange={handleChange}
                    className="input input-bordered h-12 w-full rounded-xl"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    About Me
                  </label>

                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    className="textarea textarea-bordered min-h-36 w-full rounded-xl"
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="btn btn-outline rounded-xl"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    className="btn btn-primary rounded-xl"
                  >
                    <FiSave />
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Contact */}
                <div>
                  <h3 className="text-lg font-bold">
                    Personal Information
                  </h3>

                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <FiMail className="mt-1 text-primary" />

                      <div>
                        <p className="text-xs text-base-content/50">
                          Email
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {profile.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FiPhone className="mt-1 text-primary" />

                      <div>
                        <p className="text-xs text-base-content/50">
                          Phone
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {profile.phone}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FiMapPin className="mt-1 text-primary" />

                      <div>
                        <p className="text-xs text-base-content/50">
                          Location
                        </p>

                        <p className="mt-1 text-sm font-medium">
                          {profile.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About */}
                <div className="border-t border-base-300 pt-7">
                  <h3 className="text-lg font-bold">
                    Professional Summary
                  </h3>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-base-content/70">
                    {profile.bio}
                  </p>
                </div>

                {/* Skills */}
                <div className="border-t border-base-300 pt-7">
                  <h3 className="text-lg font-bold">
                    Skills
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Profile;