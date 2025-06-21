export const mockCourses = [
  {
    id: "1",
    title: "Complete React Development",
    description:
      "Master React from fundamentals to advanced concepts including hooks, context, and testing.",
    instructor: "Sarah Johnson",
    category: "Programming",
    difficulty: "intermediate",
    duration: "24 hours",
    rating: 4.8,
    enrolledStudents: 1250,
    price: 89.99,
    image:
      "https://miro.medium.com/v2/resize:fit:680/1*RDN058L5gQ02Xy13OaxjnQ.jpeg",
    prerequisites: ["Basic JavaScript", "HTML/CSS"],
    modules: [
      {
        id: "m1",
        title: "React Fundamentals",
        isCompleted: true,
        lessons: [
          {
            id: "l1",
            title: "Introduction to React",
            type: "video",
            duration: "15 min",
            videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "Components and JSX",
            type: "video",
            duration: "20 min",
            videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            isCompleted: true,
          },
          {
            id: "l3",
            title: "React Basics Quiz",
            type: "quiz",
            duration: "10 min",
            isCompleted: false,
            quiz: {
              id: "q1",
              questions: [
                {
                  id: "q1-1",
                  type: "multiple-choice",
                  question: "What does JSX stand for?",
                  options: [
                    "JavaScript XML",
                    "JavaScript Extension",
                    "Java Syntax Extension",
                    "Just Syntax Extension",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.",
                },
              ],
            },
          },
        ],
      },
    ],

    reviews: [
      {
        id: "r1",
        userId: "u1",
        userName: "John Doe",
        rating: 5,
        comment: "Excellent course! Very comprehensive and well-structured.",
        date: "2024-01-15",
      },
    ],
  },
  {
    id: "2",
    title: "Fullstack Web Development with MERN",
    description:
      "Build dynamic web apps using MongoDB, Express, React, and Node.js.",
    instructor: "Michael Smith",
    category: "Web Development",
    difficulty: "advanced",
    duration: "30 hours",
    rating: 4.7,
    enrolledStudents: 980,
    price: 109.99,
    image:
      "https://graffersid.com/wp-content/uploads/2023/08/Future-Of-MERN-Stack-Development.webp",
    prerequisites: ["JavaScript", "Basic React", "Node.js"],
    modules: [
      {
        id: "m1",
        title: "MERN Overview",
        isCompleted: true,
        lessons: [
          {
            id: "l1",
            title: "What is MERN Stack?",
            type: "video",
            duration: "12 min",
            videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "MERN Quiz",
            type: "quiz",
            duration: "10 min",
            isCompleted: false,
            quiz: {
              id: "q2",
              questions: [
                {
                  id: "q2-1",
                  type: "multiple-choice",
                  question: "Which database is used in the MERN stack?",
                  options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
                  correctAnswer: 2,
                  explanation: "MongoDB is the NoSQL database used in MERN.",
                },
              ],
            },
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        userId: "u2",
        userName: "Priya Sharma",
        rating: 4.5,
        comment: "Very insightful and practical course.",
        date: "2024-02-10",
      },
    ],
  },
  {
    id: "3",
    title: "Intro to Python Programming",
    description:
      "Learn Python from scratch. Ideal for beginners with no prior experience.",
    instructor: "Emily Davis",
    category: "Programming",
    difficulty: "beginner",
    duration: "15 hours",
    rating: 4.6,
    enrolledStudents: 3200,
    price: 49.99,
    image:
      "https://cdn-cjmik.nitrocdn.com/UjszoEMIGzQLBmRYICliaPmdTnvQlovN/assets/images/optimized/rev-b7b1dec/www.aalpha.net/wp-content/uploads/2019/10/Python-programming-india.jpg",
    prerequisites: ["None"],
    modules: [
      {
        id: "m1",
        title: "Getting Started",
        isCompleted: true,
        lessons: [
          {
            id: "l1",
            title: "Installing Python",
            type: "video",
            duration: "10 min",
            videoUrl: "https://www.youtube.com/embed/rfscVS0vtbw",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "Python Basics Quiz",
            type: "quiz",
            duration: "8 min",
            isCompleted: false,
            quiz: {
              id: "q3",
              questions: [
                {
                  id: "q3-1",
                  type: "multiple-choice",
                  question:
                    "Which keyword is used to define a function in Python?",
                  options: ["func", "function", "def", "lambda"],
                  correctAnswer: 2,
                  explanation:
                    "In Python, functions are defined using the `def` keyword.",
                },
              ],
            },
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        userId: "u3",
        userName: "Rajesh Karki",
        rating: 5,
        comment: "Perfect for beginners. Easy to follow.",
        date: "2024-03-05",
      },
    ],
  },
  {
    id: "4",
    title: "UI/UX Design Basics",
    description:
      "Understand the fundamentals of UI/UX design with practical tools and tips.",
    instructor: "Laura Chen",
    category: "Design",
    difficulty: "beginner",
    duration: "10 hours",
    rating: 4.3,
    enrolledStudents: 870,
    price: 59.99,
    image:
      "https://www.pranathiss.com/blog/wp-content/uploads/ui-and-ux-Designing-agency.png",
    prerequisites: ["Basic computer skills"],
    modules: [
      {
        id: "m1",
        title: "Introduction to UI/UX",
        isCompleted: false,
        lessons: [
          {
            id: "l1",
            title: "Design Thinking",
            type: "video",
            duration: "25 min",
            videoUrl: "https://www.youtube.com/embed/_OcozA0MDrM",
            isCompleted: false,
          },
          {
            id: "l2",
            title: "UI/UX Quiz",
            type: "quiz",
            duration: "7 min",
            isCompleted: false,
            quiz: {
              id: "q4",
              questions: [
                {
                  id: "q4-1",
                  type: "multiple-choice",
                  question: "What does UI stand for?",
                  options: [
                    "User Integration",
                    "User Interface",
                    "User Input",
                    "Unified Interaction",
                  ],
                  correctAnswer: 1,
                  explanation: "UI stands for User Interface.",
                },
              ],
            },
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        userId: "u4",
        userName: "Sneha Thapa",
        rating: 4,
        comment: "Good introduction to design concepts.",
        date: "2024-04-01",
      },
    ],
  },
  {
    id: "5",
    title: "Data Structures and Algorithms in Java",
    description: "Deep dive into DSA with Java to crack technical interviews.",
    instructor: "Robert Martin",
    category: "Computer Science",
    difficulty: "advanced",
    duration: "35 hours",
    rating: 4.9,
    enrolledStudents: 2100,
    price: 99.99,
    image:
      "https://courses.wscubetech.com/s/store/courses/5f7edfd90cf212378353d729/cover.jpg?v=2",
    prerequisites: ["Basic Java"],
    modules: [
      {
        id: "m1",
        title: "Arrays and Strings",
        isCompleted: false,
        lessons: [
          {
            id: "l1",
            title: "Array Basics",
            type: "video",
            duration: "17 min",
            videoUrl: "https://www.youtube.com/embed/Wo8z3TFd3nw",
            isCompleted: false,
          },
          {
            id: "l2",
            title: "DSA Quiz",
            type: "quiz",
            duration: "12 min",
            isCompleted: false,
            quiz: {
              id: "q5",
              questions: [
                {
                  id: "q5-1",
                  type: "multiple-choice",
                  question: "Which data structure uses LIFO principle?",
                  options: ["Queue", "Stack", "Array", "Linked List"],
                  correctAnswer: 1,
                  explanation:
                    "Stack follows Last-In-First-Out (LIFO) principle.",
                },
              ],
            },
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        userId: "u5",
        userName: "Kishor Neupane",
        rating: 5,
        comment: "Very helpful for interview prep.",
        date: "2024-05-12",
      },
    ],
  },
  {
    id: "6",
    title: "Mastering SQL for Data Analysis",
    description:
      "Write powerful SQL queries for extracting and analyzing data.",
    instructor: "Aisha Patel",
    category: "Data Analysis",
    difficulty: "intermediate",
    duration: "20 hours",
    rating: 4.7,
    enrolledStudents: 1550,
    price: 79.99,
    image:
      "https://media.geeksforgeeks.org/wp-content/uploads/20250114194845708449/SQL-for-Data-Analysis.webp",
    prerequisites: ["Basic Excel or data handling"],
    modules: [
      {
        id: "m1",
        title: "SQL Fundamentals",
        isCompleted: true,
        lessons: [
          {
            id: "l1",
            title: "SELECT Queries",
            type: "video",
            duration: "20 min",
            videoUrl: "https://www.youtube.com/embed/9Pzj7Aj25lw",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "SQL Basics Quiz",
            type: "quiz",
            duration: "10 min",
            isCompleted: false,
            quiz: {
              id: "q6",
              questions: [
                {
                  id: "q6-1",
                  type: "multiple-choice",
                  question: "Which SQL command is used to retrieve data?",
                  options: ["GET", "FETCH", "SELECT", "RETRIEVE"],
                  correctAnswer: 2,
                  explanation:
                    "`SELECT` is used to fetch data from a database.",
                },
              ],
            },
          },
        ],
      },
    ],
    reviews: [
      {
        id: "r1",
        userId: "u6",
        userName: "Nisha Rai",
        rating: 4.8,
        comment: "Great for aspiring data analysts.",
        date: "2024-06-01",
      },
    ],
  },
];
