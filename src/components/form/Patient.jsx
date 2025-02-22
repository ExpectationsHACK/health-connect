import React from "react";
import {
  VStack,
  Flex,
  Heading,
  Button,
  Group,
  Box,
  Field,
  Input,
  Textarea,
  Image,
} from "@chakra-ui/react";
import {
  StepsCompletedContent,
  StepsContent,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRoot,
} from "../ui/steps";
import Hero from "../../assets/patient.svg";

const Patient = () => {
  return (
    <VStack w="100%" h="100%" align="flex-start" gap="50px" px="100px">
      <Flex w="100%" justify="space-between" align="center" pt="50px">
        <Heading fontSize="34px" color="#007299">
          HealthConnect
        </Heading>
      </Flex>

      <Flex w="100%" justify="space-between" align="center" gap="50px">
        <Image src={Hero} w="50%" h="80vh" rounded="12px"></Image>

        <StepsRoot w="50%" defaultStep={0} count={3}>
          <VStack w="100%" align="flex-start" gap="50px">
            <StepsList w="100%">
              <StepsItem index={0} title="Step 1" />
              <StepsItem index={1} title="Step 2" />
              <StepsItem index={2} title="Step 3" />
            </StepsList>
  
            <StepsContent color="#000" index={0}>
              <Box w="100%" px="30px" rounded="12px">
                <VStack w="100%" align="flex-start">
                  <Heading>Symptoms Checker</Heading>
                  <VStack w="100%" align="flex-start" gap="20px">
                    <Flex w="100%" justify="space-between" align="flex-start" gap="20px">
                      <Field.Root>
                        <Field.Label>Full Name</Field.Label>
                        <Input type="text" placeholder="Full Name" />
                        <Field.HelperText />
                        <Field.ErrorText />
                      </Field.Root>
                      <Field.Root>
                        <Field.Label>Age</Field.Label>
                        <Input type="text" placeholder="Age" />
                        <Field.HelperText />
                        <Field.ErrorText />
                      </Field.Root>
                    </Flex>
                    <Field.Root>
                      <Field.Label>Current Symptoms</Field.Label>
                      <Textarea
                        type="text"
                        placeholder="Describe your symtoms in details..."
                      />
                      <Field.HelperText />
                      <Field.ErrorText />
                    </Field.Root>
                    <Field.Root>
                      <Field.Label>Current Medications</Field.Label>
                      <Textarea
                        type="text"
                        placeholder="List any medications you're currently take..."
                      />
                      <Field.HelperText />
                      <Field.ErrorText />
                    </Field.Root>
                  </VStack>

                  <StepsNextTrigger asChild w="100%">
                <Button variant="outline" size="sm">
                  Get AI Assessment
                </Button>
              </StepsNextTrigger>
                </VStack>
              </Box>
            </StepsContent>
            <StepsContent color="#000" index={1}>
              Step 2
            </StepsContent>
            <StepsContent color="#000" index={2}>
              Step 3
            </StepsContent>
            <StepsCompletedContent>All steps are complete!</StepsCompletedContent>
  
            <Group>
              {/* <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Prev
                </Button>
              </StepsPrevTrigger> */}
              <StepsNextTrigger asChild w="100%">
                <Button variant="outline" size="sm">
                  Get AI Assessment
                </Button>
              </StepsNextTrigger>
            </Group>
          </VStack>
        </StepsRoot>
      </Flex>
    </VStack>
  );
};

export default Patient;
