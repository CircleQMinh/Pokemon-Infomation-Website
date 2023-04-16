import React, { Fragment } from "react";
import { defaultImgNotFound } from "../../common/contant";
import { getItemImage, tranformStringDash } from "../../common/function";
import BasicModel from "../../interface/model/BasicModel";

function ItemList(props: { items: BasicModel[] }) {
  var items = props.items;
  return (
    <Fragment>
      {items && (
        <Fragment>
          {items.map((item, i) => (
            <div
              className="col-6 col-lg-2 item_display text-center text-capitalize"
              key={i}
            >
              <img
                src={getItemImage(item.name)}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null; // prevents looping
                  currentTarget.src = defaultImgNotFound;
                }}
              ></img>
              <a href={`/item/${item.name}`}>{tranformStringDash(item.name)}</a>
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}

export default ItemList;
