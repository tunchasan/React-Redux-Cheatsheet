import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "All Start", duration: "2:00" },
    { title: "I Want it That Way", duration: "3:05" },
    { title: "Scrubs", duration: "1:05" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
