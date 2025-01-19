import React from "react";

interface ExperienceCardProps {
  title: string;
  organization: string;
  date: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, organization, date }) => {
  return (
    <div className="w-full border-2 border-black rounded-lg p-4 flex justify-between items-center text-sm">
      <div className="flex flex-col items-start">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="text-xs text-gray-500">{organization}</p>
      </div>
      <span className="text-xs text-gray-600">{date}</span>
    </div>
  );
};

export default ExperienceCard;
