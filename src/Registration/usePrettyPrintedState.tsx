import { Dispatch, SetStateAction, useMemo, useState } from "react";

export function usePrettyPrintedState<T extends object>(): [
  JSX.Element,
  Dispatch<SetStateAction<T>>
] {
  const [value, setValue] = useState<any>();
  const resultValue = useMemo(() => {
    return (
      <>
        {value && (
          <pre>
            Value:
            <br />
            {JSON.stringify(value, null, 2)}
          </pre>
        )}
      </>
    );
  }, [value]);
  return [resultValue, setValue];
}
