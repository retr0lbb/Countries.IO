import React from 'react';
import { CountryData } from "@/hooks/useData";

interface AutoCompleteInputProps {
  data: CountryData[];
  value: string;
  onChange: (e: any)=> void
}

const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ data, onChange, value }) => {

  return (
    <div className='p-5'>
      <input
      className='p-4 outline-none border-none rounded-lg bg-zinc-600 text-zinc-300'
        type="text"
        value={value}
        onChange={onChange}
        list="suggestions"
      />
      <datalist id="suggestions">
        {data.map((item, index) => (
          <option key={index} value={item.name.common}>
            {item.name.common}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default AutoCompleteInput;
