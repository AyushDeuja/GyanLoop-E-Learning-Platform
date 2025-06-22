import { Star, Users, Clock } from "lucide-react";
import CustomButton from "./CustomButton";

export default function CourseCard({
  image,
  category,
  difficulty,
  title,
  instructor,
  description,
  duration,
  enrolledStudents,
  rating,
  price,
  isEnrolled,
  onEnroll,
}) {
  const buttonLabel = isEnrolled ? "Continue Learning" : "Enroll Now";

  // Map difficulty levels to background color classes
  const difficultyColors = {
    beginner: "bg-green-600 text-white",
    intermediate: "bg-yellow-300 text-black",
    advanced: "bg-red-600 text-white",
  };

  return (
    <div className=" bg-[#0f172a] text-white rounded-xl overflow-hidden border border-gray-700 w-[430px] shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] object-cover bg-gray-800"
      />

      <div className="p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="bg-blue-800 text-white px-2 py-0.5 rounded-full">
            {category}
          </span>
          <span
            className={`px-2 py-0.5 rounded-full ${
              difficultyColors[difficulty] || "bg-gray-500 text-white"
            }`}
          >
            {difficulty}
          </span>
        </div>

        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-300">By {instructor}</p>
        <p className="text-sm text-gray-400">{description}</p>

        <div className="flex justify-between text-sm text-gray-300 pt-2">
          <span className="flex items-center gap-1">
            <Clock size={16} /> {duration}
          </span>
          <span className="flex items-center gap-1">
            <Users size={16} /> {enrolledStudents}
          </span>
          <span className="flex items-center gap-1">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />{" "}
            {rating}
          </span>
        </div>

        <div className="flex justify-between items-center pt-4 ">
          <span className="text-xl font-bold text-blue-400">${price}</span>
          <CustomButton
            label={buttonLabel}
            className="p-4 bg-white !text-black"
            onClick={onEnroll}
          />
        </div>
      </div>
    </div>
  );
}
