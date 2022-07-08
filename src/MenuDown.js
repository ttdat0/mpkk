import React, { useState } from "react";
import { View,  HStack, Text,  Box, StatusBar, Input,  Button,  TextArea} from "native-base";
import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function MenuDown() {

    const [mydate, setDate] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState('');
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || mydate;
    setDate(currentDate);
    setSelectedDate(Moment(currentDate).format('yyyy/MM/DD'));
    setShow(false);
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
            <HStack alignItems="center" px="2" pb="2">
                <Text color="white" fontSize="20" fontWeight="bold">
                 DownLoad
                </Text>
            </HStack>
        </HStack>
        <View style={{ marginTop: 5}}>
        <HStack space ={1} alignItems="center" px="2" pb="2" pt="2" w="100%">
                <Text> OBS_NU: </Text>
                <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="280" placeholder="0"  />
        </HStack>
        <HStack space ={1} alignItems="center" px="2" pb="2" pt="2" w="100%">
        <Text> OBS_SEQ_NU: </Text>
        <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="0"  />
        </HStack>
        </View>



        <View style={{ marginTop: 5}}  px="2" pb="2" pt="2" alignItems="center" w="100%">
        <HStack space ={1} >
            <Button title="Delete" w="50%" h="50">
                Delete old data
            </Button>
            <Button title="Delete" w="50%" h="50">
                Download
            </Button>
        </HStack>
        <HStack space ={1} style={{ marginTop: 5}}>
         <Button onPress={displayDatepicker} w="50%" h="50"> {selectedDate?selectedDate:<Text>Hay chon ngay</Text>} </Button>
               {isDisplayDate && (
                  <DateTimePicker
                     testID="dateTimePicker"
                     value={mydate}
                     mode={displaymode}
                     is24Hour={true}
                     display="default"
                     onChange={changeSelectedDate} />
         )}
            <Button title="Delete" w="50%" h="50">
                Upload
            </Button>
         </HStack>
         <HStack space ={1} alignItems="center"  px="2" pb="2" pt="2" w="100%" style={{ marginTop: 10}}>
             <Text> Tot Scan (prs):  </Text>
             <TextArea alignItems="center" aria-label="t1Disabled" placeholder="0" isDisabled width="250" h="50"/>
             {/* <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="0"  /> */}
         </HStack>
         <HStack space ={1} alignItems="center"  px="2" pb="2" pt="2" w="100%">
             <Text> Total Upload (prs): </Text>
             <TextArea alignItems="center" aria-label="t1Disabled" placeholder="0" isDisabled width="230" h="50" />
             {/* <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="230" placeholder="0"  /> */}
         </HStack>
        </View>
    </View>
    );
}
