import { Link } from "react-router-dom";


const DonationCard = ({ card }) => {

    const {id, title, bgColor, category, catagoryColor, titleColor, image  } = card;
   
    const background = {  backgroundColor : bgColor, }
    const titlecolor = {  color : titleColor, }
    const catColor = { backgroundColor: catagoryColor, }

    // const buttonColor = {  backgroundColor : btnColor, }

    return (
        <div>
            <Link to={`/donationCard/${id}`}>
            <div style={background} className=""  >
               
                <img className="w-full mb-2" src={ image } alt="" />
                <div className="p-4">
                    <div style={catColor} className="category p-2 w-24 rounded-md">
                        <span style={titlecolor} className="text-cen">{category}</span>
                    </div>
                    <div className="title">
                        <h2 className="text-2xl w-full" style={titlecolor}>{title}</h2>
                    </div>
              </div>
            </div>
            </Link>
            
        </div>
    );
};

export default DonationCard;