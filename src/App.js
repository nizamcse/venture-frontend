import React, { Component } from "react";
import "./App.css";
import KanbanBoard from "./components/kanban-board";
import "h8k-components";

const title = "Kanban Board";

const App = ({ tasks }) => {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default App;
