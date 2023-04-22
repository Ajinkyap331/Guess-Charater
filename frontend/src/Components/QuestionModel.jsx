import React, { useState } from "react";
import { Modal, Button } from "antd";
import { Select } from "antd";
import { Questions } from "../models";

export const QuestionModel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button
        onClick={showModal}
        className="bg-white px-3 py-1 rounded-xl border-2 border-indigo-600"
      >
        I want some Hints
      </button>
      <Modal
        title="Select the  Question you want to ask"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            // onClick={() => {
            //   handleCancel();
            // }}
          >
            Ask
          </Button>,
        ]}
      >
        <Select
          className="w-full border-2 border-indigo-600 rounded-lg"
          defaultValue="Select Question"
          showSearch
          placeholder="Select a person"
          optionFilterProp="children"
        //   onChange={onChange}
        //   onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={Questions.map((question) => {
            return {
              value: question,
              label: question,
            };
          })}
        />
      </Modal>
    </div>
  );
};
