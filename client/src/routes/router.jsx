import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/Jobs/JobDetails";
import ApplyJob from "../pages/Applications/ApplyJob";
import Applications from "../pages/Applications/Applications";
import Profile from "../pages/Profile/Profile";
import EmployerDashboard from "../pages/Employer/EmployerDashboard";
import EmployerJobs from "../pages/Employer/EmployerJobs";
import CreateJob from "../pages/Employer/CreateJob";
import EditJob from "../pages/Employer/EditJob";
import Applicants from "../pages/Employer/Applicants";
import ApplicationDetails from "../pages/Employer/ApplicationDetails";
import SavedJobs from "../pages/Candidate/SavedJobs";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path:"jobs/:id",
        element:<JobDetails />
      },
      {
        path:"jobs/:id/apply",
        element:<ApplyJob />
      },
      {
        path:"applications",
        element:<Applications />
      },
      {
  path: "employer/applicants/:id",
  element: <ApplicationDetails />,
},
      {
        path:"profile",
        element:<Profile />
      },
      {
  path: "employer/dashboard",
  element: <EmployerDashboard />,
},
{
  path: "employer/jobs",
  element: <EmployerJobs />,
},
{
  path: "employer/jobs/create",
  element: <CreateJob />,
},
{
  path: "employer/jobs/edit/:id",
  element: <EditJob />,
},
{
  path: "employer/applicants",
  element: <Applicants />,
},
{
  path: "saved-jobs",
  element: <SavedJobs />,
},
{
    path:"about",
    element:<About/>
}
    ],
  },
]);

export default router;