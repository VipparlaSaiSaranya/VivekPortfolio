import React from "react";
import CoffeePlanner from "../assets/portfolio/CoffeePlanner.gif";
import EmojiGame from "../assets/portfolio/EmojiGame.gif";
import MoviesSearch from  "../assets/portfolio/MovieSearch.gif";
import RandomPassword from "../assets/portfolio/RandomPassword.gif"

import Authentication from "../assets/portfolio/authentication.gif"


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: EmojiGame,
      DemoLink: 'https://emojigame1.netlify.app/',
      CodeLink:'https://github.com/vivekreddy-k/emoji-game-react-15',
      name:'Emoji Game',
    },
    {
      id:2,
      src: CoffeePlanner,
      DemoLink: 'https://coffeeplanner.netlify.app/',
      CodeLink:'https://github.com/vivekreddy-k/coffee-planner-application-react-13',
      name:'Coffee Planner Application',
    },
    {
      id:3,
      src:RandomPassword,
      DemoLink:'https://randompasswordgen.netlify.app/',
      CodeLink:'https://github.com/vivekreddy-k/ReactJS-random-password-generator',
      name:'Random Password Generator',
    },
    {
      id:4,
      src:MoviesSearch,
      DemoLink:'https://moviesapp.ccbp.tech/',
      CodeLink:'https://github.com/vivekreddy-k/movies-app-dynamic-web-application',
      name:'Movies Application',
    },
    {
      id:5,
      src:Authentication,
      DemoLink:'https://github.com/vivekreddy-k/covid19-authentication-expressJS-application',
      CodeLink:'https://github.com/vivekreddy-k/covid19-authentication-expressJS-application',
      name:'Covid-19 APIs generated using ExpressJS'
    }

    /**{
      id:3,
      src:RandomPassword,
      DemoLink:'',
      CodeLink:'',
      name:''
    } */
    
  ];

  

  return (
    <div
    name="projects"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit"
    style={{padding:'25px'}}
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolios.map(({ id, src, DemoLink , CodeLink ,name }) => (
          
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt={name}
              className="project_image rounded-md duration-200 hover:scale-105"
            />
            <p className="project_title"> {name}</p>
            <div className="flex items-center justify-center">
              

            <a href={CodeLink} target="_blank" rel="noreferrer">
              <button className=" px-6 py-3 m-4 duration-200 hover:scale-105 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Code
              </button>
              </a>

              <a href={DemoLink} target="_blank" rel="noreferrer">
              <button className=" px-6 py-3 m-4 duration-200 hover:scale-105 bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Demo
              </button>
              </a>
            </div>
          </div>
          
        ))}
      </div>

      <div className="pb-8">
        
        <p className="py-6 mt-10">.... and Many other Minor Projects on My <a target="_blank" 
           rel="noreferrer" href="https://github.com/vivekreddy-k/vivekreddy" ><button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            GitHub</button></a></p>
      </div>
          
    </div>
  </div>
  );
};

export default Portfolio;
