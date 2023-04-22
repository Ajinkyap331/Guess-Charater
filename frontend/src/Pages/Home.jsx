import React, { useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { useState } from "react";
import { Timer } from "../Components/Timer";
import { PlayArea } from "../Components/PlayArea";
import { Spin } from "antd";
import axios from "axios";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

export const Home = () => {
  const [startGame, setStartGame] = useState(true);
  const [{ movie }, dispatch] = useStateValue();

  const getRandomMovieData = async () => {
    console.log("called");
    await axios
      .get("http://localhost:4000/api/moviename/getone")
      .then((data) => {
        dispatch({
          type: actionType.SET_MOVIE,
          movie: data.data.movie[0],
        });
      });
  };

  const getAllMovieData = async () => {
    await axios
      .get("http://localhost:4000/api/moviename/getAll")
      .then((data) => {
        dispatch({
          type: actionType.SET_ALL_MOVIES,
          allMovies: data.data.movie,
        });
        console.log(data.data.movie);
      });
  };

  useEffect(() => {
    getRandomMovieData();
    getAllMovieData();
  }, []);

  return (
    <div className=" h-screen w-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Navbar />
      <div className="flex">
        <section className="w-2/5 h-[calc(100vh-70px)] grid place-items-center">
          {startGame ? (
            <>
              <div className="text-white text-3xl">Try to Guess The Movie</div>
            </>
          ) : (
            <>
              <Timer />
            </>
          )}
        </section>
        <section className="w-3/5 h-[calc(100vh-70px)] grid place-items-center">
          {startGame ? (
            <>
              <button
                onClick={() => setStartGame(false)}
                className="bg-white px-3 py-2 rounded-xl border-2 border-indigo-600"
              >
                Start the Game
              </button>
            </>
          ) : (
            <>
              <div className="bg-white h-3/5 w-2/5 rounded-xl border-2 border-indigo-600">
                <PlayArea />
              </div>
            </>
          )}
        </section>
        {/* <section>
          <Spin tip="Loading" size="small">
            <div className="content" />
          </Spin>
        </section> */}
      </div>
    </div>
  );
};
