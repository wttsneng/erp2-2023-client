import { useEffect, useState } from "react";
const useDebounce = (initialValue = "", delay) => {
  const [actualValue, setActualValue] = useState(initialValue);
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    setTimeout(() => setDebounceValue(actualValue), delay);
  }, [actualValue, delay]);
  return [debounceValue, setActualValue];
};

export default useDebounce;
