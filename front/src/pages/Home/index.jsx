import Hero from "../../components/Hero";
import Features from "../../components/Features";
import featuresData from "../../utils/data/featuresData";

function Home() {
    return (
        <main>
            <Hero />
            <section className="features">
                {featuresData.map((data) => (
                    <Features 
                        key={data.id}
                        src={data.src}
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