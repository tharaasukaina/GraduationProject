import React from "react";
import image from "../image/contactNew-removebg-preview.png";
import '../style/Contact.css';
const Contact = () =>{
    return(
        <div className="interior_13">
        <div className="responsive-container-block big-container">
          <div className="responsive-container-block container">
            <div className="responsive-container-block">
              <div className="orange-card">
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6" id="i7wk">
                <div className="card-content">
                  <p className="text-blk section-head">
                    Get in touch
                  </p>
                  <p className="text-blk sub-head">
                    Feel free to contact us any time. We will get back to you as soon as we can!  
                  </p>
                  <form className="for">
  
        <div className="form-group position-relative">
          <label for="formName" className="d-block">
            <i className="icon" data-feather="user"></i>
          </label>
          <input type="text" id="formName" className="form-control form-control-lg thick" placeholder="Name"/>
        </div>
  
        
        <div className="form-group position-relative">
          <label for="formEmail" className="d-block">
            <i className="icon" data-feather="mail"></i>
          </label>
          <input type="email" id="formEmail" className="form-control form-control-lg thick" placeholder="email"/>
        </div>
  
        
        <div className="form-group message">
          <textarea id="formMessage" className="form-control form-control-lg" rows="7" placeholder="Message"></textarea>
        </div>
      
        <div className="submission">
        <div className="text-center">
          <button type="submit" className="sub btn" tabIndex="-1">Send</button>
        </div>
        </div>
    </form>
                </div>
              </div>
              <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-ipadp-12 wk-desk-6 img-one" id="iwgx">
                <img className="img-sofa3" src={image} alt="image "/>
              </div>
            </div>
          </div>
        </div>
      </div>
          );
        };
export default Contact; 

