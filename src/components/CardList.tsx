import React from 'react';
import { Text, TouchableOpacity, StyleSheet, } from 'react-native';
import colors from '../res/themes/Colors';

interface CardListProps {
    title: string;
    cardCount?: number;
    onPress?: () => void;
}

const CardList: React.FC<CardListProps> = ({ title, cardCount, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.cardContainer}
            accessible={true}
            accessibilityLabel={title}
            testID="card-list"
        >
            <Text style={styles.cardTitle}>{title}</Text>
            {cardCount !== undefined && (
                <Text style={styles.cardCount}>{cardCount} cards</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 15,
        elevation: 5,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        padding: 20,
        marginBottom: 15,
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardCount: {
        fontSize: 14,
        color: colors.grayColor,
    },
});

export default React.memo(CardList);
