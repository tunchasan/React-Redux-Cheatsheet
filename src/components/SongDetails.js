import React from "react";
import { connect } from "react-redux";

function SongDetails({ song }) {
  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>{song.title}</h3>
      <h3>{song.duration}</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
