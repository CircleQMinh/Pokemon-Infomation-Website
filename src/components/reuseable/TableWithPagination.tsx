import React, { Fragment, useEffect, useState } from "react";

function TableWithPagination(props: {
  data: string[][];
  columnName: string[];
  pageSzie: number;
}) {
  const data = props.data;
  const columnName = props.columnName;
  const totalRecord = props.data.length;
  const totalCol = props.columnName.length;
  const pageSize = props.pageSzie;
  const numberOfPage = calculatePagesCount(pageSize, totalRecord);

  const [selectedPage, setSelectedPage] = useState(1);

  useEffect(() => {}, [selectedPage]);

  function onClickNavigateBack() {
    if (selectedPage > 1) {
      setSelectedPage(selectedPage - 1);
    }
  }
  function onClickNavigateNext() {
    if (selectedPage < numberOfPage) {
      setSelectedPage(selectedPage + 1);
    }
  }
  function onClickNavigateTo(page: number) {
    setSelectedPage(page);
  }
  function RenderPagination(numberOfPage: number) {
    if(numberOfPage == 1){
      return ("")
    }
    return (
      <div className="float-end">
        {" "}
        <nav aria-label="Page navigation example" className="float-end">
          <ul className="pagination">
            <li className="page-item" onClick={onClickNavigateBack}>
              <a className="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {Array(numberOfPage)
              .fill(0)
              .map((e, i) => (
                <li
                  className={`page-item ${
                    selectedPage == i + 1 ? "active" : ""
                  }`}
                  key={i}
                  onClick={() => {
                    onClickNavigateTo(i + 1);
                  }}
                >
                  <a className="page-link">{i + 1}</a>
                </li>
              ))}

            <li className="page-item" onClick={onClickNavigateNext}>
              <a className="page-link" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }

  function RenderRowData(row: string[], display: boolean) {
    return (
      <tr>
        {row.map((e, i) => (
          display && (
          <td className="text-capitalize" key={e + i}>
            {e}
          </td>)
        ))}
      </tr>
    );
  }

  return (
    <Fragment>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {columnName.map((e) => (
              <th key={e}>{e}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            const displayRow = selectedPage * pageSize >= (i+1) && (selectedPage - 1) * pageSize < (i+1)
            return <Fragment key={i}>{RenderRowData(e, displayRow)}</Fragment>;
          })}
        </tbody>
      </table>
      {RenderPagination(numberOfPage)}
    </Fragment>
  );
}
const calculatePagesCount = (pageSize: number, totalCount: number) => {
  // we suppose that if we have 0 items we want 1 empty page
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

export default TableWithPagination;
