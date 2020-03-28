import React from 'react';

const Task = (props) => {

  const style = {
    color: 'red',
  }

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="task">
        <p>
          <strong style={important ? style : null}>{text}</strong> - until <span>{date} </span>
          <button className="done" onClick={() => props.change(id)}>Done</button>
          <button className="delete" onClick={() => props.delete(id)}>Delete</button>
        </p>

      </div>
    );
  } else {

    const finish = new Date(finishDate).toLocaleString()
    return (
      <div>

        <p>
          <strong>{text}</strong><em> (until {date})</em><br />
          - done <span> {finish}</span>

          <button className="delete" onClick={() => props.delete(id)}>Delete</button>
        </p>
      </div>
    )
  }
}

export default Task;