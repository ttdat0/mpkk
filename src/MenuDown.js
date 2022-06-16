import React from "react";
import { View,  HStack, Text,  Box, StatusBar, Input, VStack  } from "native-base";


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
        
        <VStack space={2}>
            <View>
                <Text> OBS_NU </Text>
                <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="OBS_NU"  />
                <Text> OBS_SEQ_NU </Text>
                <Input _light={{bg: "coolGray.100"}} _dark={{bg: "coolGray.800"}} rounded="xl" width="250" placeholder="OBS_SEQ_NU"  />
            </View>
        </VStack>
    </View>
    );
}
