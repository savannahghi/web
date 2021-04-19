import Image from 'next/image';

export default function TeamModal({ name, title, headshot, bio }) {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header primary-background">
                        <h5 className="modal-title" id="exampleModalLabel">
                            {name}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="team_modal_card">
                            <div className="m-2"></div>
                            <Image
                                src={headshot}
                                alt="Team Member Headshot"
                                className="rounded-circle"
                                width={200}
                                height={200}
                            />
                            <div className="mt-3 card-body text-center">
                                <p>
                                    <strong>{name}</strong>
                                </p>
                                <p>{title}</p>
                                <p>{bio ? bio : 'Bio Not Available yet'}</p>
                            </div>
                            <div className="card-footer text-center">
                                <div>
                                    <a
                                        className="btn btn-primary linkedIn btn-floating mx-2"
                                        href="/"
                                        role="button">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    <a
                                        className="btn btn-primary google btn-floating mx-2"
                                        href="/"
                                        role="button">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a
                                        className="btn btn-primary twitter btn-floating mx-2"
                                        href="/"
                                        role="button">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div
                                data-mdb-dismiss="modal"
                                className="mb-5 mt-3 btn btn-secondary btn-rounded text-capitalize px-5">
                                Close
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
