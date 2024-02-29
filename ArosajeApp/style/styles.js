// styles.js
export const COLORS = {
    primary: 'white',
    secondary: '#00CED1',
    text: '#333333',
    background: '#FFFFFF',
    button: '#F2E8CF',
  };
    
  import { Dimensions } from 'react-native';

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  export const FONT_WEIGHTS = {
    normal: 'normal',
    bold: 'bold',
  };
  
  export const FONT_SIZES = {
      small: windowWidth * 0.05,
      medium: windowWidth * 0.07,
      large: windowWidth * 0.09,
  };
  
  export const TEXT_STYLES = {
    heading: {
      fontSize: FONT_SIZES.large,
      fontWeight: FONT_WEIGHTS.bold,
      color: COLORS.text,
    },
    paragraph: {
      fontSize: FONT_SIZES.medium,
      fontWeight: FONT_WEIGHTS.normal,
      color: COLORS.text,
    },
    link: {
      fontSize: FONT_SIZES.medium,
      fontWeight: FONT_WEIGHTS.bold,
      color: COLORS.primary,
    },
  };
  