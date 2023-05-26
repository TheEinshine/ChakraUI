import React from "react";
import {
  ChakraProvider,
  Box,
  Heading,
  Stack,
  Input,
  Select,
  WrapItem,
  Button,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Radio,
  RadioGroup,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Divider,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider>
      <Flex alignItems={"baseline"} minWidth={"-webkit-fit-content"}>
        <Box mt={2} w={"100%"} p={10}>
          <Heading as="h1">Welcome</Heading>
          <Tabs>
            <TabList>
              <Tab>Deposits</Tab>
              <Tab>Withdrawals</Tab>
              <Tab>Journal</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>Deposit!</p>
              </TabPanel>
              <TabPanel>
                <p>Withdrawals!</p>
              </TabPanel>
              <TabPanel>
                <p>Journal!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box p={"3%"}>
            <Text fontSize={"sm"} as={"b"}>
              Cash Account
            </Text>
            <Text fontWeight={"light"}>8541235895 - John A.</Text>
          </Box>
          <Box>
            <RadioGroup>
              <Text
                paddingRight={"10"}
                as={"p"}
                fontSize={"80%"}
                fontWeight={"semibold"}
              >
                Deposit Type
              </Text>
              <Stack direction={"row"} paddingTop={"1%"}>
                <Radio value="1">ACF</Radio>
                <Radio value="2">Wire Transfer</Radio>
                <Radio value="3">Account Transfer</Radio>
              </Stack>
            </RadioGroup>
            <Box>
              <Text as={"p"} fontSize={"sm"} mb={"8px"} paddingTop={"1%"}>
                Banking Info
              </Text>
              <Select
                _placeholder={""}
                placeholder="All Assets"
                style={{ fontWeight: "inherit", opacity: "0.7" }}
              >
                <option value="option1">All Assets</option>
                <option value="option2">Some Assets</option>
                <option value="option3">Few Assets</option>
                <option value="option4">Abhi a Junior</option>
              </Select>

              <Text as={"p"} fontSize={"sm"} mb={"8px"} paddingTop={"1%"}>
                Amount
              </Text>
              <Input placeholder="$500.0" />
              <Text as={"p"} fontSize={"sm"} mb={"8px"} paddingTop={"1%"}>
                Frequency
              </Text>
              <Select
                placeholder="One Time"
                style={{ fontWeight: "inherit", opacity: "0.7" }}
              >
                <option value="option1">Weekly</option>
                <option value="option2">Every Other Week</option>
                <option value="option3">Monthly</option>
                <option value="option4">Quarterly</option>
                <option value="option5">Annually</option>
              </Select>
            </Box>

            <Box>
              <Text
                paddingRight={"10"}
                as={"p"}
                fontSize={"90%"}
                fontWeight={"semibold"}
                paddingTop={"1%"}
              >
                Transaction Type
              </Text>
              <RadioGroup defaultValue="1">
                <Stack spacing={2} direction="row" paddingTop={"1%"}>
                  <Radio value="30">30 Days Rollover</Radio>
                  <Radio value="60">60 Days Rollover</Radio>
                  <Radio value="90">90 Days Rollover</Radio>
                </Stack>
              </RadioGroup>
              <Box paddingRight={1} paddingTop={"1%"}>
                <WrapItem paddingTop={"1%"}>
                  <Button colorScheme="pink">Continue</Button>
                </WrapItem>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box p={"3%"}>
          <Box paddingLeft={5}>
            <Heading as="h4" size="md">
              Account Balance
            </Heading>
            <WrapItem paddingTop={4}>
              <Stack spacing={4}>
                <Box style={{ position: "relative" }}>
                  <Text>Account Number</Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "335%",
                    }}
                  >
                    {"8541235895"}
                  </Text>
                </Box>
                <Box style={{ position: "relative" }}>
                  <Text>Account Name</Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "351%",
                    }}
                  >
                    {"John_A."}
                  </Text>
                </Box>
                <Box style={{ position: "relative" }}>
                  <Text>Total Account Value</Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "350%",
                    }}
                  >
                    {"$500.00"}
                  </Text>
                </Box>
                <Box style={{ position: "relative" }}>
                  <Text>Cost Available for Withdrawal</Text>
                  <Text
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "350%",
                    }}
                  >
                    {"$500.00"}
                  </Text>
                </Box>
                <Link paddingTop={5} color="teal.500" href="#">
                  Go to Balance
                </Link>
              </Stack>
            </WrapItem>
          </Box>
          <Box>
            <TableContainer>
              <Table variant="unstyled">
                <Thead>
                  <Tr>
                    <Th>Date</Th>
                    <Th>Account Number</Th>
                    <Th>Account Name</Th>
                    <Th>Transaction Type</Th>
                    <Th>Net Amount</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>05/02/2023</Td>
                    <Td>DB7856985412</Td>
                    <Td>Demat</Td>
                    <Td>Deposited</Td>
                    <Td>$ 541.00</Td>
                    <Td>Completed</Td>
                  </Tr>
                  <Tr>
                    <Td>05/02/2023</Td>
                    <Td>DB7856985412</Td>
                    <Td>Demat</Td>
                    <Td>Deposited</Td>
                    <Td>$ 541.00</Td>
                    <Td>Completed</Td>
                  </Tr>
                  <Tr>
                    <Td>05/02/2023</Td>
                    <Td>DB7856985412</Td>
                    <Td>Demat</Td>
                    <Td>Journal</Td>
                    <Td>$ 541.00</Td>
                    <Td>Completed</Td>
                  </Tr>
                  <Tr>
                    <Td>05/02/2023</Td>
                    <Td>DB7856985412</Td>
                    <Td>Demat</Td>
                    <Td>Withdraw</Td>
                    <Td>$ 541.00</Td>
                    <Td>Upcoming</Td>
                  </Tr>
                  <Tr>
                    <Td>05/02/2023</Td>
                    <Td>DB7856985412</Td>
                    <Td>Demat</Td>
                    <Td>Journal</Td>
                    <Td>$ 541.00</Td>
                    <Td>Completed</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
      <Box>
        <Heading textAlign={'center'}>Made with Chakra UI ✌️</Heading>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
