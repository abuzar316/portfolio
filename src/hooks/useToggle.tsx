import { Dispatch, SetStateAction, useCallback, useState } from "react";

type toggleType = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

export default function useToggle(defaultValue?: boolean): toggleType {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue((x) => !x), []);

  return [value, toggle, setValue];
}
