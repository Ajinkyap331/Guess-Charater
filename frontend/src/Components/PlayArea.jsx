import React from "react";
import { Select } from "antd";
import { Questions } from "../models";

export const PlayArea = () => {
  return (
    <div className="flex h-full gap-8 flex-col p-8 items-center justify-center">
      <Select
        className="w-full border-2 border-indigo-600 rounded-lg"
        defaultValue="Select Question"
        // onChange={handleChange}
        options={Questions}
      />
      <button className="bg-white px-3 py-1 rounded-xl border-2 border-indigo-600">
        I want to know this
      </button>
    </div>
  );
};
