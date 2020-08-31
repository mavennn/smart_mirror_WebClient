import React from 'react';
import { connect } from 'react-redux';

import FirtsLayer from './FirstLayer';
import { fetchCategories } from '../../../store/actions/catalogActions';

const manCategories = [
  {
    id: 21589,
    name: 'Мужская одежда',
  },
  {
    id: 21652,
    name: 'Мужская обувь',
  },
];

const womanCategories = [
  {
    id: 21435,
    name: 'Женская одежда',
  },
  {
    id: 21662,
    name: 'Женская обувь',
  },
];

const childCategories = [
  {
    id: 21455,
    name: 'Одежда для девочек',
  },
  {
    id: 21683,
    name: 'Обувь для девочек',
  },
  {
    id: 21602,
    name: 'Одежда для мальчиков',
  },
  {
    id: 21673,
    name: 'Обувь для мальчиков',
  },
];

const toggleGender = (gender) => {
  switch (gender) {
    case 'male':
      return manCategories;
    case 'female':
      return womanCategories;
    default:
      return childCategories;
  }
};

const FirstLayerContainer = ({ gender, fetchCategories }) => {
  let categories = toggleGender(gender);
  return (
    <FirtsLayer categories={categories} fetchCategories={fetchCategories} />
  );
};

const mapStateToProps = (state) => ({
  gender: state.catalog.gender,
});

const mapDispatchToProps = {
  fetchCategories,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstLayerContainer);
