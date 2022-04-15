import { Col, Container, Row, Image } from "react-bootstrap";
const PhotoList = () => {
  const photos = [
    {
      name: "WorthIt",
      description:
        "A full-stack web application built for users using gig economy jobs to earn an income. Individuals log in securely, input static values in their profile that are easily adjustable, then the app tells them if the job is worth accepting!",
      technologiesUsed:
        "express, mongoose, mongoDB, bcrypt, json-web-token, tailwind, javascript, react, react-bootstrap",
      filePath: "WorthIt_App",
      githubRepository: "https://github.com/RossWestwater/worthIt",
      deployedApp: "https://worth-it-2022.herokuapp.com/",
    },
    {
      name: "TroubleShot",
      description:
        "A full-stack web application built for individual user use. Individuals log in to 'stash' useful bits of information to reference down the road.",
      technologiesUsed:
        "HTML, express, mysql, sequelize, jest, bcrypt, tailwind, javascript",
      filePath: "Trouble_Shot",
      githubRepository: "https://github.com/RossWestwater/Troubleshot",
      deployedApp: "https://troubleshot.herokuapp.com/",
    },
    {
      name: "LastMinute",
      description:
        "One-stop date night app! input a few desired ingredients from the fridge and the app will give random recipes using the ingredients. You can also purchase tickets to local events to complete your date!",
      technologiesUsed: "HTML, CSS, javascript, Bootstrap, APIs",
      filePath: "LastMinute",
      githubRepository: "https://github.com/RossWestwater/lastMinute",
      deployedApp: "https://hone12345678.github.io/lastMinute/",
    },
    {
      name: "Forecast App",
      description:
        "Search by city name to get a 5-day forecast using API fetch requests. Saves search history in local storage",
      technologiesUsed: "HTML, CSS, javascript, Bootstrap, APIs",
      filePath: "Forecast_App",
      githubRepository: "https://github.com/RossWestwater/Weather-App",
      deployedApp: "https://rosswestwater.github.io/Weather-App/",
    },
    {
      name: "Scheduling App",
      description:
        "simple app to schedule the events of a given work day. Uses color coding based on current time stamp.",
      technologiesUsed: "javascript, Bootstrap, APIs, moment",
      filePath: "Scheduling_App",
      githubRepository: "https://github.com/RossWestwater/Calendar-Challenge",
      deployedApp: "https://rosswestwater.github.io/Calendar-Challenge/",
    },
    {
      name: "Quiz Time App",
      description:
        "A simple app utilizing asyncronous functions and dynamic page generation via javascript",
      technologiesUsed: "HTML, CSS, javascript",
      filePath: "Quiz_Time_App",
      githubRepository: "https://github.com/RossWestwater/Quiz-App",
      deployedApp: "https://rosswestwater.github.io/Quiz-App/",
    },
    {
      name: "Budget Tracking App",
      description:
        "App that utilizes MongoDB to store budget information. Retains functionality offline.",
      technologiesUsed: "express, handlebars templating, javascript",
      filePath: "Budget_Tracker_App",
      technologiesUsed: "mongoose, express",
      githubRepository: "https://github.com/RossWestwater/TrackThatBudget",
      deployedApp: "https://track-that-yummy-budget.herokuapp.com/",
    },
  ];

  return (
    <div>
      <h2 className="center">
        The following are a few samples of apps that I have been involved in
        creating:
      </h2>

      <Container fluid >
        <Row>
        {photos.map((photo) => (
            <Col xs md="6" xl="4" key={photo.name}>
              <h3 className="center"> {photo.name}</h3>
              <img
                src={require(`../../assets/images/${photo.filePath}.png`)}
                alt={photo.name}
              />
              <div className="mb-2">
                <h4>Description:</h4> {photo.description}
                <h4>Technologies/Concepts Used:</h4>
                {photo.technologiesUsed}
                <h4>Links:</h4>
                <a href={photo.githubRepository} target={"_blank"}>
                  GitHub Repo
                </a>
                |
                <a href={photo.deployedApp} target={"_blank"}>
                  Deployed App
                </a>
              </div>
            </Col>
        ))}
        </Row>
      </Container>
    </div>
  );
};

export default PhotoList;