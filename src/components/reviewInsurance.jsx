import React from "react";
import './insurance.css'
import ReviewData from './review-insurance.json'

function ReviewsForInsurance() {
    return (
        
        <div className="container">
            <div className="review-slider-main">
                
                <div className="row">
                
                    <div className="col-md-6 ">
                        <div className="review-slider-content">
                            {/* <div className="review-comment"> */}
                            <h2 className="review-head">A happy you, makes a happy us</h2>
                            {/* </div> */}
                            
                            {ReviewData.map((item) => {
                                return (
                                   
                                    <div className="slider-contxt" key={item.id} >
                                       
                                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                            <div className="carousel-inner"  >
                                                <div className="carousel-item active"  >
                                                    <div className="review-content-blog"  >
                                                        <div className="review-img-icon">
                                                            <img src={item.review_img} alt="" width="100px" />
                                                        </div>
                                                        <h5 className="slide-head">{item.review_persion_name}</h5>
                                                        <div className="slide-text">
                                                            <p>{item.review_discriotion}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                        {/* <div className="contaner">
                        <div className="review-comment">
                            <h4 className="review-head">A happy you, makes a happy us</h4>
                        </div>
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div class="pmfby-content-block">
                                        <div className="row">
                                            <div className="pmfby-img-icon">
                                                <img src={review_img} alt="" width="100px" />
                                            </div>
                                            <h5 className="slide-head">{review_persion_name}</h5>
                                            <div className="slide-text">
                                                <p>Dear Policyholders,</p>
                                                <p>{review_discriotion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                        {/* <div className="carousel-item">
                                    <div className="pmfby-content-block">
                                        <div className="row">
                                            <div className="pmfby-img-icon">
                                                <img src="/cyber-fraud-icon-transformed.png" alt="" width="100px" />
                                            </div>
                                            <h2 className="slide-head">Fraud awareness</h2>
                                            <div className="slide-text">
                                                <p>Dear Policyholders,</p>
                                                <p>Motor Policy issued can be verified by scanning the QR Code available on the policy document.
                                                    In case of discrepancy immediately email to
                                                    <a href="javascript:void"><strong>customersupport@icicilombard.com</strong></a>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="pmfby-content-block">
                                        <div className="row">
                                            <div className="pmfby-img-icon">
                                                <img src="/cyber-fraud-icon-transformed.png" alt="" width="100px" />
                                            </div>
                                            <h2 className="slide-head">Fraud awareness</h2>
                                            <div className="slide-text">
                                                <p>Dear Policyholders,</p>
                                                <p>Motor Policy issued can be verified by scanning the QR Code available on the policy document.
                                                    In case of discrepancy immediately email to
                                                    <a href="javascript:void"><strong>customersupport@icicilombard.com</strong></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                    //             </div> */}
                        {/* //         </div>
                    //     </div>
                    // </div> */}
                    </div>

                    <div className="col-md-6">
                        <div className="award-box1">
                            {/* <div className="award-head"> */}
                            <h2 className="award-head" >Awards & recognition</h2>
                            {/* </div> */}
                            <div className="award-blog1">
                            <div className="row">
                               
                                    <div className="col-xs-12 col-lg-4">
                                        <img src="./img/motor-insurance-icon.png" alt="" width="200px" height='150px' />
                                    </div>
                                    <div className="col-xs-12 col-lg-8">
                                        <div className="superbrand-cust">
                                            <h6>Voted General Insurance Superbrand by Consumers</h6>
                                            <p>Being awarded as a Superbrand is a testimony of our customer-centric
                                                approach in providing insurance solutions, while delivering on our promise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="award-box2">
                            {/* <div className="award-head">
                            <h4>Awards and recognition</h4>
                        </div> */}
                         <div className="award-blog2">
                            <div className="row">
                                {/* <div className="award-blog2"> */}
                                    <div className="col-xs-12 col-lg-4 ">
                                        <img src="./img/motor-insurance-icon.png" alt="" width="200px" height="150px" />
                                    </div>
                                    <div className="col-xs-12 col-lg-8">
                                        <div className="superbrand-cust">
                                            <h6>Triple Accolades at FICCI Awards </h6>
                                            <p>Our ‘AI-enabled vehicle inception facility’
                                                won us the FICCI Awards in the ‘Most Innovative Insurance Offerings’ category.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsForInsurance;
