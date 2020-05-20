import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UserReview = props => {
  return (
    <View style={styles.mainView}>
      <View style={{flex: 0.3, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.ImageView}>
          <Image
            style={styles.CircularImageStyle}
            source={{uri: props.item.profile_image}}></Image>
        </View>
      </View>

      <View style={styles.ReviewsMainContainer}>
        <View>
          <Text
            style={{color: '#FFFF', fontSize: hp('2.7%'), fontWeight: 'bold'}}>
            {props.item.name}
          </Text>
        </View>

        <View style={{flexDirection: 'row', marginTop: 5}}>
          <View style={{marginRight: 10, justifyContent: 'center'}}>
            <Text style={[styles.whiteText, {color: '#A89578'}]}>
              {props.item.rating}
            </Text>
          </View>
          <View style={{marginRight: 10}}>
            <Rating
              type="custom"
              // ratingImage={WATER_IMAGE}
              ratingColor="#D4BA52"
              ratingBackgroundColor="#c8c7c8"
              startingValue={5}
              ratingCount={5}
              readonly={true}
              imageSize={20}
              selectedColor="#D4BA52"
              tintColor="#212121"
              // onFinishRating={this.ratingCompleted}
              style={{paddingVertical: 0, backgroundColor: 'green'}}
            />
          </View>
          <View
            style={{
              // backgroundColor:"green",
              justifyContent: 'center',
            }}>
            <Text style={styles.yellowText}>
              ({props.item.review_count} reviews)
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          {props.item.tags.map(tag => {
            return (
              <View style={{margin: 5}}>
                <Text style={styles.whiteText}>{tag}</Text>
              </View>
            );
          })}
        </View>
      </View>

      <View style={styles.VerticalLine}></View>

      <View
        style={styles.PriceContainer}>
        <Text
          style={[styles.whiteText, {color: '#38723E', fontSize: hp('2.7%')}]}>
          ${props.item.rate}.00
        </Text>
      </View>
    </View>
  );
};

export default UserReview;

const styles = StyleSheet.create({
  mainView: {
    height: 100,
    marginTop: 10,
    // backgroundColor:"pink",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageView: {
    borderRadius: 70,
    width: 70,
    height: 70,
  },
  CircularImageStyle: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  ReviewsMainContainer: {
    flex: 1,
    // backgroundColor:"red",
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },
  VerticalLine: {
    height: 80,
    width: 1,
    backgroundColor: '#FFFF',
    marginTop: 10,
    marginBottom: 10,
  },
  PriceContainer:{

    flex: 0.3,
    alignItems: 'center',
    marginLeft: -1,
    // backgroundColor:"green",
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',

  },
  whiteText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#FFFF',
  },
  yellowText: {
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#D4BA52',
  },
});
