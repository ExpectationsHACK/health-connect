import {
  VStack,
  Heading,
  Text,
  Flex,
  Button,
  Card,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Patient = () => {
  const cards = [
    {
      title: "Start New Assessment",
      description: "Get AI-powered advice",
      cta: "New Assessment",
      url: "/patient/check-symptoms",
    },
    {
      title: "Chat with AI",
      description: "Get immediate guidance",
      cta: "Check",
      url: "/patient/check-symptoms",
    },
    {
      title: "Book Consultation",
      description: "Schedule with a doctor",
      cta: "Book Now",
      url: "/patient/appointment/book",
    },
    {
      title: "Medicine Reminders",
      description:
        "Keep Track of your medication",
      cta: "Add Medicine",
      url: "/patient/reminder",
    },
  ];
  return (
    <VStack w="100%" h="100%" align="flex-start" gap="100px" px="100px">
      <Flex w="100%" justify="space-between" align="center" pt="50px">
        <Heading fontSize="34px" color="#007299">
          HealthConnect
        </Heading>
        <VStack w="100%" align="flex-end" gap="0">
          <Heading fontSize="20px">Welcome, John</Heading>
          <Text fontSize="14px">
            Your next appointment with Dr. Billy is in 2 days
          </Text>
        </VStack>
      </Flex>
      <VStack w="100%" align="flex-start" gap="50px">
        <Flex w="100%" justify="space-between" align="flex-start">
          {cards.map((card, index) => (
            <Card.Root width="250px">
              <Card.Body gap="2">
                <Image></Image>
                <Card.Title mt="2">{card.title}</Card.Title>
                <Card.Description>{card.description}</Card.Description>
              </Card.Body>
              <Card.Footer w="100%" justifyContent="flex-end">
                <Button w="100%" variant="outline">
                  {card.cta}
                </Button>
              </Card.Footer>
            </Card.Root>
          ))}
        </Flex>
      </VStack>
    </VStack>
  );
};

export default Patient;
