// Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-white rounded h-screen">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Statistique</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Gestion</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Historique</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700">
              <span className="ml-3">Profil</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
