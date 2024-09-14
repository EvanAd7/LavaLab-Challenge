import React from 'react';
import {FileText} from 'lucide-react';

//project tile React component
const ProjectTile = ({title, date}) => {
    return (
        <div class="bg-white border border-gray-300 p-5 rounded-lg hover:shadow-md transition-shadow duration-200">
            <div class="rounded-lg bg-gray-300 p-8 mb-3">
                <FileText class="mx-auto h-12 w-12 text-indigo-800"/>
            </div>
            <h1 class="text-xl font-semibold mb-2">{title}</h1>
            <p class="text-sm text-gray-400">{date}</p>
        </div>
    )
}

export default ProjectTile;