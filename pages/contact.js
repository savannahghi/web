import NavBar from 'components/navbar';
import Footer from 'components/footer';

/**
 * This component is the Contacts page
 */
export default function Contact() {
    return (
        <div>
            <main className="sghi_container">
                <NavBar />

                <main className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="page-title text-center pt-5">
                                <span className="page-title-second">Contact</span> Us
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="">
                                <div className="mb-5">
                                    <form className="p-3">
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                Name
                                            </label>
                                            <input
                                                type="name"
                                                id="form2Example1"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                Email
                                            </label>
                                            <input
                                                type="name"
                                                id="form2Example1"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                Message
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="form4Example3"
                                                rows="4"></textarea>
                                        </div>

                                        <div className="contact-submit-btn ">
                                            <button
                                                type="submit"
                                                className="btn btn-secondary font-weight-bold text-capitalize mb-4">
                                                Submit
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p>Or Reach Out to Us Via Our Social media handles</p>
                                            <button
                                                type="button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <i className="fab fa-facebook-f"></i>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <i className="fab fa-twitter"></i>
                                            </button>

                                            <button
                                                type="button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <i className="fab fa-linkedin-in"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 my-5">
                            <div className="card">
                                <iframe
                                    className="iframe_size"
                                    title="Savannah Informatics Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.810035836058!2d36.781561614168446!3d-1.288136135990082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f109a1500e0b7%3A0xb21ecf1c940de8bf!2sSavannah%20Informatics%20Limited!5e0!3m2!1sen!2ske!4v1616577307308!5m2!1sen!2ske"
                                    width="100%"
                                    height="600"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </main>
            </main>

            <Footer />
        </div>
    );
}
