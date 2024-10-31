"use client";
import DashboardCard from "@/components/DashboardCard";
import React from "react";
import TableData from "@/components/TableData";
import useFilm from "@/hooks/useFilm";
import Details from "@/components/Details";

export default function page() {
  const { films, setEdit, edit, editData } = useFilm();
  return (
    <div>
      {edit ? (
        <Details type="film" data={editData} />
      ) : (
        <>
          <div className="flex space-x-2 flex-wrap">
            <DashboardCard title="Films" color="#A9FFE0" />
            <DashboardCard title="Starship" color="#A9C1FF" />
            <DashboardCard title="People" color="#FFA9EC" />
            <DashboardCard title="Species" color="#FDFFA9" />
          </div>
          <TableData loading={false} title="Films" data={data} />
        </>
      )}
    </div>
  );
}

export const data = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
  },
];
