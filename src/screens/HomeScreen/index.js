import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, FlatList, Image, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors, Icons } from "@common";
import styles from './style';
import Background from '../../Component/Background';

const HomeScreen = (props) => {

    useEffect(() => {
        props.get_Competition();
    }, [])

    return (
        <View style={styles.container}>
            <Background />
            <SafeAreaView>
                <View style={styles.zIndex}>
                    <ScrollView
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.margin20}>
                            <Text style={styles.welComeTxt}>Welcome,</Text>
                            <Text style={styles.userNameTxt}>LOREM IPSUM</Text>
                            <View style={styles.searchContainer}>
                                <TextInput style={styles.inputTxt} placeholder='Search for Competition' placeholderTextColor={Colors.Primary} />
                                <AntDesign name='search1' size={20} color={Colors.Black} style={styles.margin10} />
                            </View>
                        </View>
                        <View>
                            <View style={styles.headingContainer}>
                                <Text style={styles.headingTxt}>Latest Compatition</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeAllTxt}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={props.latestCompetition}
                                keyExtractor={(item, index) => item.toString() + index}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item, index }) => (
                                    <View style={[styles.latestCompetitionContainer, { marginLeft: index == 0 ? 20 : 10 }]}>
                                        <Image source={Icons.dummy} style={styles.latestCompetitionImage} />
                                        <View style={styles.latestCompetitionDetailContainer}>
                                            <View style={styles.flexDirectionRowCenter}>
                                                <Text style={styles.competitionNameTxt}>{item.name}</Text>
                                                <Text style={styles.daysTxt}>{item.days}</Text>
                                            </View>
                                            <Text style={styles.amountTxt}>{item.type_price}</Text>
                                            <Text style={styles.competitionDetailTxt}>{item.detail}</Text>
                                            <View style={[styles.flexDirectionRowCenter, { marginTop: 10 }]}>
                                                <TouchableOpacity>
                                                    <AntDesign name='hearto' color={Colors.Primary} size={20} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ marginLeft: 10 }}>
                                                    <AntDesign name='sharealt' color={Colors.Primary} size={20} />
                                                </TouchableOpacity>
                                                <View style={{ flex: 1 }} />
                                                <TouchableOpacity style={styles.participateBtnContainer}
                                                    onPress={() => props.navigation.navigate('details', { params: item })}
                                                >
                                                    <Text style={{ color: Colors.White }}>Participate</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                        <View>
                            <View style={styles.headingContainer}>
                                <Text style={styles.headingTxt}>Pending Submission</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeAllTxt}>See all</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={props.pendingSubmission}
                                keyExtractor={(item, index) => item.toString() + index}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <View style={styles.pandingSubmissionContainer}>
                                        <Image source={Icons.dummy} style={styles.pandingSubmissionImage} />
                                        <View style={styles.pandingSubmissionDetailContainer}>
                                            <Text style={styles.pendingSubmissionCompetitionNameTxt}>{item.name}</Text>
                                            <Text style={styles.amountTxt}>{item.type_price}</Text>
                                            <Text style={styles.competitionDetailTxt}>{item.detail}</Text>
                                        </View>
                                    </View>
                                )}
                            />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View >
    );
}

export default HomeScreen;