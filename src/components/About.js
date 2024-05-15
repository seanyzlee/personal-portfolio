import ImageGrid from "./ImageGrid";

const About = () => {
  return (
    <div className="aboutWrapper">
      <h3 className="wow bounceInDown center" data-wow-delay="0.5s">
        About me 🙋🏻!
      </h3>
      <p className="aboutText wow bounceInDown center" data-wow-delay="0.5s">
        I gained interest in computer programming through the games that I have played during my childhood. Games like Minecraft, Counter Strike, Maple Story, and Dragonica has inspired me
        to dive into the tech industry. I have always admired theintricate details that developers put into these games as a kid. Now, as a grown adult, I want to build softwares that all individuals 
        would enjoy. I have a Jack Ruselle Terrier named "Mulan" and many good friends. In my free time, I like cooking, self-learning, and playing badminton! 
      </p>

      <ImageGrid />
     
    </div>
  );
};

export default About;
