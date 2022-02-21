import { ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { getPokemonDetailsApi } from "../api/pokemon";
import { Header } from "../components/Pokemon/Header";
import { Type } from "../components/Pokemon/Type";
import { Stats } from "../components/Stats";

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        console.log(params.id);
        setPokemon(response);
      } catch (error) {
        console.log(error);
        navigation.goBack();
      }
    })();
  }, [params]);

  //si pokemon es undefined o null va a retornar null, en el caso de que tenga contenido va a renderizar el contenido de abajo.
  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats}></Stats>
    </ScrollView>
  );
}

export { Pokemon };
