import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Icons } from "@common";
import styles from './style';
import Background from '../../Component/Background';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');


const DetailsScreen = (props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [{ icon: Icons.dummy }, { icon: Icons.dummy }, { icon: Icons.dummy }];

    const onViewRef = React.useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[viewableItems.length - 1]?.index);
    });

    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

    return (
        <View style={styles.container}>
            <Background />
            <View style={styles.zIndex}>
                <SafeAreaView>
                    <ScrollView>
                        <View style={styles.marginTOp10}>
                            <TouchableOpacity style={styles.backBtnContainer} onPress={() => props.navigation.goBack()}>
                                <AntDesign name='left' size={20} color={Colors.White} />
                            </TouchableOpacity>
                            <Text style={styles.headerTxt}>Details</Text>
                        </View>

                        <View style={styles.contentContainer}>
                            <FlatList
                                data={data}
                                keyExtractor={(item, index) => item.toString() + index}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                pagingEnabled
                                bounces={false}
                                onViewableItemsChanged={onViewRef.current}
                                viewabilityConfig={viewConfigRef.current}
                                renderItem={({ item, index }) => (
                                    <Image source={item.icon} style={styles.img} />
                                )}
                            />
                            <View style={styles.imgBorder} />
                            <View style={styles.dotContainer}>
                                {
                                    data.map((item, index) => {
                                        return (
                                            <View style={[styles.dot, { backgroundColor: index === currentIndex ? Colors.Primary : 'transparent' }]} />
                                        )
                                    })
                                }
                            </View>
                            <View style={styles.detailContainer}>
                                <View style={styles.flexDirectionRowCenter}>
                                    <Text style={styles.competitionNameTxt}>Competition Name</Text>
                                    <Text style={styles.daysTxt}>3 days left</Text>
                                </View>
                                <Text style={styles.amountTxt}>Art & Craft, 500RS</Text>
                                <Text style={styles.competitionDetailTxt}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.{'\n\n'}
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </Text>

                                <View style={[styles.flexDirectionRowCenter, { marginTop: 10 }]}>
                                    <TouchableOpacity>
                                        <AntDesign name='hearto' color={Colors.Primary} size={20} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: 10 }}>
                                        <AntDesign name='sharealt' color={Colors.Primary} size={20} />
                                    </TouchableOpacity>
                                    <View style={{ flex: 1 }} />
                                </View>


                                <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.Secondary }]}>
                                    <Text style={styles.btnTxt}>View Existing Submissions</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.btn, { backgroundColor: Colors.Primary }]}>
                                    <Text style={styles.btnTxt}>Upload</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View >
    )
}

export default DetailsScreen;