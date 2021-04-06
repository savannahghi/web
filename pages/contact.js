import { useForm } from 'react-hook-form';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import NavBar from 'components/Navbar';
import Footer from 'components/Footer';
import TitleBar from '../components/TitleBar';
import * as StringConstants from '../components/constants/app_strings';

const ReactMapGL = dynamic(import('react-map-gl'), { loading: () => 'Loading Map...' });
const Marker = dynamic(() => import('react-map-gl').then((mod) => mod.Marker));
const Popup = dynamic(() => import('react-map-gl').then((mod) => mod.Popup));

/**
 * This component is the Contacts page
 */
export default function Contact() {
    const [viewport, setViewport] = useState({
        latitude: -1.2879224276460453,
        longitude: 36.78368589113946,
        zoom: 15,
        height: '30rem',
        width: '100rem'
    });

    const { register, handleSubmit, errors, reset } = useForm();

    const [selectedLocation, setSelectedLocation] = useState(null);

    async function onSubmitForm(values) {
        let config = {
            method: 'post',
            url: `http://localhost:3000/api/contact`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { values }
        };

        try {
            const response = await axios(config);
            if (response.status == 200) {
                console.log('Successful');
                reset();
            }
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }

    const titleProps = {
        title: 'Contact Us'
    };

    return (
        <div>
            <TitleBar props={titleProps} />

            <main className="sghi_container">
                <NavBar props={titleProps} />

                <main className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="page-title text-center pt-5">
                                <span className="page-title-second">
                                    {StringConstants.contactPageTitle}
                                </span>
                                {StringConstants.usText}
                            </p>
                        </div>

                        <div className="col-12">
                            <div className="">
                                <div className="mb-5">
                                    <form
                                        onSubmit={handleSubmit(onSubmitForm)}
                                        method="post"
                                        className="p-3">
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                {StringConstants.nameLabel}
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                ref={register({
                                                    required: {
                                                        value: true,
                                                        message: `${StringConstants.nameRequiredPrompt}`
                                                    }
                                                })}
                                                id="form2Example1"
                                                className="form-control"
                                            />
                                            <span className="error_message">
                                                {errors?.name?.message}
                                            </span>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                {StringConstants.emailLabel}
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                ref={register({
                                                    required: {
                                                        value: true,
                                                        message: `${StringConstants.emailRequiredPrompt}`
                                                    },
                                                    minLength: {
                                                        value: 8,
                                                        message: `${StringConstants.emailIsShortPrompt}`
                                                    },
                                                    maxLength: {
                                                        value: 120,
                                                        message: `${StringConstants.emailIsLongPrompt}`
                                                    },
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: `${StringConstants.invalidEmailPrompt}`
                                                    }
                                                })}
                                                id="form2Example1"
                                                className="form-control"
                                            />
                                            <span className="error_message">
                                                {errors?.email?.message}
                                            </span>
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label" htmlFor="form2Example1">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                ref={register({
                                                    required: {
                                                        value: true,
                                                        message: `${StringConstants.messageRequiredPrompt}`
                                                    },
                                                    minLength: {
                                                        value: 50,
                                                        message: `${StringConstants.messageIsShortPrompt}`
                                                    },
                                                    maxLength: {
                                                        value: 1000,
                                                        message: `${StringConstants.messageIsLongPrompt}`
                                                    }
                                                })}
                                                className="form-control"
                                                id="form4Example3"
                                                rows="4"></textarea>
                                            <span className="error_message">
                                                {errors?.message?.message}
                                            </span>
                                        </div>

                                        <div className="contact-submit-btn ">
                                            <button
                                                aria-label="Submit Button"
                                                type="submit"
                                                className="btn btn-secondary font-weight-bold text-capitalize mb-4">
                                                {StringConstants.submitBtnText}
                                            </button>
                                        </div>

                                        <div className="text-center">
                                            <p>{StringConstants.reachOutPrompt}</p>
                                            <button
                                                type="button"
                                                aria-label="LinkedIn Button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <a
                                                    target="_blank"
                                                    aria-label="LinkedIn"
                                                    href="https://www.linkedin.com/company/savannahglobalhealth"
                                                    rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </button>

                                            <button
                                                type="button"
                                                aria-label="Twitter Button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <a
                                                    target="_blank"
                                                    aria-label="Twitter"
                                                    href="https://twitter.com/SGHI76989573"
                                                    rel="noopener noreferrer">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </button>

                                            <button
                                                type="button"
                                                aria-label="Facebook Button"
                                                className="btn btn-lg btn-secondary btn-floating mx-1">
                                                <a
                                                    target="_blank"
                                                    aria-label="Facebook"
                                                    href="https://fb.me/SavannahGlobalHealth"
                                                    rel="noopener noreferrer">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-5">
                            <ReactMapGL
                                className="card iframe_size"
                                {...viewport}
                                onViewportChange={(viewport) => {
                                    setViewport(viewport);
                                }}
                                mapboxApiAccessToken="pk.eyJ1IjoiYWJkaS1hZGFuIiwiYSI6ImNrbXVteW9iaTEzNW0ycXBiemlwbmpidjcifQ.I43XBM1HVu-cauLRbdiFVw">
                                <Marker
                                    latitude={-1.2879224276460453}
                                    longitude={36.78368589113946}>
                                    <div className="row">
                                        <i className="fas fa-map-marker-alt fa-3x primary-color"></i>
                                        <button
                                            aria-label="Location Marker Button"
                                            className="contact-marker-btn btn btn-sm btn-secondary text-capitalize mt-2"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedLocation(true);
                                            }}>
                                            {StringConstants.locationTitle}
                                        </button>
                                    </div>
                                </Marker>
                                {selectedLocation ? (
                                    <Popup
                                        className="marker_popup"
                                        latitude={-1.2879224276460453}
                                        longitude={36.78368589113946}
                                        onClose={() => {
                                            setSelectedLocation(null);
                                        }}>
                                        <div className="marker_popup">
                                            <div className="row p-3">
                                                <div className="country-name">
                                                    {StringConstants.directionsTitle}
                                                </div>
                                                <hr className="divider"></hr>
                                            </div>
                                        </div>
                                    </Popup>
                                ) : null}
                            </ReactMapGL>
                        </div>
                    </div>
                </main>
            </main>

            <Footer />
        </div>
    );
}
