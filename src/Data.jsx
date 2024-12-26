import { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import BgImg1 from "./assets/bg-img1.jpg";
import clockimg from "./assets/Screenshot (11).png"
function Data(){

    const [visit,setVisit]=useState("https://clock-two-flame.vercel.app/");

    function websitego(){
        window.open(visit, "_blank");
    }

    return(
        <>
            <div className="mt-1 w-full ">
                <div className=" sticky w-full h-auto">
                    <img className=" w-full h-custom-1" src={BgImg1} alt="bg1" />
                    <div className=" font-fonts absolute top-0 left-0  w-full h-full flex flex-col gap-4 items-center justify-center text-2xl">
                       <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I Am a Web Developer',
                            6000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I Am completing My frontend',
                            6000,
                            'Next I will complete backend',
                            6000,
                            'My Recent project',
                            6000
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '2em', display: 'inline-block' }}
                          repeat={Infinity}
                         />
                        <div className=" absolute left-32 h-96">
                            <img onClick={websitego} className=" cursor-pointer rounded-2xl w-60 h-96" src={clockimg} alt="" />
                        </div>
                        <a className=" text-blue-500 text-3xl" target="_blank" href="https://clock-two-flame.vercel.app/"> clock</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Data