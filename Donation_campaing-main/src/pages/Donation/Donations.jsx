import { Link } from "react-router-dom";

const Donations = ({ donations }) => {
    const { id, title, bgColor, category, catagoryColor, titleColor, image, btnColor,price  } = donations;
 
    const background = {  backgroundColor : bgColor, }
    const titlecolor = {  color : titleColor, }
    const catColor = { backgroundColor: catagoryColor, }
    const bColor = {backgroundColor: btnColor}

  
    return (



        <div style={background} className="card card-side bg-base-100 shadow-xl mt-7 ">
            <figure><img className="h-full" src={image} alt="Movie" /></figure>
            <div className="card-body p-2">
               <p style={catColor} className="w-24 p-3 rounded-md  "> <span style={titlecolor}>{category}</span></p>
                <h2  className="card-title text-2xl font-bold">{title}</h2>
                <p style={titlecolor}  className="text-[25px]">${price} </p>
                <div className="card-actions ">
          <Link to={`/donationCard/${id}`}><button  style={bColor} className="btn border-none text-white ">View Details</button></Link>  
                </div>
            </div>
        </div>

    );
};

export default Donations;