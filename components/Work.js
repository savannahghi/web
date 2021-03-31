import { useState } from 'react';
import ReactMapGL, { Layer, Marker, Popup } from 'react-map-gl';
import * as StringConstants from './constants/app_strings';
import WorkStyles from '../styles/modules/Work.module.scss';

const countriesLayer = {
    id: 'country-boundaries',
    type: 'fill',
    source: {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1'
    },
    'source-layer': 'country_boundaries',
    paint: {
        'fill-color': '#c2368c',
        'fill-opacity': 0.8
    },
    filter: ['in', 'iso_3166_1_alpha_3', 'USA', 'GBR', 'ZAF', 'KEN', 'IND', 'SAU', 'NGA']
};

export default function Work() {
    const [viewport, setViewport] = useState({
        latitude: -1.2879224276460453,
        longitude: 36.78368589113946,
        zoom: 0.3,
        height: '30rem',
        width: '100vw'
    });

    const [selectedCountry, setSelectedCountry] = useState(null);

    return (
        <div id="our-work" className={WorkStyles.work}>
            <div className="container">
                <div className="row align-items-center set_gutters">
                    <div className="col-sm-12 col-md-12 text-center">
                        <p className={WorkStyles.work_title}>
                            {StringConstants.ourText}
                            <span className={WorkStyles.work_title_second}>
                                {StringConstants.workText}
                            </span>
                        </p>
                        <p className={WorkStyles.work_subtitle}>{StringConstants.ourWorkContent}</p>
                        <div className={WorkStyles.read_more_btn}>
                            <button className="btn btn-secondary btn-rounded text-capitalize px-5">
                                {StringConstants.readMoreBtnText}
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 py-5">
                        <div className={WorkStyles.map_graphic}>
                            <ReactMapGL
                                className="card iframe_size"
                                {...viewport}
                                onViewportChange={(viewport) => {
                                    setViewport(viewport);
                                }}
                                mapboxApiAccessToken="pk.eyJ1IjoiYWJkaS1hZGFuIiwiYSI6ImNrbXVteW9iaTEzNW0ycXBiemlwbmpidjcifQ.I43XBM1HVu-cauLRbdiFVw">
                                <Layer {...countriesLayer}></Layer>
                                {data.map((country) => (
                                    <Marker
                                        key={country.id}
                                        longitude={country.longitude}
                                        latitude={country.latitude}>
                                        <button
                                            className="marker-btn btn btn-sm btn-secondary text-capitalize"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setSelectedCountry(country);
                                            }}>
                                            <p>{country.name}</p>
                                        </button>
                                    </Marker>
                                ))}
                                {selectedCountry ? (
                                    <Popup
                                        className="marker_popup"
                                        latitude={selectedCountry.latitude}
                                        longitude={selectedCountry.longitude}
                                        onClose={() => {
                                            setSelectedCountry(null);
                                        }}>
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="">
                                                    <img
                                                        className="country-flag"
                                                        src={selectedCountry.flag}
                                                        alt={selectedCountry.name}></img>
                                                </div>
                                            </div>
                                            <div className="col-10">
                                                <div className="country-name mr-1">
                                                    {selectedCountry.name}
                                                </div>
                                            </div>
                                            <hr className="divider"></hr>
                                            <p className="project-title">{selectedCountry.title}</p>
                                            <p className="project-subtitle">Impact</p>
                                            <div className="row">
                                                <div className="col-6">
                                                    <p className="patients ml-auto">
                                                        <span className="project-screens">
                                                            {selectedCountry.screened}
                                                        </span>
                                                        <br></br>
                                                        <span className="project-sub">
                                                            Patients Screened
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="col-6">
                                                    <p className="patients">
                                                        <span className="project-screens">
                                                            {selectedCountry.regions}
                                                        </span>
                                                        <br></br>
                                                        <span className="project-sub">
                                                            Counties attended to
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Popup>
                                ) : null}
                            </ReactMapGL>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        name: 'United States Of America',
        id: 1,
        initials: 'USA',
        'iso-code': 'USA',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: -95.712891,
        latitude: 37.09024
    },
    {
        name: 'United Kingdom',
        id: 2,
        initials: 'UK',
        'iso-code': 'GBR',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: -0.118092,
        latitude: 51.509865
    },
    {
        name: 'South Africa',
        id: 3,
        initials: 'SA',
        'iso-code': 'ZAF',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: 24.6727,
        latitude: -28.4793
    },
    {
        name: 'Kenya',
        id: 4,
        initials: 'KE',
        'iso-code': 'KEN',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: 37.906193,
        latitude: -0.023559
    },
    {
        name: 'India',
        id: 5,
        initials: 'IN',
        'iso-code': 'IND',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: 20.593684,
        latitude: 78.96288
    },
    {
        name: 'Saudi Arabia',
        id: 6,
        initials: 'KSA',
        'iso-code': 'SAU',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: 45.079162,
        latitude: 23.885942
    },
    {
        name: 'Nigeria',
        id: 7,
        initials: 'NG',
        'iso-code': 'NGA',
        flag: '/flags/ke.png',
        title: 'Project Title, Pillar of Focus, AOI',
        screened: '250,000 +',
        regions: '38 +',
        longitude: 8.675277,
        latitude: 9.081999
    }
];
