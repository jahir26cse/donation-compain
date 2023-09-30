import { Chart } from "react-google-charts";
import { getStoreDonation } from "../../componant/StoreDonation";

const Statistic = () => {

    const loadData = getStoreDonation()


const data = [
  ["Task", "Hours per Day"],
  [" Total Donation", 12],
  ["Your Donation", loadData.length],

];

 const options = {
    colors: ['#FF444A', '#00C49F'],
  is3D: true,
};

    return (
       
  

        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"800px"}
      />

     
    );
};

export default Statistic;