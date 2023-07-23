import { useCallback, useState } from "react";

export const useBool = (): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState(false);

  const setToTrue = useCallback(() => setValue(true), []);
  const setToFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((prevValue) => !prevValue), []);

  return [value, setToTrue, setToFalse, toggle];
};
