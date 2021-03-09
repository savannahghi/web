import NavBar from '../components/navbar';
import TitleBar from '../components/head';

/**
 * This is the root component of the
 */
export default function Home() {
    return (
        <div className="container">
            <div className="navbar">
                <TitleBar />
            </div>

            <main>
                <div className="navbar">
                    <NavBar />
                </div>
                <h1 className="title">Welcome to</h1>

                <p className="description">
                    <code>Savannah Global Health Institute</code>
                </p>
            </main>

            <footer>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer">
                    Powered by <code>Savannah Informatics</code>
                </a>
            </footer>
        </div>
    );
}
