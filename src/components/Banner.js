import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;

// import React from "react";

// export default function Banner({ childern, title, subtitle }) {
//   return (
//     <div className="banner">
//       <h1>{title}</h1>
//       <div></div>
//       <p>{subtitle}</p>
//       {childern}<div></div></div>
//     </div>
//   );
// }
