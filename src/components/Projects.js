import React from 'react';

const Projects = () => {
    const projectList = [
        { title: 'Weather App', description: 'The Simple Weather App is a user-friendly web application that allows users to check the current weather and forecasts for any city worldwide.' },
       
    ];

    return (
        <section id="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;