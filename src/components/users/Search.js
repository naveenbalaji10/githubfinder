import React, { useContext, useState } from "react";
import GithubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/AlertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const handleSearch = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="search users.."
          value={text}
          onChange={handleSearch}
        />
        <input
          type="submit"
          className="btn btn-dark btn-block"
          value="search"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
          style={{ marginBottom: "10px" }}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default Search;
