
  import 'react-toastify/dist/ReactToastify.css';
  import {   toast } from 'react-toastify';

const getStoreDonation = () => {
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}
const saveDonation = id => {
    const storedDonations = getStoreDonation();
    const isExist = storedDonations.find(donate => donate === id)

    if (!isExist) {
        storedDonations.push(id)
        localStorage.setItem("donation", JSON.stringify(storedDonations))
        toast.success("Your donation has been successful.", {
            position: "bottom-right",
            autoClose:1000
        });
    }else{
        toast.warn("You have already donated!", {
            position: "bottom-right",
            autoClose: 1000
        })
        
       
    }
}

export { getStoreDonation , saveDonation}