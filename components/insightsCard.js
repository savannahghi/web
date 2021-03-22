import * as StringConstants from '../components/constants/app_strings';

export default function InsightCard() {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card sghi-card">
                <img
                    src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                        {StringConstants.insightsCardTitle}
                    </h5>
                    <p className="card-text">{StringConstants.insightsCardContent}</p>
                    <a
                        href="#!"
                        className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                        {StringConstants.viewMoreBtnText}
                    </a>
                </div>
            </div>
        </div>
    );
}
