import React, {useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CatImage} from '../../helpers/interfaces/cat';
import styles from './CatCard.style';

interface Props {
  card: CatImage;
}

const CatCard = ({card}: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.card}>
      <FastImage
        style={styles.image}
        source={{
          uri: card.url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
        onLoadEnd={handleLoadEnd}
      />
      {isLoading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            alignItems: 'center',
          }}
          size={'large'}
        />
      )}
      {!isLoading && (
        <View style={styles.info}>
          <Text style={styles.breed}>{card.id}</Text>
          <Text style={styles.origin}>{card.id}</Text>
        </View>
      )}
    </View>
  );
};

export default CatCard;
