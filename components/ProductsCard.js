import * as StringConstants from './constants/app_strings';

export default function ProductsCard({ props }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card p-3">
                <i className={props.iconClasses}></i>
                <div className="card-body">
                    <h5 className="">{props.title}</h5>
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
