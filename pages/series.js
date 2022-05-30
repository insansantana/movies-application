import React from "react";
import Movies from "../components/Movies";
import data from "../data/movies.json";

const Series = () => {
  return (
    <div className="overflow-x-hidden">
      <Movies movies={data.movies} />
    </div>
  );
};

export default Series;
