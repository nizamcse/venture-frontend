import React, { useState, useEffect } from "react";
import BoardColumn from "./BoardColumn";
import PropTypes from "prop-types";

const KanbanBoard = ({ tasks }) => {
  const stagesNames = ["Backlog", "To Do", "Ongoing", "Done"];
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  const onForwardStage = (taskName) => {
    // Cloning the stage first so that id does not impact on actual stage
    const cloneList = [...taskList];
    const updatedList = cloneList.map((task) => {
      if (task.name === taskName && task.stage != 3)
        return { ...task, stage: task.stage + 1 };
      return task;
    });
    setTaskList(updatedList);
  };
  const onBackwardStage = (taskName) => {
    // Cloning the stage first so that id does not impact on actual stage
    const cloneList = [...taskList];
    const updatedList = cloneList.map((task) => {
      if (task.name === taskName && task.stage != 0)
        return { ...task, stage: task.stage - 1 };
      return task;
    });
    setTaskList(updatedList);
  };

  return (
    <div className="mt-20 layout-column justify-content-center align-items-center">
      <div className="mt-50 layout-row">
        {stagesNames.map((stageName, i) => (
          <BoardColumn
            stageValue={i}
            stageName={stageName}
            tasks={taskList}
            key={`${i}`}
            onForward={onForwardStage}
            onBackward={onBackwardStage}
          />
        ))}
      </div>
    </div>
  );
};

KanbanBoard.propTypes = {
  tasks: PropTypes.array,
};

export default KanbanBoard;
