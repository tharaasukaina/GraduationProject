import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../image/aboutImg.png';
import '../style/About.css';

const About = () => {
    return (
        <div>
            <section className='about'>
                <div className="curved-shape d-flex justify-content-center align-items-center ">
                    <div className="row g-0 bg-transparent  ">
                        <div className="col-md-4">
                            <img src={aboutImg} className="img-fluid" alt="Image" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title a">About Us</h5>
                                <p className="card-text mt-5">With a vision to transform how we see space management & parking,
                                    LoPark envisions to Bring Innovative Parking Solution, tailored to suit Kadoorie University
                                    Our parking systems are custom made with advanced effortless mechanisms to cater all types of vehicles, heavy or light.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default About;