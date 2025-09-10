"use client";
import React, { useState } from "react";


type SkillTagProps = {
  imgUrl: string;
  label: string;
  description?: string;
};


const SkillTag: React.FC<SkillTagProps> = ({ imgUrl, label, description }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <span
      className="relative flex items-center gap-3 bg-gray-700 text-[var(--foreground)] px-3 py-1 rounded-lg font-medium text-base md:text-lg border border-gray-600 shadow-sm transition-all duration-200 hover:bg-gray-600 hover:shadow-lg cursor-pointer"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      tabIndex={0}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      aria-label={label}
    >
      <img src={imgUrl} alt={label + ' logo'} className="w-7 h-7 md:w-8 md:h-8" />
      {label}
      {description && showTooltip && (
        <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-10 bg-gray-900 text-gray-100 text-sm px-3 py-2 rounded shadow-lg whitespace-pre-line min-w-[180px] max-w-xs">
          {description}
        </span>
      )}
    </span>
  );
};

export default SkillTag;
