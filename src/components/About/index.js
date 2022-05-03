import React from "react";

const About = () => {
  
  return (
    <div className="center">
      <h2>About Me</h2>
      <img
            src={require('../../assets/images/Ross-with-son.JPG')}
            alt="Ross with his son, Phineas"
            className="img-thumbnail mx-1"
          />
      <p className="thumbnail-text">
        Married father of one son (pictured) I have dedicated my life to
        personal development. My focus at this time is in website development
        and I know I can provide an elegant and succinct solution to your
        needs. I possess a positive attitude, hard work ethic, aptitude for
        learning and a knowledge in technologies/concepts including (but not limited to): HTML, CSS, Javascript, React, responsive design, RESTful API, Express, MySQL, MongoDB and NodeJS.
      </p>
    </div>
  )
}

export default About