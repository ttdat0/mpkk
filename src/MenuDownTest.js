import React, { useState } from "react";
import { View, Text, Center, Box, HStack, VStack, Input,  Button} from 'native-base'
import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MenuDownTest() {
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
 return (
    <View style={{ flex:1}}>
        <Center>
            <View style={{backgroundColor:'#3700B3',width:'100%',height:100,alignItems: 'center',justifyContent: 'center'}}>
                <Text color="white" fontSize="36" fontWeight="bold">
                    Download
                </Text>
            </View>

            <View style={{ marginTop: 10}} >
            <VStack space={4} alignItems="center">
                <HStack space={2} alignItems="center">
                    <Text> OBS_NU: </Text>
                    <Input  w="80%" placeholder="Nhập OBS Number" />
                </HStack>
                <HStack space={2} alignItems="center">
                     <Text> OBS_SEQ_NU: </Text>
                     <Input  w="71%" placeholder="Nhập OBS SEQ Number" />
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
            </VStack>
            </View>
        </Center>
    </View>
)
}