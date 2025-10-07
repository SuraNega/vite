import './App.css';
import List from './component/list';
import Search from './component/Search';

const welcome = {
  greeting: "Hello",
  title: "React"
};

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.dev/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,  
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
]; 



function App(){
  return (
    <>
      <Search welcome={welcome} />
      <List list={stories} />
    </>
  );
}

export default App;