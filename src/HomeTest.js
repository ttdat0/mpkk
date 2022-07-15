import { View, Text, Center,HStack,VStack,Button,Input,Select,CheckIcon, Popover, useToast , Box} from 'native-base'
import React,{useState} from 'react'
import { Alert } from "react-native";

const HomeTest = () => {
  const Toast = useToast();
  const [po, setPo] = useState('');
  let [service, setService] = useState("");

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
                    <Input value={po} onChangeText={setPo} w="75%" placeholder="Nhập PO" />
                </HStack>
                <HStack space={2} alignItems="center">
                    <Text>Line</Text>
                    <Input  w="30%" placeholder="Nhập Line" />
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
    </View>
  )
}

export default HomeTest