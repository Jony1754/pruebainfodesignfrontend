import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  Linea: string;
  consumo_residencial: number;
  consumo_comercial: number;
  consumo_industrial: number;
  // ... otros campos
}

interface StackedBarChartProps {
  data: DataItem[];
}

const StackedBarChart: React.FC<StackedBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='Linea' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='consumo_residencial' stackId='a' fill='#8884d8' />
        <Bar dataKey='consumo_comercial' stackId='a' fill='#82ca9d' />
        <Bar dataKey='consumo_industrial' stackId='a' fill='#ffc658' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
