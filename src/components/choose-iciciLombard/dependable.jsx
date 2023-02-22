import React from 'react'
import './choose-il.css'
import Insurance from '../insurance-card/insurance';
import TakeCareApp from './take-care-app';
import { Link } from 'react-router-dom';

const Dependable = () => {
    return (
        <div className="first_dependable">
            <div className="container dependable-content">
                <div className='main-head text-center'>
                    <h2>Why choose ICICI Lombard?</h2>
                </div>
                <div className='row dependable-row'>
                    <div className='col-lg-6'>
                        <h1 className='dependable-h1'>Dependable</h1>
                        <div className='dependable-text'>
                                <h6>You can rely on us at all times.</h6>
                                <p>Be it during large calamities like Odisha cyclone or minor accidents like a broken tail-light,
                                    we have always stood by our customers in time of need. We have repeatedly introduced
                                    industry-leading practices for nearly two decades . So, in times of trouble, be assured,
                                    we’ve got your back. We stand by our motto: <span style={{ color:'black' }}>“Nibhaye Vaade”.</span></p>
                           
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='dependable-img'>
                            <img src='/img/dependable.png' alt='' />
                        </div>
                    </div>
                </div>
                {/* aproachable */}
                <div className='aproachable'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='aproachable-img'>
                                <img src='/img/aproachable.png' alt='' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <h1 className='aproachable-h1'>Aproachable</h1>
                            <div className='aproachable-text'>
                                    <h6>You've got a friend in us.</h6>
                                    <p>Value of insurance is realised when you make a claim. In your hour of need,
                                        be it a major surgery or a broken car, you need more than just claim support.
                                        Our team comprises highly trained professionals and functional experts to guide you through
                                        the right course of actionduring emergencies. So, don’t hesitate. Any questions you have or
                                        any help you need - just reach out to us.</p>
                            </div>
                            <div className='greaterthan-btn'>
                                <span style={{color:"black"}}>We are available where you are.</span>
                                <ul className='collaps-btn'>
                                    <li><i className='fas fa-greater-than' style={{fontSize:'13px', margin:'13px', color:'black'}}></i>Call center</li>
                                    <li><i className='fas fa-greater-than' style={{fontSize:'13px', margin:'13px', color:'black'}}></i>Char</li>
                                    <li><i className='fas fa-greater-than' style={{fontSize:'13px', margin:'13px', color:'black'}}></i>286 branches</li>    
                                </ul>
                                <span style={{marginLeft:'40%',fontSize:'14px'}}>(As on June 30, 2022)</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* transparent */}
                <div className='transparent'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1 className='transparent-h1'>Transparent</h1>
                            <div className='transparent-text'> 
                                    <h6>We give you the power of clarity.</h6>
                                    <p>Insurance products are designed and priced through complicated mathematical models. 
                                        But we strive to explain the extent of coverage to you in a simple manner. 
                                        From policy issuance to claims, you can count on us for keeping it simple.
                                         We have always gone the extra mile to make things clear, right from pre-sales to claims support.</p>
                            </div>
                            <div className='more-transparent'>
                                <h6>Have ideas to make us more transparent? <Link className="feedback-detail" to='/feedback' style={{color:'orange'}}> write to us</Link></h6>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='transparent-img'>
                                <img src='/img/transparent.png' alt='' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='conteiner-fluid' >
                <TakeCareApp />
            </div>
            <div className=''></div>
            <Insurance />
        </div>
    )
}

export default Dependable;



