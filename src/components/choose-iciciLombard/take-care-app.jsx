import React from 'react'
import { Link } from 'react-router-dom';

const TakeCareApp = () => {
    return (
        <div className='takeCare'>
            <div className='container-fluid' style={{ backgroundColor: '#00305b' }}>
                <div className='container' style={{ color: 'white' }}>
                    <div className='takeCare-blue' >
                        <div className='row'>
                            <div className='col-md-5'>
                                <div className='take-img'>
                                    <img src='/img/il-take-care-mob.png' alt='' />
                                </div>
                            </div>
                            <div className='col-md-7'>
                                <div className='takeCareMob'>
                                    <h1>Experience insurance on the go with our IL Take Care app.</h1>
                                    <p>Policy purchase, claim initiation, policy renewal, mobile self-inspection
                                        for expired policy - we've got all you need at your fingertips.</p>
                                </div>
                                <div className='takeCare-readMore'>
                                    <Link to='/Takecare-readmore' style={{ color: '#fb6a34', fontSize: '19px' }}>know more</Link>
                                </div>
                                <div className='takeCare-download'>
                                    <div className='row'>
                                        <div className='col-sm-3'>
                                            <div className='ilTakeCare-img'>
                                                <img src='/img/il-tc.png' alt='' width='160px' />
                                            </div>
                                        </div>
                                        <div className='col-sm-9'>
                                            <div className='ilTakeCare-download'>
                                                <h6> Download the IL Take Care app</h6>
                                                <img src='/img/gplay.png' alt='' width='120px' />
                                                <img src='/img/appStore.png' alt='' width='120px' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='LearnCPRSaveALife text-center'>
                <div className='container'>
                <h3>#LearnCPRSaveALife</h3>
                <p>Did you know? Effective CPR can double the chance of a person surviving a cardiac arrest.</p>
               <div className='youtube-video'>
               <iframe width="750" height="480" src="https://www.youtube.com/embed/wM6oEqHEDzM" title="ICICI Lombard #WorldHeartDay - Emraan Hashami - Kiss the CPR Myth goodbye!"
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
               </div>
               </div>
               </div>
        </div>
    )

}
export default TakeCareApp;


