import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

export default (props) => {
  const {
    mainText,
    mainButtonFunc,
    mainButtonText,
    subText,
    subButtonFunc,
    subButtonText,
  } = props;

  const _renderButton = (onPress, text, styleObj) => (
    MKButton.coloredButton()
      .withText(text)
      .withOnPress(onPress)
      .withStyle(styleObj)
      .build()
  );
  return (
    <View style={styles.container}>
      {(mainText && <Text style={styles.mainText}> {mainText} </Text>)}
      {(subText && <Text style={styles.subText}> {subText} </Text>)}
      {(mainButtonFunc &&
        (<TouchableOpacity
          onPress={mainButtonFunc}
          style={styles.mainButton}
        > 
          <Text style={styles.centerText}>{mainButtonText} </Text>
        </TouchableOpacity>)
      )}
      {(subButtonFunc && 
        (<TouchableOpacity
          onPress={subButtonFunc}
          style={styles.subButton}
        >
          <Text> {subButton} </Text> 
        </TouchableOpacity>)
      )}
    </View>
  );
};