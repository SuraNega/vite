// component/list.js
const List = (props) => {
  return (
    <ul>
      {props.list.map((item) => (
        <li key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      ))}
    </ul>
  );
}

const Item = (props) => (
  <li>
    <span>
      <a href = {props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
);

export default List;