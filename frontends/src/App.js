import React, {useState, useEffect} from "react"
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Login from './components/Login';
import Dashboard from "./components/Dashboard";
import NewProjectWindow from "./components/NewProjectWindow";

import profpic from './components/images/default_prof_pic.jpg';

const App = () => {
    //mock user
    const user = {
        name: "John Doe",
        email: "johndoe@gmail.com",
        profilePic: profpic
    }

    //state variable controls whether the new project window is open or closed
    const [isWindowOpen, setIsWindowOpen] = useState(false);

    //projects state variable holds the existing projects
    const [projects, setProjects] = useState([]);

    //searchTerm state variable tracks the text in the searchbar
    const [searchTerm, setSearchTerm] = useState('');

    //useEffect hook allows us to fetch data from the API after every render
    useEffect(() => {
        fetchProjects();
    }, [searchTerm]);

    //function that fetches projects from the backend
    const fetchProjects = async () => {
        try {
            //send a GET request to the backend
            const response = await fetch(`/api/projects/?search=${searchTerm}`);
            if (response.ok) {
                const data = await response.json();
                setProjects(data);
            } else {
                console.error('Failed to fetch projects');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    //this function handles the creation of a new project
    //the function communicates with the Django API in the backend
    const handleCreateProject = async (title) => {
        //create a new project with the given title and current date
        const newProject = {
            title: title,
            date: new Date().toISOString().split('T')[0]
        }

        try {
            //use the POST method to send the new project data to the backend
            const response = await fetch('/api/projects/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProject),
            })

            //if the POST is successful, add the new project to the projects state var
            if (response.ok) {
                const createdProject = await response.json();
                setProjects([...projects, createdProject]);
            } else {
                console.error('Failed to create project');
            }
            //catch errors
        } catch (error) {
            console.error('Error:', error);
        }
    }

    //render the frontend, with all components together
    return (
        <div class="flex h-screen">
            <Sidebar newProject={() => setIsWindowOpen(true)}/>
            <div class="flex-1 flex flex-col">
                <div class="flex items-center border-b border-gray-300">
                    <Searchbar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
                    <div class="mx-7 overflow-visible">
                        <Login {...user}/>
                    </div>
                </div>
                <main class="flex-1 p-3 overflow-auto">
                    <Dashboard projects={projects}/>
                </main>
            </div>
            <NewProjectWindow
                isOpen={isWindowOpen}
                close={() => setIsWindowOpen(false)}
                createProject={handleCreateProject}
            />
        </div>
    )
}

export default App;