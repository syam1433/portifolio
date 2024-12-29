import HeadComponent from "./HeadComponent.jsx";
import Data from "./Data.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";


function App() {
  const projectData = [
    { title: "Clock App", Imgurl: "./clock.png", discription: "A clock app built in React.", url: "https://clock-two-flame.vercel.app/" },
    { title: "Weather App", Imgurl: "./weather.png", discription: "A weather app using HTML, CSS, and JS.", url: "https://syam1433.github.io/WeatherApp/" },
    { title: "Mail Chimp", Imgurl: "./mailchimp.png", discription: "A Mail chimp website clone designed using HTML CSS.", url: "https://syam1433.github.io/mailchimp/" },
    { title: "Netflix", Imgurl: "./netflix.png", discription: "A Netflix website clone designed using HTML CSS.", url: "https://syam1433.github.io/netflix//" },
    { title: "Amazon", Imgurl: "./amazon.png", discription: "A amazon clone using HTML, CSS, and JS.", url: "https://syam1433.github.io/project2/" },
    { title: "Currency", Imgurl: "./currency.png", discription: "A Currency converter using HTML CSS and JS.", url: "https://syam1433.github.io/converter/" },
  ];
  return (
    <>
      <HeadComponent />
      <Data />
      <Projects projects={projectData} />
      <Resume/>
      <Contact/>
    </>
  );
}

export default App;
