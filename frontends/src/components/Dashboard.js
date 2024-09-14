import React from 'react';
import ProjectTile from './ProjectTile';

//main dashboard React component for displaying project tiles
//takes an array of project components and displays them in a scrollable grid fashion
const Dashboard = ({projects}) => {
    return (
        <div class="p-6">
            <h1 class="text-2xl font-bold mb-6">All Projects</h1>
            <div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {/* creates a project tile for every project in the projects array */}
                {projects.map((project) => {
                    return (
                        <ProjectTile key={project.id} title={project.title} date={project.date}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Dashboard;