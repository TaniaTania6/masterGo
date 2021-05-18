import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  KeyboardAwareScrollView,
  Input,
  Button,
  Row,
  Text,
} from 'src/components';
import {COLORS} from 'src/constants';

const buttonInfo = [
  {
    content: 'Welding works',
    active: true,
  },
  {
    content: 'Foundation works',
    active: true,
  },
  {
    content: 'Roofing',
    active: false,
  },
  {
    content: 'Waterproofing',
    active: true,
  },
  {
    content: 'Architecture',
    active: false,
  },
  {
    content: 'Design',
    active: false,
  },
];
export const ConstructionWorks = () => {
  const [statusArray, setStatusArray] = useState(buttonInfo);

  const changeState = (status, index) => {
    const changedData = statusArray.map((item, ind) => {
      let result = ind === index ? {...item, active: !status} : {...item};
      return result;
    });
    setStatusArray(changedData);
  };
  const renderButton = (item, index) => {
    return (
      <TouchableOpacity style={styles.button} key={index}>
        <Row style={styles.contentContainer}>
          <Text extraStyles={styles.title}>{item.content}</Text>
          <Button
            extraStyles={[
              styles.widthStyles,
              item.active ? styles.checkedButton : styles.unCheckedButton,
            ]}
            icon={
              item.active
                ? require('src/assets/images/checked.png')
                : require('src/assets/images/unchecked.png')
            }
            onPress={() => {
              changeState(item.active, index);
            }}
          />
        </Row>
      </TouchableOpacity>
    );
  };
  return (
    <KeyboardAwareScrollView>
      <Input placeholder="Search by category" icon="search" />
      <View style={styles.container}>
        {statusArray.map((item, index) => renderButton(item, index))}
      </View>
      <Row style={styles.buttonsContainer}>
        <Button
          extraStyles={styles.buttonStyles}
          extraTextStyles={styles.title}
          text="Skip"
          theme="small"
        />
        <Button text="Done" theme="small" />
      </Row>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    width: '100%',
  },
  buttonsContainer: {
    width: '100%',
  },
  title: {
    color: COLORS.GREY_DARK,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: '5%',
  },
  button: {
    backgroundColor: COLORS.PRIMARY,
    borderWidth: 1,
    borderColor: COLORS.ORANGE,
    flexDirection: 'row',
    marginVertical: 5,
  },
  buttonStyles: {
    borderWidth: 1,
    borderColor: COLORS.BTN_BORDER,
    backgroundColor: COLORS.TRANSPARENT,
  },
  widthStyles: {
    width: '20%',
    height: 55,
  },
  checkedButton: {
    backgroundColor: COLORS.ORANGE,
  },
  unCheckedButton: {
    backgroundColor: COLORS.GREY_LIGHTER,
  },
});
