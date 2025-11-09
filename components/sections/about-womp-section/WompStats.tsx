import { Card, Flex, Grid, Heading, Separator, Text } from "@kushagradhawan/kookie-ui";
import { wompStats } from "./wompData";
import { Rocket, Users, Box } from "lucide-react";

export function WompStats() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket />;
      case "Users":
        return <Users />;
      case "Box":
        return <Box />;
      default:
        return null;
    }
  };

  return (
    <Grid gap="4" columns={{ initial: "1", sm: "3", md: "3" }}>
      {wompStats.map((stat, index) => (
        <Flex gap="4" key={index} direction={{ initial: "column", sm: "row" }}>
          {/* <Card key={index} size="3" variant="ghost"> */}
          <Flex align="center" direction="column" gap="3" p="2" height="100%">
            {getIconComponent(stat.iconName)}
            <Heading size="5" weight="medium">
              {stat.value}
            </Heading>
            <Text align="center" size="4" color="gray">
              {stat.description}
            </Text>
          </Flex>
          {/* </Card> */}
          {index < wompStats.length - 1 && <Separator size="4" orientation={{ initial: "horizontal", sm: "vertical" }}></Separator>}
        </Flex>
      ))}
    </Grid>
  );
}
