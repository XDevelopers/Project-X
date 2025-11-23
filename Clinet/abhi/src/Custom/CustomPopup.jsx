import { useState } from "react";
import React from "react";
export default function CustomPopup({ open, setOpen, title, content }) {
  // Close the popup when clicking on the backdrop
  const handleClose = () => setOpen(false);

  return (
    <>
      {open && (
        <div className="fixed inset-0  bg-opacity-100 z-50 flex transition-all items-center justify-center">
          <div className="bg-black  p-6 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={handleClose}
                className="text-gray-600 hover:text-gray-900"
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="mt-4">{content}</div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleClose}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
