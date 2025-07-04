# 🎓 GyanLoop — Online Learning Platform

GyanLoop is a modern, responsive, and user-friendly **e-learning platform** built with the latest web technologies. It allows users to register, explore courses, take quizzes, track learning progress, and receive certificates upon completion.

---

## 📁 Project Structure

### 🧩 App Layout

- **Navbar** — Navigation across pages (Courses, Dashboard, Login/Signup)
- **Main Content Body** — Displays content based on current route
- **Footer** — Branding and copyright

---

## 📄 Pages

### 🔐 Auth Section

- **Login Page**  
  Secure login using email and password with JWT authentication. Form validation handled via Yup.

- **Signup Page**  
  New users can register. Redirected to the dashboard after successful signup.

---

### 🧭 App Section

- **Landing Page**  
  Welcome banner with a short introduction to GyanLoop. Highlights core features like learning progress and certificates.

- **Courses Page**  
  Displays all available courses. Each course includes:

  - Title, description, and thumbnail
  - Progress bar
  - “Continue Learning” button

- **Lesson Page**  
  Each lesson may include:

  - Embedded video content
  - Auto-completion on watching video
  - Quiz section with multiple-choice questions (MCQs)

- **Dashboard Page**  
  A personalized view for the logged-in user:

  - List of enrolled courses
  - Current progress per course
  - Certificates earned

---

## 🚀 Features

- ✅ JWT-based Authentication
- 📚 Course Enrollment and Lesson Viewing
- 📝 Integrated Quizzes per course (MCQs)
- 📈 Progress Tracking with Real-Time Updates
- 🧠 Progress Bars for Each Course
- 📜 Certificate Generation after Completion
- 🧾 Dashboard Summary of Learning Activities
- 🧑‍💼 Responsive UI for all screen sizes
- ☁️ Toast Notifications for Feedback

## 🧰 Tech Stack & Packages

| Library / Tool       | Purpose                                | Link                                                                      |
| -------------------- | -------------------------------------- | ------------------------------------------------------------------------- |
| **Vite**             | Build tool for faster dev & production | [vite.dev](https://vite.dev/guide/)                                       |
| **React + JSX**      | UI library                             | [react.dev](https://react.dev)                                            |
| **Tailwind CSS**     | Utility-first CSS framework            | [tailwindcss.com](https://tailwindcss.com/docs/installation/using-vite)   |
| **React Router DOM** | Routing between pages                  | [reactrouter.com](https://reactrouter.com/start/declarative/installation) |
| **Lucide React**     | Modern icons                           | [lucide.dev](https://lucide.dev/guide/packages/lucide-react)              |
| **react-toastify**   | Toast notifications                    | [npmjs.com](https://www.npmjs.com/package/react-toastify)                 |
| **Axios**            | HTTP requests                          | [axios-http.com](https://axios-http.com/docs/intro)                       |
| **jwt-decode**       | Decode JWT tokens                      | [npmjs.com](https://www.npmjs.com/package/jwt-decode)                     |
| **Redux Toolkit**    | State management                       | [redux.js.org](https://redux.js.org/tutorials/quick-start)                |
| **Yup**              | Form validation                        | [npmjs.com](https://www.npmjs.com/package/yup)                            |

---

## 🧑‍🏫 How It Works

1. **User Authentication**

   - Login/Signup forms handle input validation and API calls.
   - On successful login, JWT is stored and decoded.

2. **Courses and Lessons**

   - Users can explore and enroll in courses.
   - Each course contains modules/lessons.
   - Lessons include video content and quizzes.
   - Lessons are auto-marked complete after video end and/or quiz completion.

3. **Quizzes**

   - Each lesson may include one or more multiple-choice questions.
   - User selects answers and submits.
   - The quiz is auto-graded and score is displayed.
   - Correct answers can optionally be shown.

4. **Progress & Dashboard**

   - Users see a real-time progress bar for each course.
   - Dashboard summarizes enrolled courses, quiz scores, and certificates.

5. **Certificate**
   - Upon 100% course completion (including quizzes), users can download a certificate.
