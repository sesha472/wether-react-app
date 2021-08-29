import React, { useState } from "react";
import Emojidata from "./emoji.json";

const Emoji = () => {
  const [search, setsearch] = useState("");
//   const [data, setdata] = useState([]);
  console.log(search);

  // useEffect(() => {
  //     let items=Emojidata.filter(symb=>symb.title.toLowerCase().includes(search.toLowerCase()));
  //   setdata(items);
  // }, [search])

  return (
    <div>
      <input
        type="text"
        placeholder="enter emoji name"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      {Emojidata.filter((symb) =>
        symb.title.toLowerCase().includes(search.toLowerCase())
      ).map((item) => (
        <li
          style={{
            textAlign: "left",
            listStyleType: "none",
            margin: "40px ",
            border: "3px solid red",
          }}
        >
          <li onClick={() => {navigator.clipboard.writeText(item.symbol);alert("copied the symbole")} }>
            {item.symbol}
          </li>
          {item.title}
        </li>
      ))}
    </div>
  );
};

export default Emoji;
