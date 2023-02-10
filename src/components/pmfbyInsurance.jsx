import React from "react"
import './insurance.css'

function Pmfby() {
    return (
        <div className="container-fluid  cont-pmfby">
            <div className="row pmfby-insurance">
                <div className="col-md-6 column1" >
                    <div className="row">
                        <div className="col-sm-4 blog1">
                            <img src="./img/farmer-insurance.jfif" width="100px" />
                        </div>
                        <div className="col-sm-8 blog2" >
                            <h6 className="pmfby-head">PMFBY</h6>
                            <p className="pmfby-text">The PMFBY was launched in 2016 and replaces all the prevailing yield insurance schemes in India.
                                The scheme has extended coverage under localized risks, post-harvest losses etc.
                                and aims at adoption of technology for the purpose of yield estimation.
                                Through increased farmer awareness and low farmer premium rates the scheme aims at increasing
                                the crop insurance penetration in India. </p>
                        </div>
                    </div>
                </div>
                {/* pmfy 2 */}
                <div className="col-md-6 ">
                    <div className="contaner">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="pmfby-content-block">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="pmfby-img-icon">
                                                    <img src="./img/cyber-fraud-icon-transformed.png" alt="" width="100px" />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <h2 className="slide-head">Fraud awareness</h2>
                                                <div className="slide-text">
                                                    <p>Dear Policyholders,</p>
                                                    <p>All claims are processed as per the respective policy terms &amp; conditions.
                                                        If anyone demands money for processing claim please do not pay, report it us on
                                                        <a href="/"><strong>fraudinfo@icicilombard.com</strong></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="pmfby-content-block">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="pmfby-img-icon">
                                                    <img src="./img/cyber-fraud-icon-transformed.png" alt="" width="100px" />
                                                </div>
                                            </div>
                                            <div className="col-sm-8">
                                                <h2 className="slide-head">Fraud awareness</h2>
                                                <div className="slide-text">
                                                    <p>Dear Policyholders,</p>
                                                    <p>Motor Policy issued can be verified by scanning the QR Code available on the policy document.
                                                        In case of discrepancy immediately email to
                                                        <a href="/"><strong>customersupport@icicilombard.com</strong></a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Pmfby;