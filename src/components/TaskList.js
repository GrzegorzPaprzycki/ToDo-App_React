import React from 'react';
import Task from './Task'

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  // done.sort((a, b) => b.finishDate - a.finishDate)

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1
      }
      if (a.finishDate > b.finishDate) {
        return -1
      }
      return 0
    })
  }
  if (active.length >= 2) {
    active.sort((a, b) => {

      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }




  // console.log(active, done);
  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
  const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change} />)

  return (
    <>
      <div className="active">
        <h1>Tasks to do</h1>
        {activeTasks.length > 0 ? <div>{activeTasks}</div> : <p>No tasks! Time to add some cool tasks :)</p>}
      </div>

      <div className="done">
        <h3>Tasks done <em>({done.length})</em></h3>
        {done.length > 5 && <span style={{ fontSize: 10 }}>Only last 5 tasks are displayed</span>}
        {doneTasks.slice(0, 5)}

      </div>
    </>
  );
}

export default TaskList;