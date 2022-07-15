import React, { useState } from "react";
import { View, Text, Center, HStack, VStack, Input,  Button,  TextArea} from 'native-base'
import Moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MenuDownTest() {
    const [mydate, setDate] = useState(new Date());
    const [selectedDate,setSelectedDate] = useState('');
    const [displaymode, setMode] = useState('date');
    const [isDisplayDate, setShow] = useState(false);
    const changeSelectedDate = (evnet, selectedDate) => {
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
            <VStack space={1} alignItems="center">
                <Text fontSize="xl">
                    status: Downloading...
                </Text>
            </VStack>
            <View>
                <VStack space={6} alignItems="center" style={{margin:10}}>
                    <HStack space={1} alignItems="center">
                        <Text> OBS_NU: </Text>
                        <Input  w="77%" placeholder="Nhập OBS Number" />
                    </HStack>
                    <HStack space={1} alignItems="center">
                        <Text> OBS_SEQ_NU: </Text>
                        <Input  w="69%" placeholder="Nhập OBS SEQ Number" />
                    </HStack>

                    <HStack space ={1} >
                        <Button title="Delete" w="50%" h="50">
                            Delete old data
                        </Button>
                        <Button title="Delete" w="50%" h="50">
                            Download
                        </Button>
                    </HStack>

                    <HStack space ={1}>
                        <Button onPress={displayDatepicker} w="50%" h="50"> {selectedDate?selectedDate:<Text> Hãy chọn ngày </Text>} </Button>
                                {isDisplayDate && (
                                    <DateTimePicker
                                testID="dateTimePicker"
                                value={mydate}
                                mode={displaymode}
                                is24Hour={true}
                                display="default"
                                onChange={changeSelectedDate} />
                                )}
                            <Button title="Upload" w="50%" h="50">
                            Upload
                            </Button>
                    </HStack>
                        <HStack space={1} alignItems="center">
                            <Text> Tot Scan (prs):  </Text>
                            <TextArea alignItems="center" aria-label="t1Disabled" placeholder="0" isDisabled width="70%" h="10"/>
                        </HStack>
                            <HStack space={1} alignItems="center">
                                <Text> Total Upload (prs): </Text>
                                <TextArea alignItems="center" aria-label="t1Disabled" placeholder="0" isDisabled width="65%" h="10" />
                            </HStack>
                </VStack>
            </View>
        </Center>
    </View>
)
}