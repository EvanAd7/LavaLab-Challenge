import React, {useState} from 'react';

//new project submission window component
const NewProjectWindow = ({isOpen, close, createProject}) => {
    //declare a state variable 'projectTitle' set to an initially empty string
    //with the state hook, the component can remember the submitted project title 
    const [projectTitle, setProjectTitle] = useState('');

    //on submit of the form, we prevent the default submission behavior (we have more operations to do beyond default)
    //if the project title is not empty, we can create the new project, clear the title state var, and close the window
    const handleSubmit = (e) => {
        e.preventDefault();
        if (projectTitle.trim()) {
            createProject(projectTitle);
            setProjectTitle('');
            close();
        }
    }

    //if the window is not open, the component should not render
    if (!isOpen) 
        return null;

    //if the window is open, render the form
    return (
        <div class="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div class="bg-white p-6 rounded-lg">
                <h1 class="text-xl font-bold mb-4">Create New Project</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.target.value)}
                        placeholder="Project Title"
                        class="w-full p-2 border border-gray-300 rounded mb-4"
                    />
                    <div class="flex justify-end">
                        <button
                            type="button"
                            onClick={close}
                            class="mr-2 px-4 py-2 text-gray-600 hover:text-red-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="px-4 py-2 bg-indigo-800 text-white rounded hover:bg-gray-400"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewProjectWindow;