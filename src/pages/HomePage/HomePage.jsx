import React from 'react';
import styles from './HomePage.css';

import Emoji from '../../components/Emoji/Emoji';
import HeaderContainer from '../../components/Header/HeaderContainer';
import CarouselContainer from '../../components/Carousel/CarouselContainer';
import ThingInfoContainer from '../../components/ThingInfo/ThingInfoContainer';
import AvailableColorsContainer from '../../components/AvailableColors/AvailableColorsContainer';
import AvailableSizesContainer from '../../components/AvailableSizes/AvailableSizesContainer';
import HistoryContainer from '../../components/History/HistoryContainer';
import RecommendationsContainer from '../../components/Recommendations/RecommendationsContainer';
import AddToBasketButtonContainer from '../../components/AddToBasketButton/AddToBasketButtonContainer';
import BringThingButtonContainer from '../../components/BringThingButton/BringThingButtonContainer';
import Loader from '../../components/Loader/Loader';

const HomePage = ({ currentThing }) => {
  const thingInfo = (
    <>
      <div className={styles.main}>
        <CarouselContainer />
        <ThingInfoContainer />
        <div className={styles.colors_and_sizes}>
          <AvailableColorsContainer />
          <AvailableSizesContainer />
        </div>
        <div className={styles.user_buttons}>
          <AddToBasketButtonContainer />
          <BringThingButtonContainer />
        </div>
      </div>
      <div className={styles.footer}>
        <RecommendationsContainer />
        <HistoryContainer />
      </div>
    </>
  );

  const noThing = (
      <div className={styles.waiting}>
        <div className={styles.waiting_text}>
            Чтобы начать работу, отсканируйте штрихкод
            <Emoji symbol="👗" />
            <Emoji symbol="👉" />
        </div>
      </div>
  );

  const getPage = (name) => {
    if (name !== '') {
      return thingInfo;
    }
    return noThing;
  };

  const loader =
    <>
      <div className={styles.loader_container}>
        <Loader/>
      </div>
    </>

  return (
    <div className={styles.container}>
      <HeaderContainer />
      {currentThing.isFetching ? loader : getPage(currentThing.name)}
    </div>
  );
};

export default HomePage;
