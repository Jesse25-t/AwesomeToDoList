import {Button, StyleSheet, View} from 'react-native';
import {useState} from 'react';

export const RandomQuotes = async () => {
  const [randomQuote, setRandomQuote] = useState('');

  const response = await fetch(`https://animechan.xyz/api/random`);
  const quote = await response.json();
  console.log(quote);
  setRandomQuote(quote);

  useEffect(() => randomQuote(), []);
  return (
    <>
      <View style={styles.form}>
        <Text>{quoteData.quote}</Text>
        <Text>
          {quoteData.character}, {quoteData.anime}
        </Text>
        <Button title="Display Random quotes" onPress={response} />
      </View>
    </>
  );
};
