import { AboutMe } from "@/components/sections/about-me";
import { Clients } from "@/components/sections/clients";
import { Experiences } from "@/components/sections/experiences";
import { Footer } from "@/components/sections/footer";
import { GameDev } from "@/components/sections/game-dev";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
    return (
        <div>
            <main>
                <section id="about-me" aria-label="About Me">
                    <AboutMe />
                </section>
                <section id="skills" aria-label="Skills">
                    <Skills />
                </section>
                <section id="projects" aria-label="Projects">
                    <Projects />
                </section>
                <section id="experiences" aria-label="Experiences">
                    <Experiences />
                </section>
                <section id="clients" aria-label="Clients">
                    <Clients />
                </section>
                <section
                    id="game-dev"
                    aria-label="Game Development"
                    className="pb-14"
                >
                    <GameDev />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
