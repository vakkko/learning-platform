import { useState, useEffect } from "react";

import axios from "axios";

import { BASE_URL } from "../../consts/consts";

import type { useGetDataTypes } from "./useGetData.types";

const useGetData = <T,>({ endpoint, token }: useGetDataTypes) => {
  const [data, setData] = useState<T | null>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios({
          method: "GET",
          url: `${BASE_URL}/${endpoint}`,
          headers: token ? { Authentication: `Bearer ${token}` } : {},
        });
        if (response.status === 200) setData(response.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [endpoint, token]);
  return { data };
};

export default useGetData;
