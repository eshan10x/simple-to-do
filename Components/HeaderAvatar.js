import React from 'react';
import { Image } from 'react-native';

function HeaderAvatar() {
    return (
        <Image style={{
            backgroundColor: '#ffff',
            borderRadius: 25,
            height: 45,
            width: 45,
            marginRight: 10,
        }}></Image>
    );
  }

  export default HeaderAvatar;
  