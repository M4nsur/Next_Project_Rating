import type { NextPage } from 'next';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';

const Home: NextPage = () => {
  return (
    <>
    <Htag tag= "h1">Тест</Htag>
    <Button arrow="right" appearance='primary' className='he'>Основаная</Button>
    <Button arrow="down" appearance='ghost' className='he'>Вторая</Button>
    </>
  );
};

export default Home;
