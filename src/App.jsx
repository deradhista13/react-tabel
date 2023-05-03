import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal";
import Table from "./components/Table";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [rows, setRows] = useState([
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
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  return (
    <div className="App">
      <Table rows={rows} deleteRow={handleDeleteRows} />
      <button className="btn" onClick={() => setModalOpen(true)}>
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
