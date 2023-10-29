import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface GroupedColumnChartProps {
  data: Array<{ TipoConsumo: string; Linea: string; Perdidas: number }>;
}

const GroupedColumnChart: React.FC<GroupedColumnChartProps> = ({ data }) => {
  const categories = Array.from(new Set(data.map((d) => d.Linea)));

  const seriesData: { [key: string]: number[] } = {};

  data.forEach((item) => {
    if (!seriesData[item.TipoConsumo]) {
      seriesData[item.TipoConsumo] = Array(categories.length).fill(0);
    }
    const categoryIndex = categories.indexOf(item.Linea);
    seriesData[item.TipoConsumo][categoryIndex] += item.Perdidas;
  });

  const series = Object.keys(seriesData).map((tipo) => ({
    name: tipo,
    data: seriesData[tipo],
  }));

  const options = {
    chart: {
      type: 'bar' as const,
    },
    title: {
      text: 'Pérdidas por Tipo de Consumo y Tramo' as string,
      align: 'center' as const,
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      labels: {
        formatter: (val: number) => val.toFixed(4),
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => val.toFixed(4),
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val: number) => val.toFixed(4),
      offsetY: -20,
      style: {
        fontSize: '12px',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
  };

  return (
    <ReactApexChart options={options} series={series} type='bar' height={350} />
  );
};

export default GroupedColumnChart;
