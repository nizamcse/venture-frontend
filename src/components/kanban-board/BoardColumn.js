import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BoardColumn = ({
  tasks,
  stageValue,
  stageName,
  onBackward,
  onForward,
}) => {
  const [stageTasks, setStageTasks] = useState([]);
  useEffect(() => {
    let taskLists = [];
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].stage === stageValue) {
        taskLists.push(tasks[i]);
      }
    }
    setStageTasks(taskLists);
  }, [tasks, stageValue]);

  return (
    <div className="card outlined ml-20 mt-0">
      <div className="card-text">
        <h4>{stageName}</h4>
        <ul className="styled mt-50" data-testid={`stage-${stageValue}`}>
          {stageTasks.map((task, index) => {
            return (
              <li className="slide-up-fade-in" key={`${stageValue}${index}`}>
                <div className="li-content layout-row justify-content-between align-items-center">
                  <span data-testid={`${task.name.split(" ").join("-")}-name`}>
                    {task.name}
                  </span>
                  <div className="icons">
                    <button
                      disabled={task.stage === 0}
                      onClick={() => onBackward(task.name)}
                      className="icon-only x-small mx-2"
                      data-testid={`${task.name.split(" ").join("-")}-back`}
                    >
                      <i className="material-icons">arrow_back</i>
                    </button>
                    <button
                      disabled={task.stage === 3}
                      onClick={() => onForward(task.name)}
                      className="icon-only x-small mx-2"
                      data-testid={`${task.name.split(" ").join("-")}-forward`}
                    >
                      <i className="material-icons">arrow_forward</i>
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

BoardColumn.propTypes = {
  tasks: PropTypes.array,
  stageValue: PropTypes.number,
  stageName: PropTypes.string,
  onForward: PropTypes.func,
  onBackward: PropTypes.func,
};

export default BoardColumn;
