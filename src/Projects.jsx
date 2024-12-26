import PropTypes from 'prop-types';

function Projects({projects}){
    return(
        <>
            <div className=" w-full h-autogrid flex flex-col items-center justify-center mt-10">
                <h1 className=" text-6xl p-5 font-fonts">Projects</h1>
                <div className=" h-auto grid col-span-3 w-3/4 gap-16 p-20 grid-cols-3">
                {projects.map((projects, index) => (
                    <div id='block' key={index} className=" cursor-pointer bg-navbg w-80 flex flex-col border-2 p-4">
                        <img className=" h-44" src={projects.Imgurl} alt={projects.title} />
                        <p className="flex justify-center p-2 text-2xl font-medium font-serif"> {projects.title}</p>
                        <i>{projects.discription}</i>
                        <a className=" text-blue-600 font-fonts " target='_blank' href={projects.url}>Link</a>
                    </div>
                ))};
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
