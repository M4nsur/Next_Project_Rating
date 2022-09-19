import type { NextPage } from 'next';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';


const Home: NextPage = () => {
  return (
    <>
    <Htag tag= "h1">Тест</Htag>
    <Button appearance='ghost'>Кнопка</Button>
    <Button appearance='primary'>Кнопка</Button>
    </>
  );
};

export default Home;
