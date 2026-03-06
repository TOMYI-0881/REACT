import React from "react";

interface props {
  title: string;
}

export const MyTitle = React.memo(({ title }: props) => {
  console.log("MyTitle re-render");
  return <h1 className="text-3xl">{title}</h1>;
});
