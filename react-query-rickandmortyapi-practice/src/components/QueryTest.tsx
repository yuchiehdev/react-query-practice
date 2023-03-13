import { useQuery } from "react-query";
import { useState } from "react";
import { fetchCharacters } from "../api/queryTestApi";
import { useSelector, useDispatch } from "react-redux";

const QueryTest = () => {
  const count = useSelector((state: any) => state.counter.count);
  const { data } = useQuery(
    ["characters", count],
    () => fetchCharacters(count),
    {
      refetchInterval: 100000,
    }
  );
  console.log(data?.info);
  return <div>QueryTest</div>;
};

export default QueryTest;
