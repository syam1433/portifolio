import HeadComponent from "./HeadComponent.jsx";
import Data from "./Data.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
import Aboutme from "./Aboutme.jsx"

function App() {
  const projectData = [
    { title: "Clock App", Imgurl: "./src/assets/clock.png", discription: "A clock app built in React.", url: "https://clock-two-flame.vercel.app/" },
    { title: "Weather App", Imgurl: "./src/assets/weather.png", discription: "A weather app using HTML, CSS, and JS.", url: "https://syam1433.github.io/WeatherApp/" },
    { title: "Mail Chimp", Imgurl: "./src/assets/mailchimp.png", discription: "A Mail chimp website clone designed using HTML CSS.", url: "https://syam1433.github.io/mailchimp/" },
    { title: "Netflix", Imgurl: "./src/assets/netflix.png", discription: "A Netflix website clone designed using HTML CSS.", url: "https://syam1433.github.io/netflix//" },
    { title: "Amazon", Imgurl: "./src/assets/amazon.png", discription: "A amazon clone using HTML, CSS, and JS.", url: "https://syam1433.github.io/project2/" },
    { title: "Currency", Imgurl: "./src/assets/currency.png", discription: "A Currency converter using HTML CSS and JS.", url: "https://syam1433.github.io/converter/" },
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
