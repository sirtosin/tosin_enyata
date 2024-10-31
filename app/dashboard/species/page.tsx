"use client";

import Details from "@/components/Details";
import TableData from "@/components/TableData";
import useFilm from "@/hooks/useFilm";
import React from "react";
import { data } from "../page";

export default function page() {
  const { films, setEdit, edit, editData } = useFilm();

  return (
    <div className="p-10">
      {edit ? (
        <Details type="species" data={editData} />
      ) : (
        <>
          <TableData loading={false} title="Species" data={data} />
        </>
      )}
    </div>
  );
}
