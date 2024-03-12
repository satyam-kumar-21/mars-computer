import React from "react";
import AdminNav from "../AdminNav";
import BatchCardAdmin from "./BatchCardAdmin";

function AdminBatches() {
  return (
    <div className="pt-14 flex">
      <AdminNav />

      <div className="flex flex-col pt-4 pl-2">
        <button className="font-bold bg-gray-400 items-center p-2 rounded">
          Create new batch
        </button>

        <div className="flex flex-wrap justify-around w-full">
          <BatchCardAdmin />
          <BatchCardAdmin />
          <BatchCardAdmin />
        </div>
      </div>
    </div>
  );
}

export default AdminBatches;
