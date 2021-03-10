import NavBar from '../components/navbar';
import TitleBar from '../components/head';

export default function Products() {
    return (
        <div className="container">
            <div className="navbar">
                <TitleBar />
            </div>

            <main>
                <div className="navbar">
                    <NavBar />
                </div>

                <p className="description">
                    <code>Products</code>
                </p>
            </main>
        </div>
    );
}
