import * as StringConstants from '../components/constants/app_strings';

export default function ProductsCard() {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card p-3">
                <i className="fas fa-heartbeat fa-5x primary-color"></i>
                <div className="card-body">
                    <p className="card-text">{StringConstants.productsPlaceholderContent}</p>
                    <a
                        href="#!"
                        className="d-block my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                        {StringConstants.viewMoreBtnText}
                    </a>
                </div>
            </div>
        </div>
    );
}
