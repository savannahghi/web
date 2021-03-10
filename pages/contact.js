import NavBar from '../components/navbar';
import TitleBar from '../components/head';

export default function Contacts() {
    return (
        <div className="container">
            <TitleBar />

            <main>
                <div className="navbar">
                    <NavBar />
                </div>
                <h1 className="title">Welcome to</h1>

                <p className="description">
                    <code>Contacts</code>
                </p>
            </main>
        </div>
    );
}
