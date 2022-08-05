import React, {useCallback, useEffect, useRef, useState} from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {catVote, fetchCats} from '../../api/catsAPI';
import CatCard from '../../components/CatCard/CatCard';
import Screen from '../../components/Screen/Screen';
import VoteButton from '../../components/VoteButton/VoteButton';
import {CatImage} from '../../helpers/interfaces/cat';
import styles from './CatsScreen.style';

const CatsScreen = () => {
  const swiper = useRef<Swiper<CatImage>>(null);
  const [currentSwiperIndex, setCurrentSwiperIndex] = useState(0);
  const [catsList, setCatsList] = useState<CatImage[]>();
  const [listPage, setListPage] = useState(0);

  const fetchCatsData = useCallback(() => {
    fetchCats(listPage).then((response: CatImage[]) => {
      setListPage(l => l + 1);
      setCatsList(response);
    });
  }, []);

  useEffect(() => {
    fetchCatsData();
  }, [fetchCatsData]);

  const loadMoreCats = () => {
    fetchCats(listPage).then((response: CatImage[]) => {
      if (response.length > 0) {
        setListPage(l => l + 1);
        const newCatsList = catsList?.concat(response);
        setCatsList(newCatsList);
      }
    });
  };

  const voteHeart = async () => {
    if (catsList) {
      const catImageId = catsList[currentSwiperIndex]?.id;
      await catVote(catImageId, 1);
    }
  };

  const voteX = async () => {
    if (catsList) {
      const catImageId = catsList[currentSwiperIndex]?.id;
      await catVote(catImageId, 0);
    }
  };

  const swipeRight = () => {
    swiper.current?.swipeRight();
  };

  const swipeLeft = () => {
    swiper.current?.swipeLeft();
  };

  return (
    <Screen>
      <View style={styles.swiperContainer}>
        {catsList && (
          <Swiper
            ref={swiper}
            containerStyle={styles.swiper}
            cardStyle={styles.swiperCard}
            cards={catsList}
            renderCard={(card: CatImage) =>
              card && <CatCard key={card.id} card={card} />
            }
            cardIndex={0}
            stackSize={2}
            stackSeparation={0}
            goBackToPreviousCardOnSwipeLeft={false}
            verticalSwipe={false}
            onSwipedLeft={voteX}
            onSwipedRight={voteHeart}
            onSwiped={cardIndex => {
              setCurrentSwiperIndex(cardIndex + 1);
              if (cardIndex === catsList.length - 4) {
                loadMoreCats();
              }
            }}
          />
        )}
      </View>
      <View style={styles.voteContainer}>
        <VoteButton
          customStyle={styles.xButton}
          variant={'x'}
          onPress={swipeLeft}
        />
        <VoteButton
          customStyle={styles.heartButton}
          variant={'heart'}
          onPress={swipeRight}
        />
      </View>
    </Screen>
  );
};

export default CatsScreen;
