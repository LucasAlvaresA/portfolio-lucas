import { AboutMe } from "@/components/sections/about-me";
import { Experiences } from "@/components/sections/experiences";
import { Footer } from "@/components/sections/footer";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";

export default function Home() {
    return (
        <div className="">
            <main>
                <section>
                    <AboutMe />
                </section>
                <section>
                    <Skills />
                </section>
                <section>
                    <Projects />
                </section>
                <section className="pb-14">
                    <Experiences />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
