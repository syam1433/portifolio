import page1 from "./assets/Screenshot (18).png"
import page2 from "./assets/Screenshot (19).png"
import { createElement } from "react";
import "./Resume.css";

function Resume(){

    function download(){
        const link = document.createElement("a");
        link.href = "./resume of paina durga syamalarao.pdf";
        link.download = "syam.pdf";
        link.click();
    }
    
    return(
        <>
            <div>
                <div className=" mt-36 flex justify-center text-6xl">
                    <h1 className=" ">Resume</h1>
                </div>
                <div className=" p-20 flex justify-center">
                    <div id="gap" className=" flex  gap-36">
                        <div id="img1" className="">
                            <img src={page1} alt=""  width={500}/>
                        </div>
                        <div id="img2">
                        <img src={page2} alt="" width={500}/>
                        </div>
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className=" w-32 flex justify-center text-2xl bg-orange-500 ">
                        <button onClick={download} className=" ">Download</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Resume