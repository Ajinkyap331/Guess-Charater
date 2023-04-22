import React, { useState } from "react";
import { QuestionModel } from "./QuestionModel";
import { GuessMovie } from "./GuessMovie";
import { Success } from "./Success";
import { useStateValue } from "../context/StateProvider";

export const PlayArea = () => {
  const [{ movie }, dispatch] = useStateValue();
  const [showsuccess, setsuccess] = useState(false);

  return (
    <div className="flex h-full gap-8 flex-col p-8 items-center justify-center">
      <div>
        <p className="text-xl font-bold">Description :</p> {movie.description}
      </div>
      <GuessMovie setsuccess={setsuccess} />
      <QuestionModel />
      {showsuccess && (
        <Success showsuccess={showsuccess} setsuccess={setsuccess} />
      )}
    </div>
  );
};
