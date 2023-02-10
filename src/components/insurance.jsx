import React from "react";
import './insurance.css'
import { Link } from "react-router-dom";
import cardData from './card-data.json'
import Pmfby from "./pmfbyInsurance";
import ReviewsForInsurance from "./reviewInsurance";

function Insurance() {
    return (
        <div className="main-container">
            <div className="container">
                <div className="insu-head text-center">
                    <h3>Insurance made easy.</h3>
                    <p>Knowledge. Stories. Tips.</p>
                </div>
                <div className="row card-Details ">
                    {cardData.map(cards => {
                        const { id, image, card_title, card_text, postdate } = cards
                        return (
                            <div className="col-sm-12 col-lg-4 card " key={id} >
                                <img src={image} alt='' />
                                <div className="card-body">
                                    <h6 className="card_title1">{card_title}</h6>
                                    <p className="card-text">{card_text}</p>
                                    <span id="blog1_postdate" className="date">{postdate}</span>
                                </div>
                            </div>
                        )
                    })}
                    <div className="article-btn">
                        <div className="more-article-btn">
                            <Link to='/ArticleBtn' className="moreArticles">Read More Articles</Link>
                            {/* <button type="button">Read More Articles</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="pmfby-comp">
                <Pmfby />
            </div>
            <div className="review">
                <ReviewsForInsurance />
            </div>
        </div>
    )
}
export default Insurance;
