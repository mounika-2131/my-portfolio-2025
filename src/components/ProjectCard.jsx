import React from "react";

const ProjectCard = ({ project, handleModalInfo }) => {
  return (
    <div className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto overflow-hidden bg-neutral-900">
      <div className="aspect-video w-full overflow-hidden">
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
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125 text-center"
          >
            Demo
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125 text-center"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
