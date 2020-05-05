import React from 'react'
import {
  TopNavigation,
} from '@ui-kitten/components';

export default TopNav = ({ LeftAction, RightAction, Title }) => {
  return (
    <TopNavigation title={Title} alignment={'center'} style={{
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.25,
      shadowRadius: 0.09,

      elevation: 2,
      height: 10
    }}
      accessoryLeft={LeftAction} accessoryRight={RightAction} />
  )
};
