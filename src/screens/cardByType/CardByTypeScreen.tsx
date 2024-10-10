import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Styles';
import useFetch from '../../hooks/useFetch';
import colors from '../../res/themes/Colors';
import CardList from '../../components/CardList';
import { RouteProp } from '@react-navigation/native';
import Strings from '../../res/strings/Strings';
import { goBack } from '../../core/navigation/NavigationServices';
import { BASE_URL } from '../../core/helpers/Constants';

interface Props {
    route: RouteProp<{ params: { type: string } }, 'params'>;
}

interface Card {
    cardId: string;
    name: string;
}

const CardByTypeScreen: React.FC<Props> = ({ route }) => {
    const { type } = route.params;
    const { data: cardsData, error, isLoading } = useFetch<{ [key: string]: Card[] }>(`${BASE_URL}cards/sets/${type}`);
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        if (cardsData) {
            const allCards = Object.values(cardsData).flat() as Card[];
            setCards(allCards);
        }
    }, [cardsData]);

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

    // Define the ListEmptyComponent to show when the FlatList is empty
    const renderEmptyComponent = () => (
        <View style={styles.loaderContainer}>
            <Text style={styles.noDataText}>{Strings.NO_DATA_FOUND}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <Text style={styles.header}>{Strings.SELECTED_TYPE_CARDS}</Text>
            </View>
            <FlatList
                data={cards}
                keyExtractor={(item) => item.cardId}
                ListEmptyComponent={renderEmptyComponent}
                renderItem={({ item }) => (
                    <CardList
                        title={item.name}
                    />
                )}
            />
        </SafeAreaView>
    );
};

export default CardByTypeScreen
