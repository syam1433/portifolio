import "./Headcomponent.css";
import Project from "./Projects.jsx"
import Data from "./Data.jsx";
import { useState, } from "react";
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

function HeadComponent(){
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    };
    

    return(
        <>
            <div id="nav" className=" font-fonts cursor-pointer  w-full h-24 flex justify-center">
                <div id="nav2" className=" fixed top-0 z-10  border-2 mt-2 rounded-full w-4/5 p-4 flex justify-between items-center">
                    <div id="nav3" className=" text-4xl">
                        <p className="hover:text-blue-600">Portifolio</p>
                    </div>
                    <div  id="nav4" className=" text-xl">
                        <ol className=" flex gap-20">
                            <li className="hover:text-blue-600">Home</li>
                            <li className="hover:text-blue-600">Projects</li>
                            <li className="hover:text-blue-600">Resume</li>
                            <li className="hover:text-blue-600">Contact</li>
                            <li className="hover:text-blue-600">About me</li>
                        </ol>
                    </div>
                    <div id="buttn" className="hidden">
                        <button id="btn"
                            onClick={toggleMenu}
                            className="absolute top-4 right-5 p-2 border-2 text-white rounded-md">
                            {menuVisible ? <FaTimes size={24} /> : <FiMenu size={24} />}
                        </button>
                        <div className=" -mt-6 absolute right-48 top-9 ">
                            <div id="menu-list"
                                className={` border-2 w-44 h-auto text-white transform ${
                                menuVisible ? 'display' : 'hidden'
                                } transition-transform duration-500 ease-in`}>
                                <ul className="flex flex-col gap-4 p-4">
                                    <li className="hover:bg-gray-600 p-2 rounded-md cursor-pointer">
                                        Home
                                    </li>
                                    <li className="hover:bg-gray-600 p-2 rounded-md cursor-pointer">
                                        Projects
                                    </li>
                                    <li className="hover:bg-gray-600 p-2 rounded-md cursor-pointer">
                                        Contact
                                    </li>
                                    <li className="hover:bg-gray-600 p-2 rounded-md cursor-pointer">
                                        Resume
                                    </li>
                                    <li className="hover:bg-gray-600 p-2 rounded-md cursor-pointer">
                                        About Me
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default HeadComponent