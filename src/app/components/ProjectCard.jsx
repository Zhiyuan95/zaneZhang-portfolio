import React, { useState } from "react";
import {
  CodeBracketIcon,
  EyeIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            target="_blank"
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            target="_blank"
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <div className={`description ${isCollapsed ? "collapsed" : ""}`}>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <button
          onClick={toggleCollapse}
          className="text-[#ADB7BE] mt-2 cursor-pointer flex items-center"
        >
          {isCollapsed ? (
            <ChevronDownIcon className="h-5 w-5 mr-1" />
          ) : (
            <ChevronUpIcon className="h-5 w-5 mr-1" />
          )}
          {isCollapsed ? "Show more" : "Show less"}
        </button>
      </div>

      <style jsx>{`
        .description.collapsed {
          max-height: 2.5em; /* Adjust the height you prefer for the collapsed state */
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProjectCard;
