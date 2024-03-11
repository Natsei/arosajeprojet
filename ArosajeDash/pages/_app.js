// pages/_app.js
import '../styles/tailwind.css'; // Assurez-vous d'ajuster le chemin en fonction de l'emplacement réel de votre fichier CSS

// Cette fonctionnalité est standard dans Next.js 9.3 et supérieur
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
