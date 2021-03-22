import Image from 'next/image';
import Link from 'next/link';
import * as StringConstants from '../components/constants/app_strings';

export default function InsightCard({ props }) {
    // console.log(props);
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="card sghi-card">
                <Image
                    src={
                        props.feature_image
                            ? props.feature_image
                            : 'https://mdbootstrap.com/img/new/standard/nature/184.jpg'
                    }
                    alt="Post Image"
                    width={300}
                    height={300}
                />

                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">{props.excerpt}</p>
                    <Link href={`/posts/${props.slug}`}>
                        <a
                            href="#!"
                            className="my-3 btn btn-secondary btn-rounded text-capitalize px-5">
                            {StringConstants.viewMoreBtnText}
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
