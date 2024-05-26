import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import themeDefault from "../src/components/particles/themeDefault";
import { GlobalStyles } from "../src/components/particles/globalStyles";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
