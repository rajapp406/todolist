import { useState } from "react";

export function useSanatizeFilter(intialVal) {
    const [filter, setFilter] = useState(intialVal);
    const setSanatizerFilter = (filter) => {
      setFilter({ ...filter, title: filter.title.trim() });
    };
    return [filter, setSanatizerFilter];
  }