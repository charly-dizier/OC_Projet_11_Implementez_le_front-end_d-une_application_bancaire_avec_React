import Hero from "../../components/Hero";
import Features from "../../components/Features";
import featuresData from "../../utils/data/featuresData";

import iconChat from "../../assets/icons/icon-chat.webp";
import iconMoney from "../../assets/icons/icon-money.webp";
import iconSecurity from "../../assets/icons/icon-security.webp";

function Home() {

    const imageData = {
        "iconChat": iconChat,
        "iconMoney": iconMoney,
        "iconSecurity": iconSecurity
    }

    return (
        <main>
            <Hero />
            <section className="features">
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