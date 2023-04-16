import React, { Fragment, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
    getItemImage,
  GetPaddedPokemonId,
  tranformStringDash,
} from "../../../common/function";
import ItemList from "../../../components/infomation/ItemList";
import { infomationActions, infomationState } from "../InfomationSlice";
import '../item/itemCategoryPage.css'

function ItemCategoryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const itemId = params.id;
  const state = useAppSelector(infomationState);
  const dispatch = useAppDispatch();

  const itemCategory = state.itemsInCategory;
  useEffect(() => {
    dispatch(infomationActions.getItemCategoryInfo(itemId!));
  }, []);

  if (state.status == "failed") {
    navigate("/error");
  }


  useEffect(() => {
    return () => {
        console.log('******************* UNMOUNTED');
    };
}, []);

  return (
    <Fragment>
      {itemCategory && ( <Fragment>
        <div className="container">
          <div className="row">
            <h2 className="text-capitalize text-center">
              {tranformStringDash(itemCategory.name)}
            </h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Category ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Pocket</th>
                  <th scope="col">Total Items</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{itemCategory.id}</th>
                  <td className="text-capitalize ">  {tranformStringDash(itemCategory.name)}</td>
                  <td className="text-capitalize ">{itemCategory.pocket.name}</td>
                  <td>{itemCategory.items.length}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="container">
            <div className="row justify-content-center align-items-center">
             <ItemList items={itemCategory.items}></ItemList>
            </div>
        </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default ItemCategoryPage;
