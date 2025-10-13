import './App.css';
import List from './component/list';
import Search from './component/Search';
import React from 'react';
import { useState } from 'react';

// const welcome = {
//   greeting: "Hello",
//   title: "React"
// };


  // function App(){
//   return (
//     <>
//       <Search welcome={welcome} />
//       <List list={stories} />
//     </>
//   );
// }

// export default App;

// const App = () => {
// const stories = [
//   {
//     title: 'React',
//     url: 'https://reactjs.dev/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,  
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ]; 
// const [searchTerm, setSearchTerm] = React.useState('');
// const handleSearch = (event) => {
// setSearchTerm(event.target.value);
// };
// return (
// <div>
// <h1>My Hacker Stories</h1>
// <Search onSearch={handleSearch} />
// <hr />
// <List list={stories} />
// </div>
// );
// };

const App = () => {
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
const [searchTerm, setSearchTerm] = React.useState('');
const handleSearch = (event) => {
setSearchTerm(event.target.value);
};
const searchedStories = stories.filter(function (story) {
return story.title.includes(searchTerm);

});
return (
<div>
<h1>My Hacker Stories</h1>
<Search onSearch={handleSearch} />
<hr />
<List list={searchedStories} />
</div>
);
};


export default App;


