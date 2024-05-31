"use client";
import { type FC } from "react";

// import Link from "next/link";

import { Stack, Box, Text, Link, HStack } from "@chakra-ui/react";

const EvntFiLogo: FC = () => {
  return (
    <Link href="/" target="_blank" rel="noopener noreferrer">
      <Box as="footer" p={"0rem"} position="sticky" bottom={0} zIndex={10} textAlign={"center"}>
        <HStack>
          <Text fontFamily="Cutive Mono" fontWeight="regular" fontSize="150px" color="#000000">
            evnt.
          </Text>
          <Text fontFamily="Damion" fontWeight="regular" fontSize="150px" color="#000000">
            fi
          </Text>
        </HStack>
      </Box>
    </Link>
  );
};

export default EvntFiLogo;
