import React from "react";

import "./style.css";


export default function Mainbody() {
  return (
    <div className="mainbody">
      <div className="container upper-head">
        <h1 className="text-center  my-2">ElectricianChai</h1>

        <p className="  text-center">
          This Web site will help you to find Electrician easily.This web site
          fully secure and there is no harresment.Our all Electrician are
          certified and shilled.They are experts person good by behaviour.This
          web side is will support you any district of bangladesh.So fell free
          to contact us quickly
        </p>
      </div>

      <div className="container middel">
        <div className="row back">
          {/* <div className="col-md-3">
                <img className='img' src={img4} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img2} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img3} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img4} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img5} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img6} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img7} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img8} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img9} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img10} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img1} alt="" />
            </div>
            <div className="col-md-3">
                <img className='img'  src={img2} alt="" />
            </div>  */}
        </div>
      </div>

      <div className="container last my-3">
        <div className="row">
            <h2 className="text-center">
                Contact Us
            </h2>
          <div className="col-md-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7305.149321975807!2d90.
                49490819999998!3d23.726878599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!5e0!3m2!1sen!2sbd!4v1691486098499!5m2!1sen!2sbd"
              width="450"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="col-md-7">
            <div className="form">
              <form>
                <div className="form-group">
                  <label htmlFor="text ">Email address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="text"
                    aria-describedby=""
                    placeholder="Your Message"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="text">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Type your message here"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}
