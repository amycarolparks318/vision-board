import List from "./List";
import '../assets/sass/components/dash.scss';
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { createList, getLists, updateListbyField } from "../services/todos-api.js";
 

export default function Dash() {

  const [listName, setListName] = useState('');
  const [lists, setLists] = useState([]);
  const [num, setNum] = useState(1);

function fetchLists(){
  getLists().then(list => setLists(list));
};

useEffect(() => {
fetchLists() }, []);

  function addList() {
    const newList = {
      id: crypto.randomUUID(),
      name: listName,
      tasks: [],
      image: `src/assets/images/${num}.png`,
      date: dayjs(new Date()),
      editing: false
    };
     createList(newList).then(() => fetchLists());

  setLists([...lists, newList]);
    setListName('');
  };

  function updateList(list, fields) {
    const newList = { ...list, ...fields };
    const updatedLists = lists.map((list) => {
      if (list.id === newList.id) {
        return newList;
      } else {
        return list;
      };
    });
    updateListbyField(newList).then(() => fetchLists());
    setLists(updatedLists);
  };

  const sortLists = lists.sort((a, b) => {
    const listA = a.date;
    const listB = b.date;
    if (listA < listB) {
      return -1;
    }
    if (listA > listB) {
      return 1;
    }
    return 0;
  });

  return (
    <div>

      <div className="new-list">
        <input name="listname" id="listname" className="list-name" placeholder="Add new list" type="text" value={listName} onChange={(e) => {
          setListName(e.target.value);
        }} />
        <button className="add-list" 
        onClick={addList}
        // onClick={getLists}
        >Add List</button>
      </div>
      <section className="list-container">
        {sortLists.map((list) => <List list={list} key={list.id}
          lists={lists} setLists={setLists} updateList={updateList}
          num={num} setNum={setNum} fetchLists={fetchLists}
        />)}
      </section>

    </div>
  );
};








