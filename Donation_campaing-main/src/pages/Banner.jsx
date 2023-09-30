import { useEffect, useState } from "react";

const Banner = () => {
    const [search, setSearch] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        fetch("./donation.json") 
            .then((res) => res.json())
            .then((data) => setSearch(data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchDatar = e.target.search.value;

       
        const filteredSearch = search.filter(
            (searchData) => searchData === searchDatar
        );
       

        if (filteredSearch){
            setSearchValue(filteredSearch); 
        }
    };

   
    return (
        <div className="relative h-96 mb-4 grid justify-center content-evenly items-top">
            <div
                className="absolute inset-0 bg-cover z-0"
                style={{
                    backgroundImage: "url('https://i.postimg.cc/htYfFrb9/Rectangle-4281.png')",
                    opacity: 0.2,
                }}
            ></div>
            <div className="relative z-10">
                <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2>
            </div>

            <div className="search relative z-10">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search here..."
                        className="rounded-tr-none rounded-br-none input input-bordered w-full max-w-xs"
                    />
                    <button
                        type="submit"
                        className="btn bg-[#FF444A] hover:bg-[#bc3439] text-white p-3 w-20 rounded-tl-none rounded-bl-none"
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>

    


        // <div className="h-96 mb-20 grid justify-center content-evenly items-top  bg-center bg-[url('https://i.postimg.cc/htYfFrb9/Rectangle-4281.png')]   ">
        //     <div className=" "> <h2 className="text-4xl font-bold">I Grow By Helping People In Need</h2></div>
           
           
        //     <div className="search">
        //         <form onSubmit={handleSubmit} >
        //             <input type="text" name="search" placeholder="Search here..." className="rounded-tr-none rounded-br-none input input-bordered w-full max-w-xs" />
        //             <button type="submit" className="btn bg-[#FF444A] hover:bg-[#bc3439]  text-white p-3 w-20 rounded-tl-none rounded-bl-none">Search</button>
        //         </form>
        //     </div>
        // </div>
    );
};

export default Banner;