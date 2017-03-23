import React from 'react';


const OrbitalMap = () => (
  <section className="orbital-map-container">

  	<ul className="solarsystem">
  	  <li className="sun"><a href="#sun"><span>Sun</span></a></li>
  	  <li className="mercury"><a href="#mercury"><span>Mercury</span></a></li>
  	  <li className="venus"><a href="#venus"><span>Venus</span></a></li>
  	  <li className="earth"><a href="#earth"><span>Earth<span className="moon"> &amp; Moon</span></span></a></li>
  	  <li className="mars"><a href="#mars"><span>Mars</span></a></li>
  	  <li className="jupiter"><a href="#jupiter"><span>Jupiter</span></a></li>
  	  <li className="saturn"><a href="#saturn"><span>Saturn &amp; <span className="ring">Ring</span></span></a></li>
  	  <li className="uranus"><a href="#uranus"><span>Uranus</span></a></li>
  	  <li className="neptune"><a href="#neptune"><span>Neptune</span></a></li>
  	</ul>

  </section>
);

export default OrbitalMap;
