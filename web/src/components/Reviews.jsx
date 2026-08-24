import React, { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="reviews">
      <div className="elfsight-app-7574dd37-1c64-402b-8fa1-fbf9451730c0"></div>
      <br/><br/>
    </div>
  )
}


export default Reviews
