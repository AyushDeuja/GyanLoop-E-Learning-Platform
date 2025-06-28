import React from "react";

const CertificateCard = ({ title, instructor, date }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg mb-2">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-400">Completed on {date}</p>
      <p className="text-sm text-gray-400">by {instructor}</p>
    </div>
  );
};

export default CertificateCard;
