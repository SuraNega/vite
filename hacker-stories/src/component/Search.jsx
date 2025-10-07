// const  Search = ({welcome}) => {
//     // return(
//     //         <div>
//     //           <h1>{welcome.greeting} {welcome.title}</h1>
//     // <label htmlFor = "search">Search</label>
//     // <input id = "search" type = "text"/>

//     // <hr />



//     //     </div>

//     // )
//     const handleChange = (event) => {
//         console.log(event);
//         console.log(event.target.value);
//     };


// return (
//     <div>
//         <label htmlFor = "search">Search: </label>
//         <input id = "search" type = "text" onChange={handleChange}/>
//     </div>
// )
// };



import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};


export default Search;
