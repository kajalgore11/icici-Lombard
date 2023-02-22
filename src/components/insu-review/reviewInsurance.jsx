import React from "react";
import './Insurance.css'
import ReviewData from './review-insurance.json'

function ReviewsForInsurance() {
    return (
        <div className="container">
            <div className="review-slider-main">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="review-slider-content">
                            <h2 className="review-head">A happy you, makes a happy us</h2>
                            {/*  */}
                             <div className="slider-contxt">
                                        <div id="carouselExampleSlidesOnly" data-bs-ride="carousel"   >
                                            <div className="carousel-inner">
                                                <div className="carousel-item active" >
                                                    <div className="review-content-blog"  >
                                                        <div className="review-img-icon">
                                                            <img src="./img/profile-icon-male.png" alt="" width="60px" />
                                                        </div>
                                                        <h5 className="slide-head">Krishna Patel</h5>
                                                        <div className="slide-text">
                                                            <p>Bought the ICICI Lombard travel insurance for my urgent trip to Europe this summer.
                                                                 I got my policy certificatewithin minutes. Simple, easy to follow, digital purchase process. 
                                                                 Good work!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item " >
                                                    <div className="review-content-blog"  >
                                                        <div className="review-img-icon">
                                                            <img src="./img/profile-icon-male.png" alt="" width="60px" />
                                                        </div>
                                                        <h5 className="slide-head"> Sagar Singh</h5>
                                                        <div className="slide-text">
                                                            <p>The cashless hospitalisation feature is really useful.
                                                                 My wife's emergency surgery was completed with absolutely no delays. 
                                                                The network hospital attended to her immediately and admitted her on priority. 
                                                                Thanks guys!</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="carousel-item " >
                                                    <div className="review-content-blog"  >
                                                        <div className="review-img-icon">
                                                            <img src="./img/female-icon.webp" alt="" width="60px" />
                                                        </div>
                                                        <h5 className="slide-head"> Arti Navelkar</h5>
                                                        <div className="slide-text">
                                                            <p>Loved the easy, digital claims process, had to just upload images of my damaged car to register my claim.
                                                                 The claims advisor (Mr. Aakash Dhume) was very friendly and helped me dedicatedly in settling the claim.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            {/* {ReviewData.map((item) => {
                                return (
                                    <div className="slider-contxt" key={item.id} >
                                        <div id="carouselExampleSlidesOnly" data-bs-ride="carousel"   >
                                            <div className="carousel-inner">
                                                <div className="carousel-item active"  >
                                                    <div className="review-content-blog"  >
                                                        <div className="review-img-icon">
                                                            <img src={item.review_img} alt="" width="60px" />
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
                            } */}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="award-box1">
                            <h2 className="award-head" >Awards & recognition</h2>
                            <div className="award-blog1">
                                <div className="row">
                                    <div className="col-xs-12 col-lg-4">
                                        <img src="./img/award-superBrand.webp" alt="" width="200px" height='150px' />
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
                            <div className="award-blog2">
                                <div className="row">
                                    <div className="col-xs-12 col-lg-4 ">
                                        <img src="./img/FICCI-Awards.webp" alt="" width="200px" height="150px" />
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
