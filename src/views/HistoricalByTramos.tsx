import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { fetchHistoricalByTramos } from '../utils/fetchHistoricalByTramos';
import 'react-datepicker/dist/react-datepicker.css';
import TramosChart from '../components/TramosChart';
import CustomTable from '../components/CustomTable';
import { Modal } from '../components/Modal';
import { Input } from '../interfaces';

function HistoricalByTramos() {
  const [data, setData] = useState([]);
  const [showGraph, setShowGraph] = useState(true);
  const [startDate, setStartDate] = useState(new Date('2010-01-01'));
  const [endDate, setEndDate] = useState(new Date('2014-01-31'));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputs: Input[] = [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
  ];
  useEffect(() => {
    async function fetchData() {
      const result = await fetchHistoricalByTramos(startDate, endDate);
      setData(result);
      console.log(result);
      console.log('data', data);
    }

    fetchData();
  }, [startDate, endDate]);

  // Definir las columnas para DataTable
  const columns = data.length
    ? Object.keys(data[0]).map((key) => ({
        Header: key,
        accessor: key,
      }))
    : [];

  return (
    <div className='p-6'>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        inputs={inputs}
      />
      <h1 className='text-xl font-bold mb-4'>Histórico por Tramos</h1>
      <button
        type='button'
        onClick={() => {
          setShowGraph(!showGraph);
        }}
        className='text-white h-fit  bg-blue-700 mt-6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        {showGraph ? 'Ocultar gráfica' : 'Mostrar gráfica'}
      </button>
      <button
        type='button'
        className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
      >
        Imprimir
      </button>
      <button
        type='button'
        onClick={() => {
          setIsModalOpen(true);
        }}
        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
      >
        Insertar datos
      </button>

      <div className='my-6 flex'>
        <div className='mr-4'>
          <label className='block mb-2 text-gray-700'>
            <strong>Fecha de inicio:</strong>
          </label>
          <div className='border rounded-md shadow-sm'>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date as Date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat='yyyy-MM-dd'
              className='p-2 w-full'
            />
          </div>
        </div>
        <div>
          <label className='block mb-2 text-gray-700'>
            <strong>Fecha de fin:</strong>
          </label>
          <div className='border rounded-md shadow-sm'>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date as Date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              dateFormat='yyyy-MM-dd'
              className='p-2 w-full'
            />
          </div>
        </div>
      </div>

      {showGraph && <TramosChart data={data} />}
      <CustomTable columns={columns} data={data} />
    </div>
  );
}

export default HistoricalByTramos;
