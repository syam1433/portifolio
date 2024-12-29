
import { TypeAnimation } from 'react-type-animation';
// import BgImg1 from "./assets/bgggimg.jpg";
import "./Data.css"

function Data(){


    return(
        <>
            <div className=" mt-1 w-full ">
                <div id='body' className=" flex justify-center gap-4  w-full h-custom-1">
                    {/* <img className=" w-full h-custom-1" src={BgImg1} alt="bg1" /> */}
                    <div id='Coder' className=' w-96 flex justify-center items-center'>
                        <img className=' z-10 rounded-full' width={250} height={250} src="https://static.vecteezy.com/system/resources/thumbnails/016/746/979/small_2x/freelancer-software-developer-programmer-coder-illustrator-vector.jpg" alt="" />
                    </div>
                    <div id="TypeAnimation" className=" font-fonts  w-4/6 flex flex-col items-center gap-9 justify-center text-2xl">
                       <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'I Am a Web Developer...',
                            6000, // wait 1s before replacing "Mice" with "Hamsters"
                            'I Am completing My frontend...',
                            6000,
                            'Next I will complete backend...',
                            6000,
                          ]}
                          wrapper="span"
                          speed={50}
                          style={{ fontSize: '2em', display: 'inline-block' }}
                          repeat={Infinity}
                         /> 
                         <div id='data' className=' w-full text-amber-800'>
                         <i>Welcome to my portfolio! I am a passionate web developer specializing in creating dynamic and user-friendly websites and web applications.My recent project</i>
                         <a className=" text-blue-500 text-sm" target="_blank" href="https://clock-two-flame.vercel.app/"> clock</a>
                         </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Data