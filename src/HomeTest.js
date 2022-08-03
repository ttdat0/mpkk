import { View, Text, Center,HStack,VStack,Button,Input,Select,CheckIcon, Popover, useToast , Box, Heading, FlatList, Avatar, Spacer} from 'native-base'
import React,{useState} from 'react'
import { Alert } from "react-native";

const HomeTest = () => {
  const Toast = useToast();
  const [po, setPo] = useState('');
  let [service, setService] = useState("");

  const data = [{
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    fullName: "Aafreen Khan",
    timeStamp: "12:47 PM",
    recentText: "Good Day!",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  }, {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    fullName: "Sujitha Mathur",
    timeStamp: "11:11 PM",
    recentText: "Cheer up, there!",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU"
  }, {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    fullName: "Anci Barroco",
    timeStamp: "6:22 PM",
    recentText: "Good Day!",
    avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg"
  }, {
    id: "68694a0f-3da1-431f-bd56-142371e29d72",
    fullName: "Aniket Kumar",
    timeStamp: "8:56 PM",
    recentText: "All the best",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU"
  }, {
    id: "28694a0f-3da1-471f-bd96-142456e29d72",
    fullName: "Kiara",
    timeStamp: "12:47 PM",
    recentText: "I will call today.",
    avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
  }];

    const showConfirmDialog = () => {
      return Alert.alert(
        "Are your sure?",
        "Are you sure you want to remove this beautiful box?",
        [
          // The "Yes" button
          {
            text: "Yes",
            onPress: () => {
              // setShowBox(false);
              // alert("Ban da xoa thanh cong " + po);
              Toast.show({
                render: () => {
                  return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                          Bạn đã xoá thành công
                        </Box>;
                }
              });
              setPo('');
            },
          },
          // The "No" button
          // Does nothing but dismiss the dialog when tapped
          {
            text: "No",
          },
        ]
      );
    };

  return (
    <View style={{ flex:1}}>
      <Center>
        <View style={{backgroundColor:'#3700B3', width:'100%', height:100, alignItems: 'center',justifyContent: 'center'}}>
                <Text color="white" fontSize="36" fontWeight="bold">
                    Home
                </Text>
        </View>
        <View space={2} alignItems="center" style={{margin:10}}>
            <VStack space={2} alignItems="center">
                <HStack space={2}>
                <Popover trigger={triggerProps => {
                return <Button title="Delete" onPress={() => showConfirmDialog()} >
                        Delete 
                       </Button>; }}>
                </Popover>
                    <Input value={po} onChangeText={setPo} w="75%" placeholder=" " />
                </HStack>
                <HStack space={2} alignItems="center">
                    <Text>Line</Text>
                    <Input  w="30%" placeholder="Line" />
                    <Text>Mini Line</Text>
                    <Select selectedValue={service} width="150" accessibilityLabel="Chọn Mini Line" placeholder="Chọn Mini Line" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                            }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                                <Select.Item label="001" value="num1" />
                                <Select.Item label="002" value="num2" />
                                <Select.Item label="003" value="num3" />
                                <Select.Item label="004" value="num4" />
                                <Select.Item label="005" value="num5" />
                                <Select.Item label="006" value="num6" />
                    </Select>
                </HStack>
            </VStack>
        </View>
     </Center>
     <View>
              <Box>
                <Heading fontSize="xl" p="4" pb="3">
                  List Item
                </Heading>
                  <FlatList data={data} renderItem={({
                            item
                          }) => <Box borderBottomWidth="1" _dark={{
                            borderColor: "gray.600"
                          }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                                  <HStack space={3} justifyContent="space-between">
                                    <Avatar size="48px" source={{
                                uri: item.avatarUrl
                              }} />
                                    <VStack>
                                      <Text _dark={{
                                  color: "warmGray.50"
                                }} color="coolGray.800" bold>
                                        {item.fullName}
                                      </Text>
                                      <Text color="coolGray.600" _dark={{
                                  color: "warmGray.200"
                                }}>
                                        {item.recentText}
                                      </Text>
                                    </VStack>
                                    <Spacer />
                            <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                      }} color="coolGray.800" alignSelf="flex-start">
                              {item.timeStamp}
                            </Text>
                </HStack>
              </Box>} keyExtractor={item => item.id} />
                </Box>
          </View>
    </View>
  )
}

export default HomeTest