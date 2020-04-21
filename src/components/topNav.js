import React from 'react'
import {
  TopNavigation,
} from '@ui-kitten/components';

export default TopNav = ({ LeftAction, RightAction, Title }) => {
  return (
    <TopNavigation title={Title} alignment={'center'}
      accessoryLeft={LeftAction} accessoryRight={RightAction} />
  )
};
