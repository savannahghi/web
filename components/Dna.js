import Image from 'next/image';
import * as AssetConstants from './constants/app_assets';
import * as StringConstants from './constants/app_strings';
import DNAStyles from '../styles/modules/OurDna.module.scss';

export default function OurDna() {
    return (
        <div id="dna" className={DNAStyles.main}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <p className={DNAStyles.dna_title}>
                            {StringConstants.ourText}
                            <span className={DNAStyles.dna_title_first}>
                                {StringConstants.dnaText}
                            </span>
                            {StringConstants.ourDNATitle}
                        </p>
                    </div>
                </div>
                <div className={DNAStyles.dna_pillars}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.healthProfessionalTeamIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        {StringConstants.dnaContentOne}
                                        <span className={DNAStyles.dna_content_bold}>
                                            {StringConstants.tripleTransition}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.currentLocationIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        {StringConstants.dnaContentTwo}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.companyIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        {StringConstants.dnaContentThree}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 py-3">
                            <div className={DNAStyles.dna_item}>
                                <div className="p-3 align-items-center card">
                                    <div className={DNAStyles.illustration}>
                                        <Image
                                            src={AssetConstants.doctorIllustration}
                                            alt="Our story"
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                    <p className={DNAStyles.dna_content}>
                                        {StringConstants.dnaContentFour}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
