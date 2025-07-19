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
      "https://miro.medium.com/v2/resize:fit:1400/1*BwJ84XJUWpPNpSKFGU8KDQ.png",
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
            duration: "9.5 min",
            videoUrl: "/public/video.mp4",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "Components and JSX",
            type: "video",
            duration: "5 min",
            videoUrl: "/public/video.mp4",
            isCompleted: true,
          },
          {
            id: "l4",
            title: "State and Props in React",
            type: "video",
            duration: "7 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "React Lifecycle Methods",
            type: "video",
            duration: "8 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l6",
            title: "Handling Events in React",
            type: "video",
            duration: "6 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
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
                {
                  id: "q1-2",
                  type: "multiple-choice",
                  question: "Which hook is used for managing state in React?",
                  options: ["useFetch", "useEffect", "useState", "useReducer"],
                  correctAnswer: 2,
                  explanation:
                    "`useState` is the primary hook to handle component state.",
                },
                {
                  id: "q1-3",
                  type: "multiple-choice",
                  question:
                    "Which of the following is a valid React component?",
                  options: [
                    "function MyComponent() {}",
                    "let MyComponent = ReactComponent()",
                    "React.create(MyComponent)",
                    "component React() {}",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "Function components are declared using `function Name() {}`.",
                },
                {
                  id: "q1-4",
                  type: "multiple-choice",
                  question:
                    "How can you pass data from parent to child component?",
                  options: [
                    "Using Redux",
                    "Using Props",
                    "Using Context API",
                    "Using useRef",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Props are the standard way to pass data from parent to child.",
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
            duration: "146 min",
            videoUrl: "/public/video.mp4",
            isCompleted: true,
          },
          {
            id: "l3",
            title: "MERN Stack Setup",
            type: "video",
            duration: "30 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Express Routing Basics",
            type: "video",
            duration: "25 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "React Frontend Overview",
            type: "video",
            duration: "40 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l6",
            title: "Node.js Backend Fundamentals",
            type: "video",
            duration: "50 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
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
                {
                  id: "q2-2",
                  type: "multiple-choice",
                  question: "Which part of MERN is used for backend routing?",
                  options: ["MongoDB", "Express", "React", "Node.js"],
                  correctAnswer: 1,
                  explanation:
                    "Express is a minimal Node.js web framework used for routing.",
                },
                {
                  id: "q2-3",
                  type: "multiple-choice",
                  question:
                    "Which of the following renders UI in the MERN stack?",
                  options: ["MongoDB", "React", "Express", "Node.js"],
                  correctAnswer: 1,
                  explanation:
                    "React is the frontend library responsible for UI rendering.",
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
            duration: "266 min",
            videoUrl: "/public/video.mp4",
            isCompleted: true,
          },
          {
            id: "l2",
            title: "Python Variables and Data Types",
            type: "video",
            duration: "45 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Python Control Flow",
            type: "video",
            duration: "38 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "Installing and Using pip",
            type: "video",
            duration: "20 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l6",
            title: "Writing Your First Python Program",
            type: "video",
            duration: "18 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Python Basics Quiz",
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
                {
                  id: "q1-2",
                  type: "multiple-choice",
                  question: "Which hook is used for managing state in React?",
                  options: ["useFetch", "useEffect", "useState", "useReducer"],
                  correctAnswer: 2,
                  explanation:
                    "`useState` is the primary hook to handle component state.",
                },
                {
                  id: "q1-3",
                  type: "multiple-choice",
                  question:
                    "Which of the following is a valid React component?",
                  options: [
                    "function MyComponent() {}",
                    "let MyComponent = ReactComponent()",
                    "React.create(MyComponent)",
                    "component React() {}",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "Function components are declared using `function Name() {}`.",
                },
                {
                  id: "q1-4",
                  type: "multiple-choice",
                  question:
                    "How can you pass data from parent to child component?",
                  options: [
                    "Using Redux",
                    "Using Props",
                    "Using Context API",
                    "Using useRef",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Props are the standard way to pass data from parent to child.",
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
            duration: "10 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Color Theory Basics",
            type: "video",
            duration: "12 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Typography in UI",
            type: "video",
            duration: "15 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "User Research Methods",
            type: "video",
            duration: "20 min",
            videoUrl: "/public/video.mp4",
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
                {
                  id: "q4-2",
                  type: "multiple-choice",
                  question: "Which tool is commonly used for UI design?",
                  options: ["Photoshop", "Figma", "Excel", "Illustrator"],
                  correctAnswer: 1,
                  explanation:
                    "Figma is widely used for UI/UX design due to its collaboration features.",
                },
                {
                  id: "q4-3",
                  type: "multiple-choice",
                  question: "UX focuses on:",
                  options: [
                    "How the product looks",
                    "Performance of code",
                    "User's experience and satisfaction",
                    "None of the above",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "UX is about optimizing the user experience, not visuals or code.",
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
    description:
      "Deep dive into advanced DSA concepts with Java to confidently crack challenging technical interviews",
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
            duration: "8 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Linked Lists Introduction",
            type: "video",
            duration: "15 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Stacks and Queues",
            type: "video",
            duration: "20 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "Recursion Basics",
            type: "video",
            duration: "22 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },

          {
            id: "l6",
            title: "Sorting Algorithms Overview",
            type: "video",
            duration: "25 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l7",
            title: "Big O Notation",
            type: "video",
            duration: "18 min",
            videoUrl: "/public/video.mp4",
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
                {
                  id: "q5-2",
                  type: "multiple-choice",
                  question:
                    "What is the time complexity of binary search in a sorted array?",
                  options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
                  correctAnswer: 1,
                  explanation:
                    "Binary search cuts the array in half each time, giving O(log n) complexity.",
                },
                {
                  id: "q5-3",
                  type: "multiple-choice",
                  question: "Which data structure uses FIFO principle?",
                  options: ["Stack", "Queue", "Graph", "Tree"],
                  correctAnswer: 1,
                  explanation:
                    "Queue follows First-In-First-Out (FIFO) principle.",
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
      "Write powerful, efficient SQL queries for extracting, transforming, and analyzing complex data.",
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
            duration: "62 min",
            videoUrl: "/public/video.mp4",
            isCompleted: true,
          },
          {
            id: "l3",
            title: "Filtering Data with WHERE",
            type: "video",
            duration: "30 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Sorting Results",
            type: "video",
            duration: "28 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "Aggregate Functions Overview",
            type: "video",
            duration: "35 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
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
                {
                  id: "q6-2",
                  type: "multiple-choice",
                  question: "Which clause is used to filter records?",
                  options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
                  correctAnswer: 1,
                  explanation:
                    "The WHERE clause filters records based on conditions.",
                },
                {
                  id: "q6-3",
                  type: "multiple-choice",
                  question:
                    "Which keyword is used to sort result in descending order?",
                  options: [
                    "SORT DESC",
                    "ORDER DESC",
                    "ORDER BY DESC",
                    "DESC BY",
                  ],
                  correctAnswer: 2,
                  explanation:
                    "`ORDER BY column DESC` is used for descending order sorting.",
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

  {
    id: "7",
    title: "Advanced JavaScript Concepts",
    description:
      "Master advanced JavaScript topics such as closures, prototypes, and async programming.",
    instructor: "David Brown",
    category: "Programming",
    difficulty: "advanced",
    duration: "22 hours",
    rating: 4.6,
    enrolledStudents: 1400,
    price: 79.99,
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201028214738/7-JavaScript-Concepts-That-Every-Developer-Must-Know.jpg",
    prerequisites: ["Basic JavaScript"],
    modules: [
      {
        id: "m1",
        title: "Deep Dive into JavaScript",
        isCompleted: false,
        lessons: [
          {
            id: "l1",
            title: "Closures Explained",
            type: "video",
            duration: "25 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l2",
            title: "Prototype Chain",
            type: "video",
            duration: "20 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Async/Await Basics",
            type: "video",
            duration: "30 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "JavaScript Quiz",
            type: "quiz",
            duration: "15 min",
            isCompleted: false,
            quiz: {
              id: "q7",
              questions: [
                {
                  id: "q7-1",
                  type: "multiple-choice",
                  question: "What is a closure in JavaScript?",
                  options: [
                    "A function having access to its outer scope",
                    "A function declared inside another function",
                    "A block scope variable",
                    "A way to declare variables",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "A closure allows a function to access variables from an outer function's scope.",
                },
                {
                  id: "q7-2",
                  type: "multiple-choice",
                  question: "What does the prototype chain allow?",
                  options: [
                    "Inheritance of properties and methods",
                    "Variable hoisting",
                    "Event handling",
                    "Data binding",
                  ],
                  correctAnswer: 0,
                  explanation:
                    "The prototype chain allows inheritance of properties and methods.",
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
        userId: "u7",
        userName: "Anita Sharma",
        rating: 4.7,
        comment: "Challenging but very rewarding course.",
        date: "2024-07-15",
      },
    ],
  },

  {
    id: "8",
    title: "Basics of Digital Marketing",
    description:
      "Learn SEO, SEM, email marketing, and social media strategies to grow your business.",
    instructor: "Rajiv Thapa",
    category: "Marketing",
    difficulty: "beginner",
    duration: "12 hours",
    rating: 4.5,
    enrolledStudents: 1100,
    price: 59.99,
    image:
      "https://imgs.search.brave.com/FPZyx8SXx2UrNSb520tdHNpqWCy-EDJmXZVAaA4A58Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZGln/aXRhbC1tYXJrZXRp/bmctcGljdHVyZXMt/M2FpYWh5ajlndzR1/cDJpNS5qcGc",
    prerequisites: ["Basic computer skills"],
    modules: [
      {
        id: "m1",
        title: "Introduction to Digital Marketing",
        isCompleted: false,
        lessons: [
          {
            id: "l1",
            title: "SEO Fundamentals",
            type: "video",
            duration: "25 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l2",
            title: "SEM Basics",
            type: "video",
            duration: "20 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Email Marketing",
            type: "video",
            duration: "15 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Social Media Strategies",
            type: "video",
            duration: "18 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "Digital Marketing Quiz",
            type: "quiz",
            duration: "10 min",
            isCompleted: false,
            quiz: {
              id: "q8",
              questions: [
                {
                  id: "q8-1",
                  type: "multiple-choice",
                  question: "What does SEO stand for?",
                  options: [
                    "Search Engine Optimization",
                    "Social Engagement Optimization",
                    "Search Event Organization",
                    "Social Engine Operation",
                  ],
                  correctAnswer: 0,
                  explanation: "SEO stands for Search Engine Optimization.",
                },
                {
                  id: "q8-2",
                  type: "multiple-choice",
                  question:
                    "Which platform is best for social media marketing?",
                  options: [
                    "LinkedIn",
                    "Instagram",
                    "Twitter",
                    "All of the above",
                  ],
                  correctAnswer: 3,
                  explanation:
                    "All platforms can be effective depending on your audience.",
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
        userId: "u8",
        userName: "Sanjana Ghimire",
        rating: 4.6,
        comment: "Great introduction to digital marketing.",
        date: "2024-08-10",
      },
    ],
  },

  {
    id: "9",
    title: "Cloud Computing Fundamentals",
    description:
      "Understand the basics of cloud computing and learn to deploy apps on AWS and Azure.",
    instructor: "Carlos Martinez",
    category: "IT & Software",
    difficulty: "intermediate",
    duration: "18 hours",
    rating: 4.4,
    enrolledStudents: 1300,
    price: 89.99,
    image:
      "https://platinumdatarecovery.com/wp-content/uploads/2023/05/cloud-computing-diagram.webp",
    prerequisites: ["Basic Networking"],
    modules: [
      {
        id: "m1",
        title: "Cloud Basics",
        isCompleted: false,
        lessons: [
          {
            id: "l1",
            title: "Introduction to Cloud Computing",
            type: "video",
            duration: "35 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l2",
            title: "AWS Overview",
            type: "video",
            duration: "40 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l3",
            title: "Azure Fundamentals",
            type: "video",
            duration: "38 min",
            videoUrl: "/public/video.mp4",
            isCompleted: false,
          },
          {
            id: "l4",
            title: "Cloud Quiz",
            type: "quiz",
            duration: "12 min",
            isCompleted: false,
            quiz: {
              id: "q9",
              questions: [
                {
                  id: "q9-1",
                  type: "multiple-choice",
                  question: "What is the main benefit of cloud computing?",
                  options: [
                    "Local storage",
                    "Scalability and flexibility",
                    "Manual backups",
                    "Limited accessibility",
                  ],
                  correctAnswer: 1,
                  explanation:
                    "Cloud computing provides scalability and flexibility.",
                },
                {
                  id: "q9-2",
                  type: "multiple-choice",
                  question: "Which is a popular cloud service provider?",
                  options: ["AWS", "Oracle", "GitHub", "Linux"],
                  correctAnswer: 0,
                  explanation: "AWS is a leading cloud service provider.",
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
        userId: "u9",
        userName: "Mina Khatri",
        rating: 4.5,
        comment: "Clear and concise introduction to cloud computing.",
        date: "2024-09-20",
      },
    ],
  },
];
