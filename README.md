# 🧑Job Portal

 Job Portal is a modern, responsive job listing platform built with **React**, **Tailwind CSS**, and **JavaScript**. It allows users to explore categorized job listings, filter by preferences like location, job type, and salary, and create user accounts for application and login purposes.

## 🚀 Live Demo

🔗 [Visit the Live Site](https://billy-jobportal.netlify.app/)

---

## 📌 Features

### 🏠 Homepage
- Clean and professional landing section.
- Highlights top job categories.
- Showcases recent and trending jobs.

### 📄 Job Listings
- View jobs based on filters like:
  - **Location**
  - **Job Type (Full-Time, Remote, etc.)**
  - **Salary**
  - **Category**
  
- Dynamic filtering via dropdown and text input.
- Responsive design optimized for mobile and desktop.

### 🔍 Job Details
- Click on any job card to view detailed job description.
- Job details are shown within the same `/jobs` page, with header changing to `Job Details`.

### 🧑‍💻 User Authentication
- Simple sign-up and login system using localStorage.
- Prevents duplicate sign-ups with the same email.
- Stores users securely in browser storage.
- Auto-persist login credentials.

### 📱 Mobile-First Design
- Smooth UI on mobile devices.
- Ensures no scrolling glitches.
- Optimized input forms and layout for smaller screens.

---

## 🛠️ Tech Stack

| Tech         | Description                            |
|--------------|----------------------------------------|
| React        | Frontend framework                     |
| Tailwind CSS | Utility-first CSS framework            |
| JavaScript   | Application logic                      |
| Netlify      | Hosting platform                       |
| localStorage | User authentication + state persistence |

---

## 📂 Project Structure
src/
│
├── components/            # Reusable UI components
├── pages/                 # Main routes like Homepage, Jobs, JobDetails, etc.
├── context/               # React Context for shared state
├── assets/                # SVGs, images, icons
├── App.jsx                # Main app wrapper
└── main.jsx               # ReactDOM render point



---

## 🔐 Authentication Flow

- Sign-up form collects: `name`, `email`, `password`
- Email must end with `@something.com`
- Passwords must:
  - Be at least 8 characters long
  - Start with an uppercase letter
  - Contain at least one number
- LocalStorage stores users persistently across sessions

---

## ⚙️ How to Use Locally

1. **Clone the repository:**
```bash
git clonehttps://github.com/Bigbilly-github/job-portal

2. **Install Dependencies**
npm install

3. **Run the App**
npm run dev


🧪 How to Use
    ✍ Sign Up
        Navigate to the sign-up section

        Enter a valid email (@domain.com), a password with:

        8+ characters

        At least one number

        First letter uppercase

🔐 Login
        Enter the same credentials to log in

        If successful, navigate to job listings

🎯 Browse Jobs
        Filter by category

        Click on any job card to view more info

        Apply via the provided application link

 Future Improvements

        Add backend integration (e.g., Firebase, Supabase, or Express).

        Allow users to apply for jobs.

        Admin dashboard to post/edit/delete jobs.

        Enhanced authentication with token/session management.

        Mobile push/email notification for saved job alerts.


Contributing

If you'd like to improve this project, feel free to fork the repo and create a pull request. Contributions, issues, and feature requests are welcome.

Contact
    Made by Yusuf Abiola
    Email: yusufabiola555@gmail.com
    LinkedIn: www.linkedin.com/in/abioladblogger

