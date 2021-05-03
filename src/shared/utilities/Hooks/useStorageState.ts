import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>
];

function useStorageState<T>(key: string, initialValue: T): Response<T> {

  const [state, setState] = useState(
    JSON.parse((typeof window !== 'undefined')
      && localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];

}

export default useStorageState;
