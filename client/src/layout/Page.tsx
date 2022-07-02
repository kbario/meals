import Box from "@suid/material/Box";
import { ParentComponent } from "solid-js";

const Page: ParentComponent = (props) => {
  return <Box class="flex flex-col w-screen h-screen">{props.children}</Box>;
};

export default Page;
