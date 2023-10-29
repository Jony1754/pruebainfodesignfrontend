export const fetchHistoricalByTramos = async (
  startDate: Date,
  endDate: Date
) => {
  console.group('fetchHistoricalByTramos');
  console.log(startDate, endDate);
  console.log('converting dates to strings');

  console.log('fetching data');
  const formatedStartDate = `${startDate.getFullYear()}-${String(
    startDate.getMonth() + 1
  ).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;

  const formatedEndDate = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

  const response = await fetch(
    `http://localhost:3001/tramos?fechainicial=${formatedStartDate}&fechafinal=${formatedEndDate}`
  );
  const data = await response.json();
  return data;
};
