import React, { useState } from "react";
import { View,  HStack, Text,  Box, StatusBar, Input, VStack, Button, SafeAreaView} from "native-base";

import DateTimePicker from '@react-native-community/datetimepicker';



export default function MenuDown() {

    const [mydate, setDate] = useState(new Date());
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
 };
 const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
 };
 const displayDatepicker = () => {
    showMode('date');
 };
    return(
    <View>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg="#6200ee" />
        <HStack bg="#6200ee" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
            <HStack alignItems="center">
                <Text color="white" fontSize="20" fontWeight="bold">
                 DownLoad
                </Text>
            </HStack>
        </HStack>
        <View style={{ marginTop: 20}}>
        <VStack space={2} alignItems="center" w="100%" >
                <Text> OBS_NU </Text>
                <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="OBS_NU"  />
                <Text> OBS_SEQ_NU </Text>
                <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="OBS_SEQ_NU"  />
        </VStack>
        </View>
        <View style={{ marginTop: 20}}>
        <HStack space ={2} alignItems="center">
            <Button title="Delete">
                Delete old data
            </Button>
        </HStack>

      <View flex={1} alignItems="center" w="100%">
         <Button onPress={displayDatepicker} title="Show date picker!" />
            </View>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate} />
         )}
        </View>
    </View>
    );
}
