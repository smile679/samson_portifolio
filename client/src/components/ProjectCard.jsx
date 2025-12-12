import { useState } from "react";

const ProjectCard = ({ title, images, description, features, techStack, demoLink, githubLink }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="project-card my-8 p-5 rounded-lg  text-white">
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col space-y-3 md:w-1/2">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`${title} screenshot`} className="rounded-md" loading="lazy" />
          ))}
        </div>
        <div className="project-info md:w-1/2">
          <p className="text-[1rem] leading-6 mb-3 text-pretty">{description}</p>

          {techStack && (
            <div className="mb-3 flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span key={idx} className="bg-amber-400 text-gray-900 px-2 py-1 rounded font-semibold text-sm">{tech}</span>
              ))}
            </div>
          )}

          {features && features.length > 0 && (
            <div className="mb-3">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-lg">🔥 Features</h4>
                <button
                  className="text-sm text-emerald-400 font-semibold md:hidden"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Hide Text" : "Show More"}
                </button>
              </div>
              {(showMore || window.innerWidth >= 768) && (
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
              )}
            </div>
          )}

          <div className="flex gap-3 mt-3 flex-wrap">
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="button transition">Live Demo</button>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <button className="button3 transition">GitHub</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;