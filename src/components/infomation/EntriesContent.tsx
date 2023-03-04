import React from "react";
import { JsxElement } from "typescript";

type EntriesContentProps = {
  id: String;
  content?: React.ReactNode;
  isActive: boolean;
};
function EntriesContent(props: EntriesContentProps) {
  const id = props.id.replace(" ","");

  return (
    <div
      className={`tab-pane fade ${props.isActive ? "show active" : ""}`}
      id={`${id}`}
      role="tabpanel"
      aria-labelledby={`${id}-tab"`}
    >
      {props.content}
    </div>
  );
}

export default EntriesContent;
