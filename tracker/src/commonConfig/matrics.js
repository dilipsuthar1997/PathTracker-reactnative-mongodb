import { Dimensions, Platform } from 'react-native';
import { scale } from './helper/functions';

const { width, height } = Dimensions.get('window');

let screenHeight = width < height ? height : width
let screenWidth = width < height ? width : height

const Matrics = {

  Scale: (val) => {
    return scale(val)
  }
};

export default Matrics;