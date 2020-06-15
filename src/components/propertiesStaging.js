/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const  PropertiesPlaceholder = () => (
  <Placeholder
    Animation={ShineOverlay}
    style={{
      marginVertical: -9,
      marginHorizontal: 6,
      borderRadius: 10,
      alignSelf: 'center',
    }}
    Left={(props) => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            margin: 20,
          },
          {
            width: responsiveWidth(90),
            height: responsiveHeight(25),
          },
        ]}
      />
    )}>
    {/* <PlaceholderLine style={{marginTop: responsiveHeight(1)}} width={70} />
    <PlaceholderLine style={{marginTop: responsiveHeight(1.5)}} width={50} />
    <PlaceholderLine width={30} /> */}
  </Placeholder>
);

export default PropertiesPlaceholder;
