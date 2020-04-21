import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import {
  TopNavigation,
} from '@ui-kitten/components';
import ToggleSwitch from 'toggle-switch-react-native';

export default TopNav = ({ title, leftControl, rightControl }) => {



  return (
    <TopNavigation title={title} alignment={'center'}
      accessoryLeft={leftControl} accessoryRight={rightControl} />

  )
};

const styles = StyleSheet.create({

})