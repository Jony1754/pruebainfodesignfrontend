import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DataItem {
  Linea: string;
  fecha: string;
  costo_residencial: number;
  costo_comercial: number;
  costo_industrial: number;
}

interface CostAreaChartProps {
  data: DataItem[];
}

const CostAreaChart: React.FC<CostAreaChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width='100%' height={400}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='fecha' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type='monotone'
          dataKey='costo_residencial'
          stackId='1'
          stroke='#8884d8'
          fill='#8884d8'
        />
        <Area
          type='monotone'
          dataKey='costo_comercial'
          stackId='1'
          stroke='#82ca9d'
          fill='#82ca9d'
        />
        <Area
          type='monotone'
          dataKey='costo_industrial'
          stackId='1'
          stroke='#ffc658'
          fill='#ffc658'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CostAreaChart;
