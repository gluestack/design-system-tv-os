import React from "react";
import { Box, Center } from "../core-components";
import { StyledProvider, useColorMode } from "@gluestack-style/react";
import { GluestackUIProvider } from "../core-components";
import { config } from "../core-components/GluestackUIProvider/config";

// const Provider = createProvider({ StyledProvider }) as any;
// Provider.displayName = "Provider";

const Wrapper = ({ children, ...props }: any) => {
  const colorMode = useColorMode();
  return (
    <GluestackUIProvider colorMode="light">
      <Box
        sx={{
          _ios: {
            h: "100%",
          },
        }}
        {...props}
      >
        <Box
          height="100%"
          w={"100%"}
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Box>
      </Box>
    </GluestackUIProvider>
  );
};

export default Wrapper;
