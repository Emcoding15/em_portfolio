import React from "react";

type SkillTagProps = {
  imgUrl: string;
  label: string;
};

const SkillTag: React.FC<SkillTagProps> = ({ imgUrl, label }) => (
  <span className="flex items-center gap-2 bg-gray-700 text-[var(--foreground)] px-3 py-1 rounded font-medium text-base border border-gray-600">
    <img src={imgUrl} alt={label + ' logo'} className="w-5 h-5" />
    {label}
  </span>
);

export default SkillTag;
