import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps, FormData } from '../interfaces';
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  inputs,
}: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Enviando datos:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black opacity-50 backdrop-blur-md'></div>
      <div className='bg-white p-8 rounded-lg w-96 relative z-10 shadow-lg'>
        <h2 className='text-xl mb-4'>Enviar Datos</h2>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.name} className='mb-4'>
              <label className='block mb-2'>{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                onChange={handleChange}
                className='w-full p-2 border rounded'
              />
            </div>
          ))}
          <button
            type='submit'
            className='bg-blue-100 text-blue-900 px-4 py-2 rounded mr-3 hover:bg-blue-200'
          >
            Enviar
          </button>
          <button className='bg-red-100 text-red-900 px-4 py-2 rounded hover:bg-red-200'>
            Cancelar
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('modal-root') || document.createElement('div')
  );
};
