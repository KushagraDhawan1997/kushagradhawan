import { Card, Flex, Grid, Heading, Text } from "@kushagradhawan/kookie-ui";
import { wompStats } from "./wompData";
import { Rocket, Users, PartyPopper } from "lucide-react";

export function WompStats() {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket />;
      case "Users":
        return <Users />;
      case "PartyPopper":
        return <PartyPopper />;
      default:
        return null;
    }
  };

  return (
    <Grid gap="3" columns={{ initial: "1", sm: "2", md: "3" }}>
      {wompStats.map((stat, index) => (
        <Card key={index} size="3" variant="classic">
          <Flex direction="column" gap="4" p="2" height="100%">
            {getIconComponent(stat.iconName)}
            <Heading size="4" weight="medium">
              {stat.value}
            </Heading>
            <Text size="3" color="gray">
              {stat.description}
            </Text>
          </Flex>
        </Card>
      ))}
    </Grid>
  );
}
