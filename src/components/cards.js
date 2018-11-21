import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button , Card , Title, Paragraph ,Drawer ,Appbar ,DefaultTheme } from 'react-native-paper';
// Importing Components and Files
import EachCard from './eachCard';








class Cards extends Component {
    state = {
        cards : [
            {id:1 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"13 Dec"  },
            {id:2 ,cardTitle:"I am the test " ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:3 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:4 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:5 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Denniro" ,datePosted:"25 Nov"  },
            {id:6 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
            {id:7 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Denniro" ,datePosted:"25 Nov"  },
            {id:8 ,cardTitle:"CARD TITLE" ,cardContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry" ,cardAuthor:"Samix" ,datePosted:"25 Nov"  },
        ]
    };
    render() { 
        return (
            <View>
                {this.state.cards.map(eachCard => (
                    <EachCard
                    key={eachCard.id}
                    Title={eachCard.cardTitle}
                    Content={eachCard.cardContent}
                    Author={eachCard.cardAuthor}
                    Date={eachCard.datePosted} 
                    selcted={true}
                    />
                    ))}
            </View>
        );
    }
}
 



export default Cards;