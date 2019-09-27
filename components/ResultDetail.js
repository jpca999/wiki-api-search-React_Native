import React from 'react';
import { Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const ResultDetail = ({ album }) => {
  const { title } = album;
  const { link, info } = album;

  const {
    headerContentStyle,
    headerTextStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <Button onPress={() => Linking.openURL(link)}>
          {link}
        </Button>
      </CardSection>
      <CardSection>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{info }</Text>
        </View>
      </CardSection>

    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  }
};

export default ResultDetail;
