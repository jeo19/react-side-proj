import React from 'react';
import usePromise from './usePromise';

const wait = () => new Promise((resolve) => setTimeout(() => resolve('Hello hooks!'), 3000));

const usePromiseSample = () => {
  const [loading, resolved, error] = usePromise(wait, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>We are has some wrong</div>;
  if (!resolved) return null;

  return <div>{resolved}</div>;
};
export default usePromise;
