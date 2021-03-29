import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import * as StringConstants from './constants/app_strings';
import WorkStyles from '../styles/modules/Work.module.scss';

export default function Work() {
    const [viewport, setViewport] = useState({
        latitude: -1.2879224276460453,
        longitude: 36.78368589113946,
        zoom: 0.1,
        height: '30rem',
        width: '100vw'
    });
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
                                mapboxApiAccessToken="pk.eyJ1IjoiYWJkaS1hZGFuIiwiYSI6ImNrbXVteW9iaTEzNW0ycXBiemlwbmpidjcifQ.I43XBM1HVu-cauLRbdiFVw"></ReactMapGL>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
