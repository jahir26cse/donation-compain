import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [logo, setLogo] = useState([])
    useEffect(() => {
        fetch('./impor.json')
            .then(res => res.json())
        .then(data => setLogo(data))
    }, [])
  
    return (
        <div className="container mx-auto">
            <div className="navbar ">
                
                <div className="flex-1">
                    <NavLink to="/">{logo.map(brand => <img key={brand.id} src="https://i.postimg.cc/nz79wy3B/Logo.png" />)}</NavLink>
                   
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold text-[15px] m-2">
                      
                            <li><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline " : ""
                            } to="/">Home</NavLink></li>
                        

                        <li><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            } to="/donation">Donation</NavLink></li>
                         
                        <li><NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            } to="/statistic">Statistic</NavLink></li>
                         
                           
                      
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;