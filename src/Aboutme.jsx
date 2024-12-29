import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
function Aboutme(){

    return(
        <>
            <footer>
                <div className=' flex flex-col items-center gap-10 border-t-2 mt-20 p-16 cursor-pointer'>
                    <div className=' text-3xl'>
                        <h1 className=' hover:text-orange-500'>Shyam</h1>
                    </div>
                    <div className='hover:text-orange-500 flex gap-10'>
                       <div className='hover:text-orange-500'>
                            <FiInstagram size={30}/>
                       </div>
                       <div className='hover:text-orange-500'>
                            <FaFacebook size={30}/>
                       </div>
                       <div className='hover:text-orange-500'>
                            <FaWhatsapp size={30}/>
                       </div>
                    </div>
                    <div id='teta' className=' flex text-2xl'>
                        &#169;<p>Portifolio All Rights Receved</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Aboutme