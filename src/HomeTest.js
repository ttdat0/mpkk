import { View, Text, Center,HStack,VStack,Button,Input,Select,CheckIcon } from 'native-base'

import React,{useState} from 'react'

const HomeTest = () => {

    const [po, setPo] = useState('');

    let [service, setService] = React.useState("");

  return (
    <View style={{ flex:1}}>
      <Center>
        <View style={{backgroundColor:'blue',width:'100%',height:100,alignItems: 'center',justifyContent: 'center'}}>
                <Text color="white" fontSize="36" fontWeight="bold">
                    Home
                </Text>
        </View>
        <View style={{margin:10}}>
            <VStack space={4} alignItems="center">
                <HStack space={3}>
                    <Button onPress={() => console.log("hello world")}>Delete</Button>
                    <Input value={po} onChangeText={setPo} w="75%" placeholder="Nhập PO" />
                </HStack>
                <HStack space={2} alignItems="center">
                    <Text>Line</Text>
                    <Input  w="30%" placeholder="Nhập Line" />
                    <Text>MLine</Text>
                    <Select selectedValue={service} width="150" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
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