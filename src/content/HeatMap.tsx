import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface DataItem {
  Linea: string;
  consumo_residencial: number;
  consumo_comercial: number;
  consumo_industrial: number;
}

interface HeatmapChartProps {
  data: DataItem[];
}

const HeatmapChart: React.FC<HeatmapChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: 'heatmap' as const,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#008FFB'],
    xaxis: {
      label: {
        formatter: (value: number) => {
          return value.toFixed(2);
        },
      },
      categories: data.map((item) => item.Linea),
    },
  };

  const series = [
    {
      name: 'Residencial',
      data: data.map((item) => item.consumo_residencial),
    },
    {
      name: 'Comercial',
      data: data.map((item) => item.consumo_comercial),
    },
    {
      name: 'Industrial',
      data: data.map((item) => item.consumo_industrial),
    },
  ];

  return <ReactApexChart options={options} series={series} type='heatmap' />;
};

export default HeatmapChart;
