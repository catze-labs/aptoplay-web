import { addDecorator } from "@storybook/react";
import { QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((storyFn) => (
  <RecoilRoot>
    <div
      style={{
        backgroundColor: "#414141",
        padding: 30,
        margin: 0,
      }}
    >
      {storyFn()}
    </div>
  </RecoilRoot>
));
