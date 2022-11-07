import {React, useState} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

const getMovies = async () => {
  const resp = await axios.get(
    'https://api.themoviedb.org/3/movie/550?api_key=46bdc290ee5b68255e0fc905786d4514',
  );

  return resp.data.results;
};

const App = () => {
  const [movie, setMovie] = useState('');

  getMovies().then(movies => {
    setMovie(movies[0]);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{movie.original_title}</Text>
    </View>
  );
};

export default App;
