import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorsli = colors.map((item) => {
    return <li style={{color: item}}>{item}</li>
  })

   return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* {colorsli} */}
      </ol>
    </div>
  );
}

export default ColorList;
