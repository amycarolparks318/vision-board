// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faArrowRight, faArrowLeft, faCancel } from '@fortawesome/free-solid-svg-icons';
import '../assets/sass/components/list.scss';
import Task from './Task';
import { useState } from 'react';
import Image from './Image';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { deleteListById } from "../services/todos-api.js";


export default function List({ list, updateList, lists, setLists, num, setNum, fetchLists }) {
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [text, setText] = useState('');

  function addTask() {
    const newTask = {
      id: crypto.randomUUID(),
      summary: newTaskDesc,
      checked: false,
      editing: false
    };
    updateList(list, { tasks: [...list.tasks, newTask] });
    setNewTaskDesc('');
  };

  function updateTask(task, fields) {
    const newTask = { ...task, ...fields };
    const updatedTaskList = list.tasks.map((task) => {
      if (task.id === newTask.id) {
        return newTask;
      } else {
        return task;
      };
    });
    updateList(list, { tasks: updatedTaskList }, {});
  };

  function findListIdx() {
    return lists.findIndex((item) => item == list);
  };

  function deleteList() {
    const listIdx = findListIdx();
  
    if (listIdx > -1) {
      setLists(lists.toSpliced(listIdx, 1));
    }
    deleteListById(list).then(() => fetchLists());
  };

  const sortTasks = list.tasks.sort((a, b) => {
    const nameA = a.checked;
    const nameB = b.checked;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  function updateImageRight() {
    if (num > 0 && num <= 3) {
      num++;
      setNum(num);
      updateList(list, { image: `src/assets/images/${num}.png` });
    };
  };

  function updateImageLeft() {
    if (num > 1) {
      num--;
      setNum(num);
      updateList(list, { image: `src/assets/images/${num}.png` });
    };
  };

  function updateDueDate(e) {
    updateList(list, { date: e });
  };

  function editList(e) {
    updateList(list, { name: text, editing: false });
  };

  function updateEditing() {
    list.editing == false ? updateList(list, { editing: true, }) : updateList(list, { editing: false });
  };

  function cancelEdit(e) {
    updateList(list, { name: list.name, editing: false });
  };

  return (
    <div className='list'>
      <div className='list-content'>
        <FontAwesomeIcon icon={faArrowRight}
          onClick={updateImageRight}
          className={'arrow'} />
        <FontAwesomeIcon icon={faArrowLeft}
          onClick={updateImageLeft}
          className={'arrow-left'} />
        <Image url={list.image} name={list.image} />
        <h3>{list.name}
          <FontAwesomeIcon
            icon={faEdit}
            onClick={updateEditing}
            className={list.editing == false ? 'active' : 'edit-list'}
          />
          <FontAwesomeIcon icon={faSave}
            className={list.editing == false ? 'edit-list' : 'active'}
            onClick={editList}
          />
          <FontAwesomeIcon icon={faTrash} onClick={deleteList}
            className={list.editing == false ? 'active' : 'edit-list'} />
          <FontAwesomeIcon icon={faCancel} onClick={cancelEdit}
            className={list.editing == false ? 'edit-list' : 'active'} />
          <input type='text'
            onChange={(e) => setText(e.target.value)}
            className={list.editing == false ? 'edit-list' : 'active'} />
        </h3>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="Due Date"
            value={dayjs(list.date)} onChange={updateDueDate} />
        </LocalizationProvider>

        <section className="new-task">
          <input className="task-name" placeholder="Enter Task Description" type="text"
            onChange={(e) => { setNewTaskDesc(e.target.value); }} value={newTaskDesc} />
          <button className="add-task" onClick={addTask}>Add Task</button>
          <section className="task-container">
            {sortTasks.map((task) => <Task updateList={updateList} task={task} list={list}
              key={task.id} updateTask={updateTask}
             
              text={text} setText={setText}
            />)}
          </section>
        </section>
      </div>
    </div>

  );
};