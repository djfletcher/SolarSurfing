import React from 'react';
import { hashHistory } from 'react-router';
import { Button } from 'react-bootstrap';

const Splash = () => (
  <div className="splash-container">
    <div className="splash-background top">
      <aside className="image-content">
        <h1>Stay with Locals and Meet Travelers</h1>
      </aside>
    </div>
    <div className="splash-background middle">
      <aside className="image-content">
        <h1>Explore the Solar System</h1>
        <Button
          onClick={ () => hashHistory.push('/howitworks') }
          bsStyle="primary">How It Works
        </Button>
      </aside>
      <article className="content-box">
        <div className="testimonial">
          <h3 className="testimonial-title">CONNECTED WITH</h3>
          <div className="testimonial-images">
            <figure>
              <img
                className="testimonial-image"
                src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489881450/Hosts/host13.png"
              />
              <figcaption className="testimonial-name">Bawbaw-8</figcaption>
            </figure>
            <figure>
              <img
                className="testimonial-image"
                src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489950941/Hosts/host3_e1zkxi.png"
              />
            <figcaption className="testimonial-name">Globxor</figcaption>
            </figure>
          </div>
          <p className="testimonial-subtitle">on Mars</p>
          <p className="testimonial-text">
            When I was traveling solo around the Solar System this summer, I used SolarSurfing to meet new aliens. Globxor was at the weekly SolarSurfing event and I feel so lucky to have met him! I enjoyed our conversations about finding life in the lonely depths of the universe, and he showed me the best spots to grab an authentic bloopzoid silkshake. After just a few short days of hanging on the planet, I felt as though I had known him for years.
          </p>
        </div>
      </article>
    </div>
    <div className="splash-background bottom">
      <article className="content-box">
        <div className="testimonial">
          <h3 className="testimonial-title">CONNECTED WITH</h3>
          <div className="testimonial-images">
            <figure>
              <img
                className="testimonial-image"
                src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878557/Hosts/host8_ckxvvw.png"
              />
              <figcaption className="testimonial-name">Cecil-9000</figcaption>
            </figure>
            <figure>
              <img
                className="testimonial-image"
                src="https://res.cloudinary.com/dmgrq5xrb/image/upload/v1489878567/Hosts/host6_y0rram.png"
              />
            <figcaption className="testimonial-name">Fuiglox</figcaption>
            </figure>
          </div>
          <p className="testimonial-subtitle">on Neptune</p>
          <p className="testimonial-text">
            Fuiglox is amazing! I loved spending time with her, and her openness and caring nature was so genuine and refreshing. When my bags didn't arrive until my second day, she was kind enough to loan me the comfiest zero-gravity shoes to wear around -- thank you again! A highlight of my trip includes celebrating her birthday with an eclipse party on Triton. Hope to see you again soon!
          </p>
        </div>
      </article>
      <aside className="image-content">
        <h1>Meet Groovy Extraterrestrials</h1>
        <Button
          onClick={ () => hashHistory.push('/safety') }
          bsStyle="primary">Safety First
        </Button>
      </aside>
    </div>
  </div>
);

export default Splash;
