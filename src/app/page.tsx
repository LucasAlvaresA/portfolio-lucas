import { AboutMe } from "@/components/about-me";
import { Footer } from "@/components/footer";
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
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
