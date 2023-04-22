import React from "react";
import { Button, Result } from "antd";

export const Success = ({ showsuccess, setsuccess }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen grid place-items-center bg-slate-500">
      <div className="bg-white rounded-md">
        <Result
          status="success"
          title="Guessed the Character Correctly"
          subTitle= {`Your Guessed Movie is : ${showsuccess}`}
          extra={[<Button onClick={() => setsuccess(false)}>Close</Button>]}
        />
      </div>
    </div>
  );
};
