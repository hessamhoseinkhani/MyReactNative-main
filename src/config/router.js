import React from 'react';
import { StackNavigator , createAppContainer } from 'react-navigation';

import ArticlesList from '../components/articlesList';
import articleContent from '../components/articleContent';

import Home from '../components/Home';

 export const FeedStack = StackNavigator({
  Feed: {
    screen: ArticlesList
    // navigationOptions: {
    //   title: 'Feed',
    // },
  },
  Details: {
    screen: articleContent,
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    // }),
  },
});

//export default createAppContainer(FeedStack);

