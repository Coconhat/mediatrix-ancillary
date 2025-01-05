"use client";

import { useState, useEffect, useRef } from "react";

export default function DashboardNav({
  selectedDepartment,
  setSelectedDepartment,
  departments,
}) {
  const [modal, isModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        isModal(false);
      }
    }

    if (modal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modal]);

  function handleModal() {
    isModal(!modal);
  }

  function handleDepartmentSelect(department) {
    setSelectedDepartment(department); // Update the selected department
    isModal(false); // Close the modal
  }

  return (
    <div className="relative">
      {/* Header Section */}
      <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
        <span className="text-lg font-semibold">
          Now viewing{" "}
          <span className="bg-blue-800 text-white py-2 px-3 rounded-xl">
            {selectedDepartment}
          </span>
        </span>
        <button
          onClick={handleModal}
          className="px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900"
        >
          View other department dashboard
        </button>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg shadow-lg w-1/2 max-h-[70vh] overflow-y-auto relative"
          >
            <h2 className="text-xl font-bold mb-4">Select a Department</h2>
            <ul className="space-y-2">
              {departments.map((department, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleDepartmentSelect(department)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                  >
                    {department}
                  </button>
                </li>
              ))}
            </ul>
            {/* Close Button at the Bottom */}
            <button
              onClick={handleModal}
              className="mt-4 w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
