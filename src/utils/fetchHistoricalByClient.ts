export const fetchHistorialByClient = async (
  startDate: Date,
  endDate: Date
) => {
  console.log('fetching data');
  const API = import.meta.env.VITE_API_URL;
  const formatedStartDate = `${startDate.getFullYear()}-${String(
    startDate.getMonth() + 1
  ).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;

  const formatedEndDate = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

  const response = await fetch(
    `${API}/cliente?fechainicial=${formatedStartDate}&fechafinal=${formatedEndDate}`
  );
  const data = await response.json();
  return data;
};
