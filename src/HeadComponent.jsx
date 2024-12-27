import "./Headcomponent.css";
import Project from "./Projects.jsx"
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';

function HeadComponent(){
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    };
    return(
        <>
            <div id="nav" className="  font-fonts cursor-pointer  w-full h-24 flex justify-center">
                <div id="nav2" className=" border-2 mt-2 rounded-full w-4/5 p-4 flex justify-between items-center">
                    <div id="nav3" className=" text-4xl">
                        <p className="hover:text-blue-600">Portifolio</p>
                    </div>
                    <div  id="nav4" className=" text-xl">
                        <ol className=" flex gap-20">
                            <li className="hover:text-blue-600">Home</li>
                            <li className="hover:text-blue-600"><a href={Project}>Projects</a></li>
                            <li className="hover:text-blue-600">Contact</li>
                            <li className="hover:text-blue-600">Resume</li>
                            <li className="hover:text-blue-600">About Me</li>
                        </ol>
                    </div>
                    <div id="buttn" className="hidden">
                    <button id="btn"
                        onClick={toggleMenu}
                        className="absolute top-8 right-5 p-2 bg-blue-500 text-white rounded-md shadow-md">
                        {menuVisible ? <FaTimes size={24} /> : <FiMenu size={24} />}
                    </button>
                    <div id="menu-list"
                        className={` flex justify-start absolute top-5 w-44 h-auto bg-gray-800 text-white left-7 transform ${
                        menuVisible ? ' translate-x-full' : 'hidden'
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
        </>
    );
}
export default HeadComponent