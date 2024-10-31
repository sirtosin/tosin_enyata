"use client";
import React from "react";
import { getApi } from "../services";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useStateContext } from "@/context/context";

export default function useFilm() {
  const { setEdit,edit, editData } = useStateContext();

  const fetchFilms = async () => {
    try {
      const resp = await getApi("films");
      console.log("resp", resp);
      return resp;
    } catch (error) {
      console.error("Er", error);
    }
  };
  const films = useQuery({
    queryKey: ["films"],
    queryFn: fetchFilms,
    refetchOnReconnect: true,
    retry: 5,
    retryDelay: 100,
    staleTime: 5000,
    refetchOnMount: true,
    refetchInterval: 120000, // 2 minutes
    refetchIntervalInBackground: true,
    placeholderData: keepPreviousData,
    onSuccess: (data) => {
      console.log("data", data);
    },

    onError: (error: any) => console.error(error),
  });
  return {
    films,
    setEdit,
    edit,
    editData,
  };
}
