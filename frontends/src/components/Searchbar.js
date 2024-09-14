import React from 'react';
import {Search} from 'lucide-react';

//searchbar React component
const Searchbar = ({searchTerm, onSearchChange}) => {
    return (
        <div class="w-full mx-auto p-5">
            <div class="relative">
                <input
                    type="text"
                    placeholder="Search in Aro"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                />
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search class="h-5 w-5 text-gray-400" />
                </div>
            </div>
        </div>
    )
}

export default Searchbar;