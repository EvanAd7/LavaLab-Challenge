import React from 'react';
import {Home, User, Users, Archive, Trash, Plus} from 'lucide-react';
import logo from './images/aro_logo.png';

//sidebar React component
//logo implemented in first div
//sidebar items can be implemented as needed using SidebarItem component
//new project button at bottom
const Sidebar = ({newProject}) => {
    return (
        <div class="w-64 border-r border-gray-300 h-screen bg-gray-200 text-indigo-800 flex flex-col">
            <div class="flex p-5">
                <img 
                    src={logo} 
                    alt="Aro" 
                    class="mx-auto h-8"
                />
            </div>
            <nav class="flex-grow">
                <SidebarItem icon={<Home size={20}/>} text="All projects"/>
                <SidebarItem icon={<User size={20}/>} text="Your projects"/>
                <SidebarItem icon={<Users size={20}/>} text="Shared with you"/>
                <SidebarItem icon={<Archive size={20}/>} text="Archived"/>
                <SidebarItem icon={<Trash size={20}/>} text="Trash"/>
            </nav>
            <button 
                class="my-8 items-center flex mx-10 rounded-lg bg-indigo-800 text-white hover:bg-gray-400 transition-colors duration-200"
                onClick={newProject}
                >
                <SidebarItem icon={<Plus size={20}/>} text="New"/>
            </button>
        </div>
    )
}

//React component which is an item in the sidebar
const SidebarItem = ({icon, text}) => {
    return(
        <div class="flex mx-10 items-center p-2 hover:bg-gray-400 transition-colors duration-200 rounded-lg">
            {icon}
            <span class="ml-4 text-base">{text}</span>
        </div>
    )
}

export default Sidebar;