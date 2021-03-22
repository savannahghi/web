import NavBar from 'components/navbar';
import Footer from 'components/footer';
import ProductsCard from 'components/productsCard';
import * as StringConstants from 'components/constants/app_strings';

/**
 * This component is the Products page
 */
export default function Products() {
    return (
        <div>
            <main className="sghi_container">
                <NavBar />

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
