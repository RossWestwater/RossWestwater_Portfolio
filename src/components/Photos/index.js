const PhotoList = () => {

  const photos = [
    {
      name: 'TroubleShot',
      description:
        "A full-stack web application built for individual user use. Individuals log in to 'stash' useful bits of information to reference down the road." ,
      technologiesUsed: 'HTML, express, mysql, sequelize, jest, bcrypt, tailwind, javascript',
      filePath: 'Trouble_Shot',
      githubRepository: 'https://github.com/RossWestwater/Troubleshot',
      deployedApp: 'https://troubleshot.herokuapp.com/'
    },
    {
      name: 'LastMinute',
      description:
        'One-stop date night app! input a few desired ingredients from the fridge and the app will give random recipes using the ingredients. You can also purchase tickets to local events to complete your date!',
      technologiesUsed: 'HTML, CSS, javascript, Bootstrap, APIs',
      filePath: 'LastMinute',
      githubRepository: 'https://github.com/RossWestwater/lastMinute',
      deployedApp: 'https://hone12345678.github.io/lastMinute/'
    },
    {
      name: 'Forecast App',
      description:
        'Search by city name to get a 5-day forecast using API fetch requests. Saves search history in local storage',
      technologiesUsed: 'HTML, CSS, javascript, Bootstrap, APIs',
      filePath: 'Forecast_App',
      githubRepository: 'https://github.com/RossWestwater/Weather-App',
      deployedApp: 'https://rosswestwater.github.io/Weather-App/'
    },
    {
      name: 'Scheduling App',
      description:
        'simple app to schedule the events of a given work day. Uses color coding based on current time stamp.',
      technologiesUsed: 'javascript, Bootstrap, APIs, moment',
      filePath: 'Scheduling_App',
      githubRepository: 'https://github.com/RossWestwater/Calendar-Challenge',
      deployedApp: 'https://rosswestwater.github.io/Calendar-Challenge/'
    },
    {
      name: 'Quiz Time App',
      description:
        'A simple app utilizing asyncronous functions and dynamic page generation via javascript',
      technologiesUsed: 'HTML, CSS, javascript',
      filePath: 'Quiz_Time_App',
      githubRepository: 'https://github.com/RossWestwater/Quiz-App',
      deployedApp: 'https://rosswestwater.github.io/Quiz-App/'
    },
    {
      name: 'Budget Tracking App',
      description:
        'App that utilizes MongoDB to store budget information. Retains functionality offline.',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'Budget_Tracker_App',
      technologiesUsed: 'mongoose, express',
      githubRepository: 'https://github.com/RossWestwater/TrackThatBudget',
      deployedApp: 'https://track-that-yummy-budget.herokuapp.com/'
    }
  ];

  return (
    <div>
      <h2 className="center">The following are a few samples of apps that I have been involved in creating:</h2>
       
      <div className="photoDisplay">
        {photos.map((photo) => (
          <div className="portfolio-cont">
            <h3 className="center"> {photo.name}</h3>
          <img
            src={require(`../../assets/images/${photo.filePath}.png`)}
            alt={photo.name}
            className="img-thumbnail mx-1"
          />
          <div className="thumbnail-text">
          <h4>Description:</h4> {photo.description}
          <h4>Technologies/Concepts Used:</h4>{photo.technologiesUsed}
          <h4>Links:</h4>
          <a href={photo.githubRepository} target={"_blank"}>GitHub Repo</a>|
          <a href={photo.deployedApp} target={"_blank"}>Deployed App</a>
          </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default PhotoList