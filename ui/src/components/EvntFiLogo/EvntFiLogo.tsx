"use client";
import { type FC } from "react";

// import Link from "next/link";

import { Stack, Box, Text, Link } from "@chakra-ui/react";

const EvntFiLogo: FC = () => {
  return (
    // <Stack width="600px" height="206.25px" maxWidth="100%">
    //   <Stack width="564px" height="206.25px" maxWidth="100%">
    <Link
      href="/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box as="footer" p={"1rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
        <Stack width="363.75px" height="165px" maxWidth="100%">
          <Stack width="363.75px" height="165px" maxWidth="100%">
            <Text fontFamily="Cutive Mono" fontWeight="regular" fontSize="150px" color="#000000">
              evnt.
            </Text>
          </Stack>
        </Stack>
        <Stack width="98.25px" height="206.25px">
          <Text fontFamily="Damion" fontWeight="regular" fontSize="150px" color="#000000">
            fi
          </Text>
        </Stack>
      </Box>
    </Link>
    //   </Stack>
    // </Stack>
  );
};

export default EvntFiLogo;
