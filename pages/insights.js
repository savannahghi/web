import NavBar from '../components/navbar';
import TitleBar from '../components/head';

export default function Insights() {
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
                    <code>Insights</code>
                </p>
            </main>
        </div>
    );
}
