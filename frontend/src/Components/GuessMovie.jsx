import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { Select } from "antd";
import { Movies } from "../models";

export const GuessMovie = ({ setsuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let selectedmovie = "";
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    setsuccess(selectedmovie);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    return () => {
      alert("Destrctor called");
    };
  }, []);

  return (
    <div>
      <button
        onClick={showModal}
        className="bg-white px-3 py-1 rounded-xl border-2 border-indigo-600"
      >
        I can Guess the Movie
      </button>
      <Modal
        title="Select the Movie you are guessing"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            onClick={() => {
              handleOk();
            }}
          >
            Select
          </Button>,
        ]}
      >
        <Select
          className="w-full border-2 border-indigo-600 rounded-lg"
          defaultValue="Select Movie"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={(e) => (selectedmovie = e)}
          //   onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={Movies.map((movie) => {
            return {
              value: movie,
              label: movie,
            };
          })}
        />
      </Modal>
    </div>
  );
};
