import React from 'react';

//login React component
const Login = ({name, email, profilePic}) => {
    return (
        <div class="flex border border-gray-300 min-w-60 rounded-lg items-center space-x-3 p-2">
            <img 
                src={profilePic} 
                alt="Profile" 
                class="w-10 h-10 rounded-full"
            />
            <div class="min-w-0 flex-1">
                <p class="font-semibold truncate">{name}</p>
                <p class="text-sm text-gray-500 truncate">{email}</p>
            </div>
        </div>
    )
}

export default Login;