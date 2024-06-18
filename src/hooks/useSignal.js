import { useMemo } from "react";

const useSignal = () => {
  const controller = useMemo(() => new AbortController(), []);
  return useMemo(() => [controller, controller.signal], [controller]);
};

export default useSignal;
