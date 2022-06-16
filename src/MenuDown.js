import React from "react";
import { View,  HStack, Text,  Box, StatusBar, Input } from "native-base";


export default function MenuDown() {
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
        <HStack>
             <Input shadow={2} _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width={"90%"} placeholder="Nhập PO"  />
            </HStack>
    </View>
    );
}
