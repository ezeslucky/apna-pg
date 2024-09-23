import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Nestled between mist-kissed mountains and azure shores, Sunset Haven beckons weary souls. Imagine stepping onto soft sands, the sun dipping below the horizon, casting hues of tangerine and lavender across the sky. Here, time slows—a symphony of rustling palm leaves and distant waves lulls you.

In Sunset Haven, quaint cottages dot the landscape, each with a hammock swaying lazily. The air smells of salt and jasmine. Wander through secret gardens where fireflies dance at twilight. Sip coconut water as the moon rises, revealing constellations you’ve never seen 🌅✨ 🌴🌺

          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;