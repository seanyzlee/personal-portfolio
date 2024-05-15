import NewProject from "./NewProject";

const HomeContent = ({ title, img, imgSrc }) => {
  return (
    <div className="wrapper">
      <div className="textWrapper typing">
        <h1>  Hi! I am Sean. A second year mathematics student @ UW! 🍎</h1>
      </div>
      <div className="homecontent">
        <div className="smallTextContent">  
          <h2>
            Check out my <strong>recent projects</strong> here 🎯 !
          </h2>
          <p className="shorthomedesc">
            As a software developer/engineer, I have made many projects that in my career. I have chose some of my favorite projects to highlight in this page! Feel free to check them out and its repositories on GitHub by clicking on the title!
          </p>
        </div>
        <div className="projectbox">
          <NewProject
            title={"Laurier 2027 Discord Bot"}
            desc={
              "After high school, I took the initiative to develop and maintain a custom bot for a community that has since reached over 600 + members with Node.js. I implemented multiple custom commands and functions that utilize various API from OpenAI and RapidAI."
            }
            imgSrc={
              "../assets/discord-bot.png"
            }
          />
        </div>
        <div className="projectbox">
          <NewProject
            title={"A Love Story"}
            desc={
              "As my final senior year project in highschool, I developed a functional platformer game with different levels using the LibGDX game engine. I designed different sprite sheets and art for individual stages of the game using Tiled, and implemented file reading and writing with binary search and various design pattern recipes for the leaderboard system."
            }
            imgSrc={
              "../assets/love-story.png"
            }
          />
        </div>
        <div className="projectbox">
          <NewProject
            title={"Blue Bin"}
            desc={
              "Developed a functional mini-game based on the UNESCO environmental goals in the school's club competition. This project was completed through the collaboration with team members to create different UI/UX and sound/art designs for the game. This project was placed in the top 3 of the competition with the work displayed to the student body and teachers."
            }
            imgSrc={
              "../assets/blue-bin.png"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
