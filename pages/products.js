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

                        {productsData.map((product) => (
                            <ProductsCard key={product.id} props={product} />
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

const productsData = [
    {
        id: 0,
        title: 'Healthcare governance',
        iconClasses: 'fas fa-hospital fa-5x primary-color'
    },
    {
        id: 1,
        title: 'Information and Technology',
        iconClasses: 'fas fa-sitemap fa-5x primary-color'
    },
    {
        id: 2,
        title: 'Healthcare Financing',
        iconClasses: 'fas fa-piggy-bank fa-5x primary-color'
    },
    {
        id: 3,
        title: 'Service delivery',
        iconClasses: 'fas fa-people-carry fa-5x primary-color'
    },
    {
        id: 4,
        title: 'Healthcare workforce',
        iconClasses: 'fas fa-user-nurse fa-5x primary-color'
    },
    {
        id: 5,
        title: 'Medicine & Technologies',
        iconClasses: 'fas fa-pills fa-5x primary-color'
    }
];
