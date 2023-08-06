import { useEffect, useState } from 'react';

import { apiMarvel } from '@/lib/axios'
import { Container } from './styles'
import CardInfo from '../cardInfo';
import { configMarvelApi } from '@/utils/configMarvelApi';

export interface IInfoCharacters {
  id: string;
  name: string;
  thumbnail: { path: string; extension: string };
  description: string;
}

export function HomePage() {
  const [characters, setCharacters] = useState<IInfoCharacters[]>([])
  const { timestamp, apiKey, hash } = configMarvelApi

  const request = apiMarvel.get(
    `/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hash}`
  );


  useEffect(() => {
    const getAgents = async () => {
      const { data: { data } } = await request
      setCharacters(data.results);
    }
    getAgents()
  }, [])

  return (
    <Container>
      <CardInfo infoCharacters={characters}/>
    </Container>
  )
}
