import React from 'react';
import {Placeholder, PlaceholderLine, ShineOverlay} from 'rn-placeholder';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const PropertyPlaceholder = () => (
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: 15,
      marginHorizontal: 6,
    }}>
    <PlaceholderLine
      style={{marginHorizontal: responsiveHeight(4)}}
      width={85}
    />
    <PlaceholderLine
      style={{marginHorizontal: responsiveHeight(4)}}
      width={70}
    />
    <PlaceholderLine
      style={{marginHorizontal: responsiveHeight(4)}}
      width={60}
    />
    <PlaceholderLine
      style={{marginHorizontal: responsiveHeight(4)}}
      width={40}
    />
    <PlaceholderLine
      style={{marginHorizontal: responsiveHeight(4)}}
      width={25}
    />
  </Placeholder>
);

export default PropertyPlaceholder;
