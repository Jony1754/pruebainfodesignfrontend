import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface RadialBarChartProps {
  data: Array<{ TipoConsumo: string; Linea: string; Perdidas: number }>;
}

const CustomPieChart: React.FC<RadialBarChartProps> = ({ data }) => {
  const aggregatedData: { [key: string]: number } = {};

  data.forEach((item) => {
    if (aggregatedData[item.TipoConsumo]) {
      aggregatedData[item.TipoConsumo] += item.Perdidas;
    } else {
      aggregatedData[item.TipoConsumo] = item.Perdidas;
    }
  });

  const series = Object.values(aggregatedData);
  const labels = Object.keys(aggregatedData);

  const options = {
    labels: labels,
    title: {
      text: 'Pérdidas por Tipo de Consumo' as const,
      align: 'center' as const,
    },
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='radialBar'
      height={350}
    />
  );
};

export default CustomPieChart;
