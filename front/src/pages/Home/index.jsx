// Importation des composants
import Hero from "../../components/Hero";
import Features from "../../components/Features";

// Importation des utilitaires
import featuresData from "../../utils/data/featuresData";

// Importation des assets
import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";

function Home() {

    // Création d'un objet contenant les chemins des différentes icônes
    const imageData = {
        "iconChat": iconChat,
        "iconMoney": iconMoney,
        "iconSecurity": iconSecurity
    }

    return (
        <main>
            <Hero />
            <section className="features">
                {/* Mapping des data pour afficher chaque composant features */}
                {featuresData.map((data) => (
                    <Features 
                        key={data.id}
                        src={imageData[data.src]}
                        alt={data.alt}
                        title={data.title}
                        description={data.description}
                    />
                ))}
            </section>
        </main>
    )
}

export default Home