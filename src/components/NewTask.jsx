import { useRef, useState } from "react";

import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      //show error modal
      modal.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          No Task Was Written
        </h2>
        <p className="text-stone-600 mb-4">
          Please make sure enter a task to be able to add done.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          onClick={handleClick}
          className="text-stone-700 hover:text-stone-950"
        >
          Add Task
        </button>
      </div>
    </>
  );
}
