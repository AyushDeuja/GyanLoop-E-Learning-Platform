import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="border rounded-lg p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="mx-auto mb-4 bg-blue-100 p-3 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
