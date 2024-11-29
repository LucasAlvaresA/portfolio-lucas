import { AboutMe } from "@/components/about-me";
import { Footer } from "@/components/footer";

export default function Home() {
    return (
        <div className="">
            <main>
                <section>
                    <AboutMe />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
