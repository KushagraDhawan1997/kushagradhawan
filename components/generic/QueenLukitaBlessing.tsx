"use client";

import React, { useEffect, useState } from "react";
import { Box, Card, Flex, Text, Button, Image } from "@kushagradhawan/kookie-ui";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { SmileIcon } from "@hugeicons/core-free-icons";

export function QueenLukitaBlessing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if blessing has been accepted
    const blessingAccepted = localStorage.getItem("queenLukitaBlessingAccepted");
    if (!blessingAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptBlessing = () => {
    localStorage.setItem("queenLukitaBlessingAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      style={{
        zIndex: 1000,
      }}
    >
      <Card size="1" variant="classic" style={{ boxShadow: "var(--shadow-6)", padding: "0px", maxWidth: "320px" }}>
        <Flex direction="column">
          <Image
            src="/kookie-oil.png"
            alt="Queen Lukita"
            width="100%"
            height="400px"
            style={{
              backgroundPosition: "bottom center",
            }}
            radius="none"
          />
          <Flex gap="4" direction="column" align="center" justify="center" width="100%" p="4">
            <Flex direction="column" gap="2" align="center">
              <Text size="4" weight="medium" align="left">
                You've been blessed by Kookie, known as Queen Lukita
              </Text>
              <Text size="2" align="left" color="gray">
                Queen Kookie is the benevolent ruler of the known world. She is the first of her name and the keeper of the couch. She is the protector of the
                realm and the commander of the guard. She is the overseer of treat distribution and the eternal guardian of the household.
              </Text>
            </Flex>
            <Flex gap="2" direction="column" align="center" justify="end" width="100%">
              <Button fullWidth size="2" variant="soft" highContrast>
                <Link href="/articles/queen-lukita-lore">Queen Lukita's Lore</Link>
              </Button>
              <Button fullWidth size="2" variant="solid" highContrast onClick={handleAcceptBlessing}>
                <HugeiconsIcon icon={SmileIcon} size={16} color="currentColor" />
                Get Blessed
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
}
