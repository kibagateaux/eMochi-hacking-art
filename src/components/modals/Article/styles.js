import {Dimensions, StyleSheet} from 'react-native';
import {font, colors} from '@constants/style';
const {height, width} = Dimensions.get('window');

console.log('border radius target = 52', width / 6, width / 6.8, );
const borderRadius = width / 7.2;
const articleContainerWidth = width / 1.2;
const articleContainerHeight = height / 1.5;

export default StyleSheet.create({
    root: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      opacity: 0.8,
      backgroundColor: colors.black,
      zIndex: 1,
    },
    rect2: {
      zIndex: 2,
      paddingTop: height / 18,
      width: articleContainerWidth,
      height: articleContainerHeight,
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: colors.white,
      opacity: 1,
      borderRadius: borderRadius
    },
    articleTitleContainer: {
      flex: 2,
      width: articleContainerWidth / 1.2
    },
    title: {
      flex: 1,
      textAlign: "center",
      fontWeight: font.weight.sumo,
      fontSize: font.size.medium
    },
    subtitle: {
      flex: 1,
      textAlign: "center"
    },
    image1: {
      flex: 3,
      width: articleContainerWidth,
    },
    skipButton: {
      flex: 1,
      height: height / 18,
      width: articleContainerWidth,
      backgroundColor: "rgba(197,37,37,1)",
      alignItems: "center",
      justifyContent: "center"
    },
    closeText: {
      textAlign: "center",
      color: colors.white,
      fontWeight: font.weight.heavy,
      fontSize: font.size.medium
    },
    linkButton: {
      flex: 1,
      height: height / 12,
      width: articleContainerWidth,
      backgroundColor: colors.primary,
      borderBottomLeftRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      alignItems: "center",
      justifyContent: "center"
    },
    linkText: {
      textAlign: "center",
      color: colors.white,
      fontWeight: font.weight.heavy,
      fontSize: font.size.medium
    },
});