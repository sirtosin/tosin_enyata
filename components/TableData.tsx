import React from 'react'
import Card from './Card';
import SkeletonTable from "./skeleton/Table";
import Paginate from "./table/table";

interface Props {
  title: string;
  data: any;
  loading:boolean
}

export default function TableData({title,data,loading}:Props) {
  return (
    <>
      <h2 className="text-[#A4A7B7]">{title}</h2>
      <section>
        <Card>
          <div className="w-full overflow-auto sm:overflow-hidden my-3 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#98989A] p-10">
            {false ? (
              <SkeletonTable />
            ) : 2 > 0 ? (
              <Paginate data={data} />
            ) : (
              <p className="text-[#98989A] text-xl text-center capitalize font-medium">
                no data
              </p>
            )}
          </div>
        </Card>
      </section>
    </>
  );
}
