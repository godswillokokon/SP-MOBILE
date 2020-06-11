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

const PropertiesPlaceholder = () => (
  <Placeholder
    Animation={ShineOverlay}
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      marginVertical: 6,
      marginHorizontal: 15,
      borderRadius: 4,
    }}
    Left={(props) => (
      <PlaceholderMedia
        style={[
          props.style,
          {
            width: responsiveWidth(90),
            height: responsiveHeight(16),
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
