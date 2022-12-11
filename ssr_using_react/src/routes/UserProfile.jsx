import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Flex,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../store/UserActions";
function UserProfile() {
  const { data } = useSelector((store) => store.user);

  const navigate = useNavigate();
  const [formData, setformData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleUpdate = () => {
    onOpen();
  };
  const postUser = async (id) => {
    const { email: emu, fullname: huru, password: pasu } = formData;
    if (!emu || !huru || !pasu) {
      alert("please enter all the required fields");
    }
    const { fullname, email, password } = formData;
    try {
      let resp = await axios.patch(
        `https://mock-v41w.onrender.com/users/${id}`,
        {
          fullname: fullname,
          email: email,
          password: password,
        }
      );
      const { data } = resp;
      dispatch(userLogin(data));
      toast({
        title: "Updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } catch (e) {
      alert("Login failure");
    }
  };
  const handleSubmit = (id) => {
    postUser(id);
  };
  const handleDelete = async (id) => {
    try {
      let resp = await axios.delete(
        `https://mock-v41w.onrender.com/users/${id}`
      );
      toast({
        title: "Deleted successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Center>
      <Center w={"50%"} h={"60%"}>
        <Box
          height={"100%"}
          w={"100%"}
          rounded={"lg"}
          p={6}
          textAlign={"center"}
        >
          <Avatar
            size={"xl"}
            src={data.img}
            alt={"Avatar Alt"}
            mb={4}
            pos={"relative"}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: "green.300",
              border: "2px solid white",
              rounded: "full",
              pos: "absolute",
              bottom: 0,
              right: 3,
            }}
          />
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            @{data.username}
          </Heading>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {data.fullname}
          </Heading>
          <Text fontWeight={600} color={"gray.500"} mb={4}>
            {data.email}
          </Text>
          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              color={"white"}
              bg={"blackAlpha.500"}
              _focus={{
                bg: "black.200",
              }}
            >
              Followers {"23"}
            </Button>
            <Button
              flex={1}
              fontSize={"md"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Following {"23"}
            </Button>
          </Stack>
          <Stack mt={8} direction={"row"} spacing={4}>
            <Button
              onClick={handleUpdate}
              flex={1}
              color={"white"}
              fontSize={"sm"}
              rounded={"full"}
              bg={"green.300"}
              _focus={{
                bg: "green.300",
              }}
            >
              Edit Profile
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Edit Profile</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex direction={"column"} align="start" p={"3"} gap={"3"}>
                    <Heading>Sign In</Heading>
                    <Text fontSize={"sm"} align={"start"}>
                      full Name{" "}
                    </Text>
                    <Input
                      type={"text"}
                      name={"fullname"}
                      onChange={handleChange}
                      placeholder="Enter your full Name"
                    ></Input>

                    <Text fontSize={"sm"} align={"start"}>
                      EMAIL ID{" "}
                    </Text>
                    <Input
                      type={"text"}
                      name={"email"}
                      onChange={handleChange}
                      placeholder="Enter your Email Id"
                    ></Input>
                    <Text fontSize={"sm"}>Password</Text>
                    <Input
                      type={"text"}
                      name={"password"}
                      onChange={handleChange}
                      placeholder="Enter Your Password"
                    ></Input>

                    <Button
                      onClick={() => handleSubmit(data.id)}
                      color={"white"}
                      size={"lg"}
                      width={"100%"}
                      bg={"#24AEB1"}
                    >
                      Update
                    </Button>
                  </Flex>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Button
              flex={1}
              fontSize={"md"}
              rounded={"full"}
              bg={"red.500"}
              color={"white"}
              onClick={() => handleDelete(data.id)}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              Delete Account
            </Button>
          </Stack>
        </Box>
      </Center>
    </Center>
  );
}

export default UserProfile;
