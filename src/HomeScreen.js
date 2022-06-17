import React,{useState} from "react";
import { View,  HStack, Text,  Box, StatusBar, Button, Input, Select, FormControl, CheckIcon, WarningOutlineIcon, Badge, Popover,useToast } from "native-base";
import { Alert } from "react-native";


export default function HomeScreen() {
  const Toast = useToast();
  const [po, setPo] = useState('');

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

    return(
    <View>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <Text color="white" fontSize="20" fontWeight="bold">
                    Home
                </Text>
            </HStack>
        </HStack>

        <View w="100%" alignItems="center">
        <HStack space={2}>
        <Box>
      <Popover trigger={triggerProps => {
      return <Button title="Delete" onPress={() => showConfirmDialog()} w="100%" alignItems="center">
              Delete 
            </Button>; }}>
        </Popover>
        </Box>
        <Input value={po} onChangeText={setPo} shadow={1} _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}}  width={"80%"} placeholder="Nhập PO"  />
      </HStack>
      </View>
      
      <HStack space={2}>
     <View flex={1} alignItems ="center" flexDirection={"row"}>
      <Text alignItems="center"> Line </Text>
      <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="100" placeholder="LINE"  />
      </View>
      <View flex={1}>
      <FormControl w="3/4" maxW="100" isRequired isInvalid textAlign={"center"} flexDirection="row">
        <FormControl.Label alignItems={"center"}> Mini Line </FormControl.Label>
        <Select minWidth="100" accessibilityLabel="Choose Service" placeholder="Choose Service" rounded="md" _selectedItem={{ bg: "teal.600",endIcon: <CheckIcon size={5} />}}  mt="1">
          <Select.Item label="001" value="num"  />
          <Select.Item label="002" value="num1" />
          <Select.Item label="003" value="num2" />
          <Select.Item label="004" value="num3" />
          <Select.Item label="005" value="num4" />
          <Select.Item label="006" value="num5" />
        </Select>
      </FormControl>
      </View>
      </HStack>
    </View>
    );
}