import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Icons } from "@common";
import styles from './style';
import Background from '../../Component/Background';

const { width: SCREEN_WIDTH } = Dimensions.get('window');


const DetailsScreen = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [{ icon: Icons.dummy }, { icon: Icons.dummy }, { icon: Icons.dummy }];

    const onViewableItemsChanged = ({ viewableItems }) => {
        setCurrentIndex(viewableItems[viewableItems.length - 1].index);
    }

    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.zIndex}>
                <SafeAreaView>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity style={{ position: 'absolute', zIndex: 3, left: 20, top: 5 }} onPress={() => props.navigation.goBack()}>
                            <AntDesign name='left' size={20} color={Colors.White} />
                        </TouchableOpacity>
                        <Text style={{ color: Colors.White, textAlign: 'center', fontSize: 20 }}>Details</Text>
                    </View>
                    <View style={{ margin: 20, borderRadius: 15, backgroundColor: Colors.White, width: SCREEN_WIDTH - 40, alignItems: 'center' }}>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => item.toString() + index}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            pagingEnabled
                            bounces={false}
                            onViewableItemsChanged={onViewableItemsChanged}
                            renderItem={({ item, index }) => (
                                <Image source={item.icon} style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15, height: 150, width: SCREEN_WIDTH - 40 }} />
                            )}
                        />
                        <View style={{ borderTopWidth: 1, width: SCREEN_WIDTH - 40 }} />
                    </View>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default DetailsScreen;