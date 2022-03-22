import { useState } from "react";

const PhotoList = () => {

  const photos = [
    {
      name: 'TroubleShot',
      description:
        "A full-stack web application built for individual user use. Individuals log in to 'stash' useful bits of information to reference down the road. Useful for workplace settings. " ,
      technologiesUsed: 'mysql2, express, handlebars templating, javascript',
      filePath: 'Trouble_Shot',
      githubRepository: 'https://github.com/RossWestwater/Troubleshot',
      deployedApp: 'https://troubleshot.herokuapp.com/'
    },
    {
      name: 'LastMinute',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'LastMinute',
      githubRepository: 'https://github.com/RossWestwater/lastMinute',
      deployedApp: 'https://hone12345678.github.io/lastMinute/'
    },
    {
      name: 'Forecast App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'Forecast_App',
      githubRepository: 'https://github.com/RossWestwater/Weather-App',
      deployedApp: 'https://rosswestwater.github.io/Weather-App/'
    },
    {
      name: 'Scheduling App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'Scheduling_App',
      githubRepository: 'https://github.com/RossWestwater/Calendar-Challenge',
      deployedApp: 'https://rosswestwater.github.io/Calendar-Challenge/'
    },
    {
      name: 'Quiz Time App',
      description:
        'A simple app utilizing asyncronous functions and dynamic page generation via javascript',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'Quiz_Time_App',
      githubRepository: 'https://github.com/RossWestwater/Quiz-App',
      deployedApp: 'https://rosswestwater.github.io/Quiz-App/'
    },
    {
      name: 'Budget Tracking App',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
      technologiesUsed: 'express, handlebars templating, javascript',
      filePath: 'Trouble_Shot',
      technologiesUsed: 'javascript, express',
      githubRepository: 'https://github.com/RossWestwater/TrackThatBudget',
      deployedApp: 'https://track-that-yummy-budget.herokuapp.com/'
    }
  ];

  return (
    <div>
      <div className="flex-row">
        {photos.map((photo) => (
          <img
            src={require(`../../assets/images/${photo.filePath}.png`)}
            alt={photo.name}
            className="img-thumbnail mx-1"
          />
        ))}
      </div>
    </div>
  );

}

export default PhotoList