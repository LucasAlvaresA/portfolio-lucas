import { AboutMe } from "@/components/about-me";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

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
