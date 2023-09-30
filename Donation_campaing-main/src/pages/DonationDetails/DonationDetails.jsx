// import { useEffect, useState } from "react";

import { useLoaderData, useParams } from "react-router-dom";
import { saveDonation } from "../../componant/StoreDonation";


import {  ToastContainer } from 'react-toastify';
const DonationDetails = () => {





    // const [donationItem, setDonationItem] = useState(null);

    const { id } = useParams()
    const idInit = parseInt(id)
    const donation = useLoaderData()
    const donate = donation.find(donatePeaple => donatePeaple.id === idInit)

   
    const handleDonate = () => {
        saveDonation(idInit)
       
    }
 
    


    return (
        <div className="mt-9">
            <div className="relative">
                <div className="img">
                    <img className="w-full h-[800px]" src={donate.image} alt="" />
                    
                </div>
                <div className=" absolute bottom-0 bg-[#2a292970] w-full h-24 ">
                    <button onClick={handleDonate}  className="btn absolute bottom-6 ml-4 bg-[#FF444A] border-none hover:bg-[hsl(358,92%,64%)] text-white ">Donate {donate.price}</button>
                </div>
               
            </div>
            <div className="title">
                <h2 className="text-2xl font-bold  p-4 gap-y-3">{donate.title}</h2>
            </div>
            <div className="body p-4 text-justify mb-6 line-clamp-6 ">
                <p>{donate.description }</p>
            </div>
            <ToastContainer ></ToastContainer>
        </div>
      
    );
};

export default DonationDetails;