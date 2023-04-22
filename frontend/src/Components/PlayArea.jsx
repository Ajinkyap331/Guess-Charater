import React, { useState } from "react";
import { QuestionModel } from "./QuestionModel";
import { GuessMovie } from "./GuessMovie";
import { Success } from "./Success";

export const PlayArea = () => {
  const [showsuccess, setsuccess] = useState(false);

  return (
    <div className="flex h-full gap-8 flex-col p-8 items-center justify-center">
      <div>
        <p className="text-xl font-bold">Description :</p> The residents of a
        housing society help each other find solutions when they face common,
        real-life challenges and get involved in sticky situations.
      </div>
      <GuessMovie setsuccess={setsuccess} />
      <QuestionModel />
      {showsuccess && <Success showsuccess = {showsuccess} setsuccess={setsuccess} />}
    </div>
  );
};
