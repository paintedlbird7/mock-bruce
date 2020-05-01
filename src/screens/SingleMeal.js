import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Image, Picker } from 'react-native';
import MealContext from '../context/Context';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Picker } from '@react-native-community/picker';


const SingleMealScreen = props => {
  const { state, addToOrder } = useContext(MealContext);
  const meal = state.meals.find(meal => meal.id === props.route.params.mealId);
  const [order, setOrder] = useState({ meal: {}, quantity: 1 });

  const orderMeal = () => {
    order.meal = meal;
    addToOrder(order);
  };

  return (
    <View style={styles.container}>
      {/* Meal Information and Description */}
      <View style={styles.infoCard}>
        <Text>{meal.title}</Text>
        
        <TouchableOpacity>
        <Ionicons name="md-heart" size={32} color="red" />
        </TouchableOpacity>
        {/* md-heart-empty */}
      <View style={styles.itemContainer}>
        <Image
          style={{ paddingTop: 25 }}
          source={{
            uri: meal.imageUrl,
            width: 100,
            height: 100
          }} />

        {/* Meal Information and Description */}
        <View style={styles.infoCard}>
          <Text>{meal.title}</Text>
          <Text>{meal.price}</Text>
          
          <Ionicons name="md-heart" size={32} color="red" />
          {/* md-heart-empty */}
        </View>
      </View>

      <Picker
        selectedValue={order.quantity}
        style={{height: 50, width: 100}}
        onValueChange={itemValue => setOrder({ quantity: itemValue })}>
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
      </Picker>

      {/* Order Now button and input for quantity */}
      <View style={styles.actionButtons}>
        {/* I need a quantity input :/ */}
        <Button title='Order Now!' onPress = {orderMeal} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  infoCard: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
  },
});

export default SingleMealScreen;
