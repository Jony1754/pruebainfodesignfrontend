import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface MixedChartProps {
  data: {
    Linea: string;
    consumo_residencial: number;
    consumo_comercial: number;
    consumo_industrial: number;
    perdidas_residencial: number;
    perdidas_comercial: number;
    perdidas_industrial: number;
  }[];
}

const MixedChart: React.FC<MixedChartProps> = ({ data }) => {
  const options = {
    chart: {
      type: 'line' as const,
      stacked: false,
      height: 350,
    },
    stroke: {
      width: [0, 2, 5],
      curve: 'smooth' as const,
    },

    xaxis: {
      categories: data.map((item) => item.Linea),
      label: {
        formatter: (value: number) => {
          return value.toFixed(2);
        },
      },
    },
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    legend: {
      position: 'top' as const,
      horizontalAlign: 'left' as const,
    },
    yaxis: {
      title: {
        text: 'Consumo',
      },
      labels: {
        formatter: (value: number) => {
          return value.toFixed(2);
        },
      },
    },
  };

  const series = [
    {
      name: 'Consumo Residencial',
      type: 'column',
      data: data.map((item) => item.consumo_residencial),
    },
    {
      name: 'Consumo Comercial',
      type: 'column',
      data: data.map((item) => item.consumo_comercial),
    },
    {
      name: 'Perdidas Residencial',
      type: 'line',
      data: data.map((item) => item.perdidas_residencial),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={series}
      type='line'
      height={400}
    />
  );
};

export default MixedChart;
