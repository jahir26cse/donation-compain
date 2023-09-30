import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";
import Banner from "./Banner";


const Home = () => {
    
    const [donation, setDonation] = useState([])
    
    useEffect(() => {
        fetch('./donation.json')
            .then(res => res.json())
        .then(data => setDonation(data))

    }, [])
  
    return (
        <><Banner></Banner>
        <div className=" grid grid-cols-4 gap-4">
            {
                donation.map(donationCard => <DonationCard key={donationCard.id} card={donationCard}></DonationCard>)
            }
            </div>
        </>
    );
};

export default Home;