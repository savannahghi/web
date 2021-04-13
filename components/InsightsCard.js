import Image from 'next/image';
import Link from 'next/link';
import * as StringConstants from './constants/app_strings';

export default function InsightCard({ props }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card my-3">
                <Image
                    src={props.feature_image ? props.feature_image : '/images/placeholder.svg'}
                    alt="Post Image"
                    width={200}
                    height={200}
                />

                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.excerpt.slice(0, 110)}...</p>
                    <p className="card-text font-weight-bold">{props.reading_time} minute read</p>
                    <Link href={`/posts/${props.slug}`}>
                        <a className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                            {StringConstants.viewMoreBtnText}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
