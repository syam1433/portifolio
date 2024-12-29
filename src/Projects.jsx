import PropTypes from 'prop-types';
import "./Projects.css"

function Projects({projects}){
    function open(url){
        const link = document.createElement("a");
        link.href = url;
        link.click();
    }
    return(
        <>
            <div id='projects' className="  w-full h-autogrid flex flex-col items-center justify-center mt-10">
                <h1 className=" text-6xl p-5 font-fonts">Projects</h1>
                <div id='data-pro' className=" h-auto grid col-span-3 w-3/4 gap-16 p-20 grid-cols-3">
                {projects.map((projects, index) => (
                    <div onClick={() => open(projects.url)} id='block' key={index}  className={`text-black cursor-pointer bg-navbg w-80 flex flex-col border-2 rounded-lg p-4 animation-${index}`}>
                        <p className=" text-black  bg-navbg flex justify-center p-2 text-2xl font-medium font-serif"> {projects.title}</p>
                        <img className=" text-black  bg-navbg h-44" src={projects.Imgurl} alt={projects.title} />
                        <i className=' text-black  bg-navbg'>{projects.discription}</i>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
}
Projects.propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        Imgurl: PropTypes.string,
        discription: PropTypes.string,
        url: PropTypes.string,
      })
    ).isRequired,
  };

export default Projects;
