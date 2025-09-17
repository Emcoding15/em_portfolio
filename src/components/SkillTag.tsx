"use client";
"use client";
import React from "react";


type SkillTagProps = {
  imgUrl: string;
  label: string;
};


const SkillTag: React.FC<SkillTagProps> = ({ imgUrl, label }) => (
  <span
    className="flex items-center gap-2 bg-gray-700 text-[var(--foreground)] px-2 py-0.5 rounded-md font-medium text-sm md:text-base border border-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-600 hover:shadow-lg cursor-pointer"
    aria-label={label}
  >
    {imgUrl && (
      <img src={imgUrl} alt={label + ' logo'} className="w-5 h-5 md:w-6 md:h-6" />
    )}
    {label}
  </span>
);

export default SkillTag;
