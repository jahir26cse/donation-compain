import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreDonation } from "../../componant/StoreDonation";
import Donations from "./Donations";



const Donation = () => {
    const [donates, setDonates] = useState([])

    const loadDonation = useLoaderData();
    useEffect(() => {
        const storedDonation = getStoreDonation()

        
        if (loadDonation.length > 0) {

            const donations = [];
            for (const id of storedDonation) {
                const donate = loadDonation.find((donated => donated.id === id));
            
                if (donate) {
                    
                    donations.push(donate)
                }
                setDonates(donations)
        }
      
        }
      
    },[loadDonation] )
    
  
   
    return (
        <div className="grid grid-cols-2 gap-4 ">
            {
                
                donates.map(donations =><Donations key={donations.id} donations={donations}></Donations>)
            
             
            }
          </div>
    );
};

export default Donation;