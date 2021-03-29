import TitleBar from '../components/TitleBar';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import ProductsCard from 'components/ProductsCard';
import * as StringConstants from 'components/constants/app_strings';

/**
 * This component is the Products page
 */
export default function Products() {
    const titleProps = {
        title: 'Our Products'
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

                <div className="container">
                    <div className="row py-5 px-5">
                        <div className="col-12 my-3">
                            <p className="page-title text-center">
                                {StringConstants.ourText}
                                <span className="page-title-second">
                                    {StringConstants.productsPageTitle}
                                </span>
                            </p>
                        </div>

                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                        <ProductsCard />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
