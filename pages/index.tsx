import type { NextPage } from 'next';
import Button from '../components/Button/Button';
import Htag from '../components/Htag/Htag';
import Paragraph from '../components/Paragraph/Paragraph';
import Tag from '../components/Tag/Tag';

const Home: NextPage = () => {
  return (
    <>
    <Htag tag= "h1">Тест</Htag>
    <Button arrow="right" appearance='primary' className='he'>Основаная</Button>
    <Button arrow="down" appearance='ghost' className='he'>Вторая</Button>
    <Paragraph > Lorem, ipsum dolor sit amet</Paragraph>
    <Tag size='m' color='greenLight' >тег 1</Tag>
    <Tag size='s' href='google.com' color='ghost'>тег 2</Tag>
    <Tag size='s' color='red'>теdsdsdг 2</Tag>
    </>
  );
};

export default Home;