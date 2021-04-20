import { create3dSketch, createParams } from "./lib";

createParams({
  dimensions: [600, 600],
  animate: true,
});

create3dSketch((params) => {
  console.log(params.context);

  return () => {};
});
