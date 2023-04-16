import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWindowDimensions, {
  useAppSelector,
  useAppDispatch,
} from "../../app/hooks";
import { capitalizeFirstLetter, tranformStringDash } from "../../common/function";
import ButtonCategory from "../reuseable/ButtonCategory";
import BasicModel from "../../interface/model/BasicModel";
// import "../data/data.css";
function CategorySection(props: {
  sectionName: string;
  sectionIcon: string;
  category: BasicModel[];
  size: string;
}) {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div
        className={`${props.size} border border-primary rounded p-3 m-1 bg-success`}
      >
        <div className="row p-0 border border-warning mb-3 rounded bg-danger">
          <h3 className="text-category-1">
            <i className={props.sectionIcon}></i> {props.sectionName}
          </h3>
        </div>
        <div className="row p-0">
          {props.category.map((e, i) => (
            <div className="col-3"  key={i}>
              <ButtonCategory name={(tranformStringDash(e.name))} color="warning" onClick={()=>{
                console.log("aaaa")
                  navigate(`/item/category/${e.name}`);
              }}></ButtonCategory>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}


export default CategorySection;
