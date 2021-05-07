import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

function useStorageState<T>(key: string, initialValue: T): Response<T> {

  const localStorageValue = (typeof window !== 'undefined') ? localStorage.getItem(key) : null;

  const valueAsString = localStorageValue !== null ? localStorageValue : JSON.stringify(initialValue);

  const [state, setState] = useState(JSON.parse(valueAsString));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];

}

export default useStorageState;
