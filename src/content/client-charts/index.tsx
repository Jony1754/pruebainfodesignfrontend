import React from 'react';
import LossBarChart from './LossBarChart';
interface DataItem {
  Linea: string;
  fecha: string;
  costo_residencial: number;
  costo_comercial: number;
  costo_industrial: number;
  perdidas_residencial: number;
  perdidas_comercial: number;
  perdidas_industrial: number;
}

interface ClientChartProps {
  data: DataItem[];
}

const ClientChart: React.FC<ClientChartProps> = ({ data }) => {
  return (
    <div>
      {/* <CostAreaChart data={data} /> */}
      <h1 className='text-lg font-bold'>Perdidas por tipo y por tramo</h1>
      <LossBarChart data={data} />
    </div>
  );
};

export default ClientChart;
