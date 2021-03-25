import {useEffect} from "react";

export const useDataHandler = <T>(
  data: T | void | null, callback: (value: T) => any, deps: any[] = [],
) => {

  useEffect(() => {
    if (data) {
      callback(data);
    }
  }, [data, ...deps]);
};
