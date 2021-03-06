import React, { useState, useMemo, useCallback, useRef, useEffect } from 'react';

const getAverage = (numbers) => {
  console.log('Computing a value');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  const inputEL = useRef(null);
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);
  const onInsert = useCallback(
    (e) => {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber('');
      inputEL.current.focus();
    },
    [number, list],
  );
  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEL} />
      <button onClick={onInsert}>Register</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>Avg:</b>
        {avg}
      </div>
    </div>
  );
};
export default Average;
