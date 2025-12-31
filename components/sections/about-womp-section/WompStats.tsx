import React from "react";
import { Card, Flex, Grid, Heading, Separator, Text, Box } from "@kushagradhawan/kookie-ui";
import { wompStats } from "./wompData";
import { HugeiconsIcon } from "@hugeicons/react";
import { Rocket01Icon, UserGroup02Icon, DeliveryBox01Icon } from "@hugeicons/core-free-icons";

export function WompStats() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <HugeiconsIcon icon={Rocket01Icon} size={24} color="currentColor" />;
      case "Users":
        return <HugeiconsIcon icon={UserGroup02Icon} size={24} color="currentColor" />;
      case "Box":
        return <HugeiconsIcon icon={DeliveryBox01Icon} size={24} color="currentColor" />;
      default:
        return null;
    }
  };

  return (
    <Flex direction={{ initial: "column", sm: "row" }} gap="0" align="stretch" width="100%">
      {wompStats.map((stat, index) => (
        <React.Fragment key={index}>
          <Flex
            direction="column"
            align="center"
            gap="3"
            p="6"
            height="100%"
            style={{
              flex: "1 1 0",
              minWidth: 0,
            }}
          >
            {getIconComponent(stat.iconName)}
            <Heading size="3" weight="medium">
              {stat.value}
            </Heading>
            <Text align="center" size="3" color="gray">
              {stat.description}
            </Text>
          </Flex>
          {index < wompStats.length - 1 && (
            <>
              {/* Horizontal separator for mobile */}
              <Box display={{ initial: "block", sm: "none" }} width="100%">
                <Separator size="4" orientation="horizontal" />
              </Box>
              {/* Vertical separator for desktop */}
              <Box display={{ initial: "none", sm: "block" }}>
                <Separator size="4" orientation="vertical" />
              </Box>
            </>
          )}
        </React.Fragment>
      ))}
    </Flex>
  );
}
