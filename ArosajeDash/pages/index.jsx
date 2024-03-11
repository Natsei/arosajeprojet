import React from 'react';
import Sidebar from '../components/sidebar'; // Assurez-vous que le chemin d'importation est correct
import Users from '../components/users';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden p-3.5"> 
        <header className="w-full"> 
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-200 rounded-5xl p-2.5">
        <h1 className="text-xl font-semibold text-gray-700 text-center py-4">Dashboard Admin</h1>
          <div className="container mx-auto px-6 py-8">
            {/* Statistiques et cartes */}
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className='overflow-hidden flex-1 p-4 bg-white shadow rounded-5xl w-2/3 max-h-[500px]'>
                <Users />
              </div>
              {/* Carte de botanistes */}
              {/* Répétez la structure de la carte pour les autres catégories */}
            </div>
            {/* Autres sections du tableau de bord */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
