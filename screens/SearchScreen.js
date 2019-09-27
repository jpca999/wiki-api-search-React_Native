import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import ResultDetail from '../components/ResultDetail';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const [albums, setAlbums] = useState([ ]); 


renderAlbums = () => {
  return albums.map(album =>
    <ResultDetail key={album.link} album={album} />
  );
}

  searchApi = () => {
    if  ( `${term}` == '' ) { return }; 
    axios.get(`${WIKI_URL}`+`${term}`)
      .then(response =>  { 
            let linksArr = response.data[3];
            let res = [];
              linksArr.forEach((element, index ) => {
                let tmpObj = {};
                tmpObj["link"] = linksArr[index ];
                res.push(tmpObj);                
            });
            
            linksArr.forEach( (element, index) => {
              res[index]["info"] =  response.data[2][index];
            }); 
            
            // console.log('34- res = ', res );
            setAlbums(res);         
    })
    .catch(error =>{
       console.log(error)
       setErrorMessage('somethign went wrong');
      })
};   


  return (<View>
              <SearchBar
              term={term}
              onTermChange={setTerm}
              onTermSubmit={ searchApi() }
            />
      <Text> {errorMessage} </Text>
      <Text> term = {term} </Text>

      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
  </View>
  );

};

const styles = StyleSheet.create({});

export default SearchScreen;
