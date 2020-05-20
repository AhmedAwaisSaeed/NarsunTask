import {Dimensions, Platform} from "react-native"
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';

export function isIphoneX() {
    const dim = Dimensions.get('window');

    return (
        // This has to be iOS
        Platform.OS === 'ios' &&

        // Check either, iPhone X or XR
        isIPhoneXSize(dim)
    );
}

export function isIPhoneXSize(dim) {
    return dim.height >= 812 || dim.width >= 812;
}

export function width(val) {
    return widthPercentageToDP(val);
}

export function height(val) {
    return heightPercentageToDP(val);
}
