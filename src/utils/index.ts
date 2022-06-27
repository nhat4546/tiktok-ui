import { useDebouncedCallback } from "use-debounce";

export const HanldeUseDebound = (
  callBack: (value: any) => Promise<void>,
  time: number
) => useDebouncedCallback(callBack, time);
