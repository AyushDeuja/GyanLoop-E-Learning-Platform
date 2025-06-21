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
    image: "/placeholder.svg",
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
      {
        id: "m2",
        title: "State and Props",
        isCompleted: false,
        lessons: [
          {
            id: "l4",
            title: "Understanding State",
            type: "video",
            duration: "18 min",
            videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            isCompleted: false,
          },
          {
            id: "l5",
            title: "Props Deep Dive",
            type: "video",
            duration: "22 min",
            videoUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            isCompleted: false,
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
];
