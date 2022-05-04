import { Col, Container, Row, Card } from "react-bootstrap";
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
        "One-stop date night app! Input a few desired ingredients from the fridge and the app will give random recipes using the ingredients. You can also purchase tickets to local events to complete your date!",
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
      technologiesUsed: "mongoose, express",
      filePath: "Budget_Tracker_App",
      githubRepository: "https://github.com/RossWestwater/TrackThatBudget",
      deployedApp: "https://track-that-yummy-budget.herokuapp.com/",
    },
  ];

  return (
    <div>
      <h2
        className="center py-3 bg-light border border-dark"
        style={{ borderRadius: "15px" }}
      >
        Some of my works:
      </h2>

      <Container fluid>
        <Row className="bg-dark rounded">
          {photos.map((photo) => (
            <Col sm md="6" xl="4" key={photo.name}>
              <Card
                border="dark"
                style={{ width: "100%" }}
                className="mb-2 px-2 cardBackground"
              >
                <Card.Title
                  className="center my-2 py-2 border border-dark"
                  style={{ background: "rgb(132, 169, 192)" }}
                >
                  {" "}
                  {photo.name}
                </Card.Title>
                <img
                  className="border border-dark"
                  src={require(`../../assets/images/${photo.filePath}.png`)}
                  alt={photo.name}
                />
                <div className="mb-2">
                  <Card.Header
                    className="border border-dark"
                    style={{ background: "rgb(132, 169, 192)" }}
                  >
                    Description:
                  </Card.Header>{" "}
                  {photo.description}
                  <Card.Header
                    className="border border-dark"
                    style={{ background: "rgb(132, 169, 192)" }}
                  >
                    Technologies/Concepts Used:
                  </Card.Header>
                  {photo.technologiesUsed}
                  <Card.Header
                    className="border border-dark"
                    style={{ background: "rgb(132, 169, 192)" }}
                  >
                    Links:
                  </Card.Header>
                  <div className="my-2">
                    <a
                      href={photo.githubRepository}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      GitHub Repo
                    </a>
                    |
                    <a
                      href={photo.deployedApp}
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      Deployed App
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PhotoList;
