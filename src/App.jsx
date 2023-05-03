import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import Table from "./components/Table";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [row, setRow] = useState([
    {
      page: "page 1",
      description: "this is first page",
      status: "live",
    },
    {
      page: "page 2",
      description: "this is second page",
      status: "draft",
    },
    {
      page: "page 3",
      description: "this is third page",
      status: "error",
    },
  ]);

  const handleDeleteRows = (targetIndex) => {
    setRow(row.filter((_, idx) => idx !== targetIndex));
  };

  const handleSubmit = (newRow) => {
    setRow([...row, newRow]);
  };

  return (
    <div className="App">
      <Table row={row} deleteRow={handleDeleteRows} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default App;
