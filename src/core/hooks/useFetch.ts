import axiosInstance from "core/api/config";
import { useQuery } from "react-query";

const configs = {
  refetchOnWindowFocus: false,
};

function useFetch({ url = "", params = {}, initialData = {} }) {
  const { isFetching, isLoading, data, error, ...query } = useQuery(
    url,
    asyncFunc,
    configs
  );
  const resultData = !data ? initialData : data;

  async function asyncFunc() {
    const fetchAPI = await axiosInstance.get(url, { ...params });

    return fetchAPI.data;
  }
  return {
    isLoadingOrFetching: isLoading || isFetching,
    data: resultData,
    error,
    ...query,
  };
}

export default useFetch;
