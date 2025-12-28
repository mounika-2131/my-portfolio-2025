import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  const handleClickDemo = (demoUrl) => {
    const newWindow = window.open(demoUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  const handleClickCode = (codeUrl) => {
    const newWindow = window.open(codeUrl, "_blank");
    newWindow.opener = null;
    newWindow.rel = "noopener noreferrer";
  };

  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto overflow-hidden bg-neutral-900">
      <div className="h-40 md:h-48 w-full overflow-hidden">
        <img
          onClick={() => handleModalInfo(project)}
          src={project.src}
          alt={project.title || 'Project image'}
          className="w-full h-full object-cover cursor-pointer transition-transform duration-200 hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-white text-center">{project.title || 'Project'}</h3>
        {project.description && (
          <p className="text-sm text-gray-300 mt-2 text-center">{project.description}</p>
        )}

        <div className="flex items-center justify-center mt-4">
          <button
            onClick={() => handleClickDemo(project.demo)}
            className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125"
          >
            Demo
          </button>
          <button
            onClick={() => handleClickCode(project.code)}
            className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125"
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
