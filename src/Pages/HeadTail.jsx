import { useState } from "react";

const HeadTail = () => {
  const [selected, setSelected] = useState("");
  const [columns, setColumns] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!selected) {
      setError("Please select value from dropdown");
      return;
    }

    setError("");
    let newColumns = [...columns];

    let lenghtOfColumns = newColumns.length;

    if (
      lenghtOfColumns !== 0 &&
      newColumns[lenghtOfColumns - 1].value === selected
    ) {
      newColumns[lenghtOfColumns - 1].items.push(selected);
    } else {
      newColumns.push({ value: selected, items: [selected] });
    }

    setColumns(newColumns);
    setSelected("");
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 text-center">
            Head & Tail Page
          </h1>

          <div className="max-w-md mx-auto mb-8">
            <div className="space-y-4">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
              >
                <option value="">Select Value</option>
                <option value="H">H</option>
                <option value="T">T</option>
              </select>

              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white rounded-lg px-4 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Submit
              </button>

              {error && (
                <p className="text-red-600 text-sm text-center bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                  {error}
                </p>
              )}
            </div>
          </div>

          {columns.length > 0 && (
            <div className="flex flex-wrap gap-6 justify-center">
              {columns.map((col,index) => (
                <div key ={index} className="space-y-2">
                  {col.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white border border-gray-200 rounded px-3 py-2 text-center text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadTail;
