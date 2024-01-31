import axios from 'axios';

interface City {
    code_postal: string;
    nom_commune: string;
    distance: number;
  }

class Map {

    /**
     * Retourne la liste des villes voisines à la ville donnée, dans un rayon donné
     * @param cp code postal de la ville de base
     * @returns 
     */
    static async getVillesVoisines(cp : string, rayon : number) {
        
        var villesVoisines;
        try {
        
            // Faire la requête à l'API externe
            const response = await axios.get(`https://www.villes-voisines.fr/getcp.php?cp=${cp}&rayon=${rayon}`);
            console.log(response);
            // Récupérer les données de la réponse
            villesVoisines = response.data.map((city: City) => city.code_postal);

            
        } catch (error) {
            console.error('Erreur lors de la récupération des villes voisines :', error);
        }

        return villesVoisines;
    }
}



export default Map;