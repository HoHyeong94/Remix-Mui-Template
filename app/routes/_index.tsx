import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Typography } from "@mui/material";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {

  return "a"
}

export default function Index() {
  return (
    <React.Fragment>
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Material UI Remix in TypeScript example
      </Typography>
    </React.Fragment>
  );
}
