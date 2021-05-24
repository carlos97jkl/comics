import React from "react";
import { Rating } from "@material-ui/lab";
import { setScorecomic } from "../redux/actions/generales";
import { useDispatch } from "react-redux";

const Score = ({ index, rate }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Rating
        name="rating"
        value={rate}
        onChange={(event, rate) => {
          dispatch(setScorecomic(index, rate));
        }}
      />
    </div>
  );
};

export default Score;
