"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Crunchwork Project Management APP",
    description: `
    Crunchwork is an end-to-end project management platform can be configured for any industry. It is a microservices-based application using Docker and Kubernetes containers deployed to AWS and Azure based on the clients’ demands. The platform mainly focuses on insurance industry currently, which has couples of extensions to help insurance company better manage their claims.
    `,
    image: "/projectImgs/crunchwork2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://codafication.com/",
  },
  {
    id: 2,
    title: "Estate Website",
    description: `
    A Modern Real Estate Marketplace Web APP with jwt authentication and redux toolkit.
    Using the MERN stack - MongoDB, Express.js, React, and Node.js
    <br><strong>🔑 Advanced Authentication:</strong> Implement JWT, Firebase, and Google OAuth for secure and seamless user access,
    <br><strong>🏡 Real-world CRUD Operations:</strong> Create, read, update, and delete property listings using MongoDB.
    <br><strong>💡 User-friendly Features:</strong> Enhance the user experience with image uploads, property listing management, and more.
    <br><strong>🚀 Advanced Search Functionality:</strong> Implement cutting-edge search features to help users find what they're looking for.
  `,
    // image: "/images/projects/2.png",
    image: ["/projectImgs/estate1.png"],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Zhiyuan95/estate-app",
    previewUrl: "http://zane-real-estate.onrender.com/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: `this eCommerce website 100% responsive for tablet and mobile devices. Also, it’s optimized best for SEO",
    <br>🌐 The website was created with WordPress and WooCommerce, incorporating essential plugins like Stripe Gateway, Sucuri Security, and UpdraftPlus. 
    <br>📖 Formik was employed for a dynamic user request form. 
    <br>🖥️ Implemented SEO to boost search engine rankings, optimizing keywords, meta tags, content, and page speed. 
    <br>📊  Utilized Google Analytics for traffic analysis and user behavior insights.`,
    image: "/projectImgs/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://iaqdirect.com.au/",
  },
  {
    id: 4,
    title: "IECL Official Website",
    description:
      "IECL's official website mainly showcases the services they offer, as well as providing online real-time Q&A, and also features an e-commerce function that sells a number of products related to the Mould Cleanup.",
    image: "/projectImgs/serviceweb.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Personal Portfolio Next.js",
    description: "Authentication and CRUD operations",
    image: "/projectImgs/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
