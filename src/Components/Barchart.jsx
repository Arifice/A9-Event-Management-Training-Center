/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const Barchart = () => {
    
    
    const colors = ['green','#0088FE', '#00C49F','purple', '#FFBB28', '#FF8042', 'red', 'blue','orange'];

    const data = [
        {   name: '2015', uv: 200, pv: 2400, amt: 2400 },
        {   name: '2016', uv: 180, pv: 2400, amt: 2400 },
        {   name: '2017', uv: 400, pv: 2400, amt: 2400 },
        {   name: '2018', uv: 300, pv: 1398, amt: 2210 },
        {   name: '2019', uv: 200, pv: 9800, amt: 2290 },
        {   name: '2020', uv: 380, pv: 3908, amt: 2000 },
        {   name: '2021', uv: 180, pv: 4800, amt: 2181 },
        {   name: '2022', uv: 230, pv: 3800, amt: 2500 },
        {   name: '2023', uv: 320, pv: 4300, amt: 2100 },
    ];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
            ${x + width / 2}, ${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
            Z`;
    }; 
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };
      

    return (
        <div className='border  lg:border-4 border-red-500 lg:m-16'>
            <h1 className='text-2xl lg:text-4xl text-center font-bold  text-purple-600'>Graph of yearly success </h1>
            <BarChart className='flex justify-center'
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 150,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
            </BarChart>
        </div>
    );
};

export default Barchart;