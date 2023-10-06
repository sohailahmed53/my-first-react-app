import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Techstary</h1>
          <p>solution to all Your problem</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            we are your only solution to tech 

            every day.we are leading tech company 
            problem solving ability in childer.

          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>who we are</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Distinctio illo sapiente velit, ducimus cum vel. Dignissimos
             nesciunt libero quisquam ab, debitis ex harum eius vel culpa
             quasi voluptate amet dolores.</p>
        </div>
      </div>

      <div className="home4"  id="brands">
        <div>
          <h1>Brands</h1>
          <article>
  <div style={{ animationDelay: "0.3s" }}>
    <AiFillGoogleCircle />
    <p>Google</p>
  </div>

  <div style={{ animationDelay: "0.7s" }}>
    <AiFillAmazonCircle />
    <p>Amazon</p>
  </div>

  <div style={{ animationDelay: "0.9s" }}>
    <AiFillYoutube />
    <p>Youtube</p>
  </div>

  <div style={{ animationDelay: "1s" }}>
    <AiFillInstagram />
    <p>Instagram</p>
  </div>
</article>

            
        </div>
      </div>
    </>
  );
};

export default Home;
