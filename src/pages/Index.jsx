// Complete the Index page component here
// Use chakra-ui for styling and layout
import { Box, Button, Flex, Heading, Input, Text, VStack, Image } from "@chakra-ui/react";
import { FaCloudUploadAlt, FaMoneyBillWave, FaPlayCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading mb={4}>Video Upload Platform</Heading>
        <Text fontSize="lg" mb={8}>
          Upload your videos and earn money!
        </Text>

        <VStack spacing={4} align="stretch">
          <Input placeholder="Enter video title" size="lg" />
          <Input type="file" accept="video/*" size="lg" />
          <Button leftIcon={<FaCloudUploadAlt />} colorScheme="teal" size="lg">
            Upload Video
          </Button>
        </VStack>

        <Box mt={10}>
          <Heading size="md" mb={2}>
            Your Videos
          </Heading>
          <Flex gap={6}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src="https://images.unsplash.com/photo-1678138091332-432d4a1ac407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTQxMTAxMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Video Thumbnail" />
              <Flex align="center" mt={2}>
                <FaPlayCircle size="24px" />
                <Text ml={2}>Sample Video 1</Text>
              </Flex>
              <Button leftIcon={<FaMoneyBillWave />} colorScheme="green" mt={3} size="sm">
                Earn $10
              </Button>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
              <Image src="https://images.unsplash.com/photo-1678138091230-518b1c2ab824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx2aWRlbyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTQxMTAxMTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Video Thumbnail" />
              <Flex align="center" mt={2}>
                <FaPlayCircle size="24px" />
                <Text ml={2}>Sample Video 2</Text>
              </Flex>
              <Button leftIcon={<FaMoneyBillWave />} colorScheme="green" mt={3} size="sm">
                Earn $15
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
