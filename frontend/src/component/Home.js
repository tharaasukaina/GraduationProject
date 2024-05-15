import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';
import '../style/Home.css';
import HomeImg from "../image/HomeImg.jpg";
// تعريف المكون CircularChart
const CircularChart = () => {
  const data = [// the values from shahd
    { name: 'Empty spots         ', value: 40, color: '#28a745', label: 'Empty Spaces' },
    { name: 'Filed spots      ', value: 30, color: '#ffc107', label: 'Filled Spaces' },
    { name: 'Overdue           ', value: 30, color: '#dc3545', label: 'Overdue Payments' },
  ];

  // const chartStyle = {
  //   margin: 'auto',
  //   marginTop: '20px',
  //   border: '1px solid #ccc',
  //   borderRadius: '5px',
  //   padding: '20px',
  // };

  const legendStyle = {
    textAlign: 'center',
    marginTop: '10px',
  };

  return (
    <div className="chart-container"> {/* Apply chart container class */}
      <PieChart width={250} height={400}>
        <Pie className='coulerd'
          data={data}
          // stroke="#fff"
          // dataKey="value"
          // innerRadius={60}
          // outerRadius={80}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={entry.color}
              stroke="#fff"
              dataKey="value"
              label={entry.label}
          className={`custom-class-${index}`}
          >
            <text x={200} y={200} dy={8} textAnchor="middle" fill="#000" style={{marginTop: '1000px'}}>
              {entry.name}
            </text>
          </Cell>
        ))}
        </Pie>
        <Legend className="legend-container" style={legendStyle} /> {/* Apply legend container class */}
      </PieChart>
    </div>
  );
};

// تصدير المكون CircularChart
export default function Home() {
  return (
    <div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="header-content">
                <div className="overlay">
                  <div className="header-content-item">
                  
                    <img src={HomeImg} alt="Bootstrap" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
           <div>
              <div className="pie-chart-container mt-2 rectangle shadow p-3 mb-5 bg-body-tertiary rounded">
                <CircularChart /> {/* استخدام المكون CircularChart هنا */}
              </div>
           
            </div> </div>
          </div>
        </div>
      </section>
    </div>
  );
}
