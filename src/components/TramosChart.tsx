import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface TramosChartData {
  Linea: string;
  consumo: number;
  perdidas: number;
  costo: number;
}

interface TramosChartProps {
  data: TramosChartData[];
}

function TramosChart({ data }: TramosChartProps) {
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
        <Bar dataKey='consumo' fill='#8884d8' name='Consumo' />
        <Bar dataKey='perdidas' fill='#82ca9d' name='Pérdidas' />
        <Bar dataKey='costo' fill='#ffc658' name='Costo' />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default TramosChart;
