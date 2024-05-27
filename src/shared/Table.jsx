import React from "react";
import { capitalize, objectKeys } from "../utils/javascript";

const Table = ({ tableData }) => {
  const headers = [];
  tableData.forEach((object) =>
    objectKeys(object).forEach((key) => {
      if (key !== "_id" && !headers.includes(key)) {
        headers.push(key);
      }
    })
  );

  return (
    <section style={sectionStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>
            {headers.map((heading, ind) => (
              <th key={ind} style={dataStyle}>
                {capitalize(heading)}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((data, ind) => (
            <tr key={ind}>
              {headers.map((field, id) => (
                <td key={id} style={dataStyle}>
                  {data[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Table;

const sectionStyle = {
  maxHeight: "600px",
  width: "fit-content",
  overflow: "auto",
  border: "1px solid #aaa",
};

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
};

const dataStyle = {
  padding: "6px 10px",
  border: "1px solid black",
};
