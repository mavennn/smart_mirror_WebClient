import React from 'react';
import styles from './CatalogPage.css';

import HeaderContainer from '../../components/Header/HeaderContainer';
import GenderButtonsContainer from '../../components/GenderButtons/GenderButtonsContainer';
import MainCatalogSectionContainer from '../../components/MainCatalogSection/MainCatalogSectionContainer';

// Мужская одежда 21589
// Мужская обувь 21652
// Женская одежда 21435
// Женская обувь 21662
// Одежда для девочек 21455
// Обувь для девочек 21683
// Одежда для мальчиков 21602
// Обувь для мальчиков 21673

const CatalogPage = ({ status }) => {
  return (
    <div className={styles.container}>
      <HeaderContainer />
      <GenderButtonsContainer />
      <MainCatalogSectionContainer />
    </div>
  );
};

export default CatalogPage;
