import React from 'react';


const OrbitalMap = () => (
  <section className="orbital-map-container">

  	<ul className="solarsystem">
  	  <li className="sun-orbit"><a href="#sun"><span id="sun"></span></a></li>
  	  <li className="mercury-orbit"><a href="#mercury"><span id="mercury"></span></a></li>
  	  <li className="venus-orbit"><a href="#venus"><span id="venus"></span></a></li>
  	  <li className="earth-orbit"><a href="#earth"><span id="earth"><span className="moon"></span></span></a></li>
  	  <li className="mars-orbit"><a href="#mars"><span id="mars"></span></a></li>
  	  <li className="jupiter-orbit"><a href="#jupiter"><span id="jupiter"></span></a></li>
  	  <li className="saturn-orbit"><a href="#saturn"><span id="saturn"></span><span className="ring"></span></a></li>
  	  <li className="uranus-orbit"><a href="#uranus"><span id="uranus"></span></a></li>
  	  <li className="neptune-orbit"><a href="#neptune"><span id="neptune"></span></a></li>
  	</ul>

  </section>
);

export default OrbitalMap;
