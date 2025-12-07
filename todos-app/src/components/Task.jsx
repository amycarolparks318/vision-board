import '../assets/sass/components/task.scss';
// import '../assets/sass/components/list.scss';
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faSave, faCancel } from '@fortawesome/free-solid-svg-icons';


export default function Task({ task, list, updateList, updateTask,
  text, setText
}) {

  function findTaskIdx() {
    return list.tasks.findIndex((item) => item == task);
  };

  function deleteTask() {
    const taskIdx = findTaskIdx();

    if (taskIdx > -1) {
      const updatedTask = list.tasks.toSpliced(taskIdx, 1);
      updateList(list, { tasks: [...updatedTask] });
    };
  };


  function checkDone() {
    if (task.checked == false) {
      updateTask(task, { checked: true });
    }
    else {
      updateTask(task, { checked: false });
    };
  };

  function editTask(e) {
    updateTask(task, { summary: text, editing: false });
  };

  function updateEditTask() {
    task.editing == false ? updateTask(task, { editing: true, }) : updateTask(task, { editing: false });
  };

  function cancelEditTask(e) {
    updateTask(task, { summary: task.summary, editing: false });
  };

  return (
    <div className="task-title">
      <input className='checkbox' type='checkbox' onChange={checkDone}
        checked={task.checked} />
      <h4 className={task.checked == false ? 'progress' : 'done'}>
        {task.summary}
        <FontAwesomeIcon data-testid="editor"
          icon={faEdit}
          onClick={updateEditTask}
          className={task.editing == false ? 'active' : 'edit-list'}
        />
        <FontAwesomeIcon icon={faSave}
          className={task.editing == false ? 'edit-list' : 'active'}
          onClick={editTask}
        />
        <FontAwesomeIcon data-testid="trash"
        icon={faTrash} onClick={deleteTask}
          className={task.editing == false ? 'active' : 'edit-list'} />
        <FontAwesomeIcon icon={faCancel} onClick={cancelEditTask}
          className={task.editing == false ? 'edit-list' : 'active'} />
        <input type='text'
          onChange={(e) => setText(e.target.value)}
          className={task.editing == false ? 'edit-list' : 'active'} />
      </h4>
    </div>
  );
};