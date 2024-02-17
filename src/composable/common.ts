import {Notify} from "quasar";

export interface KeyValue {
  key: string,
  value: number
}

export const useCommon = () => {
  enum messageType {
    info,
    warning,
    error
  }

  function sleep(timeMs: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, timeMs)
    })
  }

  function showError(e: Error) {
    console.log('showError', e);
    Notify.create({
      message: e.message,
      color: "red-5",
      icon: "error",

    })
  }

  function groupBy<T>(arr: T[], fn: (item: T) => any) {
    return arr.reduce<Record<string, T[]>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = prev[groupKey] || [];
      group.push(curr);
      return {...prev, [groupKey]: group};
    }, {});
  }

  function groupByCount<T>(arr: T[], fn: (item: T) => any) {
    // const result :KeyValue[] = [];
    // if (!arr.length) return  result;
    return arr.reduce<Record<string, number>>((prev, curr) => {
      const groupKey = fn(curr);
      const group = (prev[groupKey] || 0) + 1;
      return {...prev, [groupKey]: group};
    }, {});
  }

  return {
    sleep,
    showError,
    groupBy,
    groupByCount,
    //rvList,
  };
};
