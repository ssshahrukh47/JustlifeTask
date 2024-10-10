import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, ActivityIndicator, SafeAreaView } from 'react-native';
import styles from './Styles';
import useFetch from '../../hooks/useFetch';
import colors from '../../res/themes/Colors';
import CardList from '../../components/CardList';
import Strings from '../../res/strings/Strings';
import { navigate } from '../../core/navigation/NavigationServices';
import { BASE_URL } from '../../core/helpers/Constants';

interface CardType {
    name: string;
    cards: any[];
}

interface Props {
    navigation: {
        navigate: (screen: string, params?: { type: string }) => void;
    };
}

const CardTypesScreen: React.FC<Props> = () => {

    const { data: cardTypesData, error, isLoading } = useFetch<{ [key: string]: any[] }>(`${BASE_URL}cards`);
    const [cardTypes, setCardTypes] = useState<CardType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        if (cardTypesData) {
            const typesArray = Object.entries(cardTypesData)?.map(([name, cards]) => ({
                name,
                cards,
            }));
            setCardTypes(typesArray);
        }
    }, [cardTypesData]);

    // Return loader or error message if needed

    if (isLoading) {
        return (
            <View style={styles.loaderContainer} testID="loader">
                <ActivityIndicator size="large" color={colors.primaryColor} />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.loaderContainer}>
                <Text style={styles.errorText}>Error: {error}</Text>
            </View>
        );
    }

    // Filter card types based on the search term
    const filteredTypes = cardTypes?.filter(type =>
        type?.name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{Strings.ALL_CARDS}</Text>
            <TextInput
                placeholder={Strings.SEARCH_CARD_TYPES}
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={styles.searchInput}
                clearButtonMode="while-editing"
                placeholderTextColor={colors.grayColor}
            />
            <FlatList
                data={filteredTypes}
                keyExtractor={item => item?.name}
                renderItem={({ item }) => (
                    <CardList
                        title={item?.name}
                        cardCount={item?.cards?.length}
                        onPress={() => navigate('CardByTypeScreen', { type: item?.name })}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default CardTypesScreen;
