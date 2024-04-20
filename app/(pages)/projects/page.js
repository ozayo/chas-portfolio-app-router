import React from "react";
import projectData from "../../data/projectdata";
import Head from "next/head";
import Cta from "../../../components/Cta";
import NewProjectCard from "../../../components/ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Ozay Chas Portfollio - Projects</title>
      </Head>

      <h1 className="mt-6">My Projects</h1>
      <p className="mb-3 text-sm md:text-base  font-light">
        This portfolio includes only my projects at Chas Academy and some side
        projects.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {projectData.map((project) => (
          <NewProjectCard key={project.id} project={project} />
        ))}
      </div>

      <Cta />
    </>
  );
};

export default ProjectsPage;
