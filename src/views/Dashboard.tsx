import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import DonutChart from '../content/CustomPieChart';
import HeatmapChart from '../content/HeatMap';
import MixedChart from '../content/MixedChart';
import Skeleton from '@mui/material/Skeleton';
import { fetchHistorialByClient } from '../utils/fetchHistoricalByClient';
import { fetchTramosCliente } from '../utils/fetchTramosCliente';
import GroupedColumnChart from '../content/GroupedColumnChart';
const Dashboard = () => {
  const [dataColumnChart, setDataColumnChart] = useState([]);
  const [dataHeatmapChart, setDataHeatmapChart] = useState([]);
  const [dataDonutChart, setDataDonutChart] = useState([]);
  const [dataGroupedColumnChart, setDataGroupedColumnChart] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHistorialByClient(
        new Date('2010-01-01'),
        new Date('2011-09-30')
      );
      setDataColumnChart(data);
      setDataHeatmapChart(data);
      setDataDonutChart(data);
      console.log('data', data);

      const data2 = await fetchTramosCliente(
        new Date('2010-01-01'),
        new Date('2011-09-30')
      );

      setDataGroupedColumnChart(data2);
      setDataDonutChart(data2);
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={12}>
        <Card>
          <CardContent>
            {dataColumnChart.length ? (
              <MixedChart data={dataColumnChart} />
            ) : (
              <Skeleton variant='rectangular' height={250} />
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            {dataHeatmapChart.length ? (
              <HeatmapChart data={dataHeatmapChart} />
            ) : (
              <Skeleton variant='rectangular' height={250} />
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            {dataGroupedColumnChart.length ? (
              <GroupedColumnChart data={dataGroupedColumnChart} />
            ) : (
              <Skeleton variant='rectangular' height={250} />
            )}
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            {dataDonutChart.length ? (
              <DonutChart data={dataDonutChart} />
            ) : (
              <Skeleton variant='circular' width={200} height={200} />
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
