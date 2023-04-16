import React, { Fragment } from "react";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import InfoCardList from "../../components/search/infoCardList";
import { coreState, coreActions } from "./coreSlice";
import './core.css';
function Core() {
  const state = useAppSelector(coreState);
  const dispatch = useAppDispatch();
  

  return (
    <Fragment>
      
      <main role="main" className="container">
      <div className="d-flex align-items-center p-3 my-3 text-white-50 bg-purple rounded box-shadow">
        <img className="mr-3" src="static/img/logo.jpg" alt="" width="48" height="48"/>
        <div className="lh-100">
          <h6 className="mb-0 text-white lh-100">Circle's Pokemon Infomation Website</h6>
          <small>A pokemon website to find information about pokemon games also have mini games such as 'Random PKM Battle' and 'PKM Guessing Game'</small>
        </div>
      </div>

      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">Recent updates</h6>
        <div className="media text-muted pt-3">
         
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <div className="media text-muted pt-3">
          
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <div className="media text-muted pt-3">
         
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <strong className="d-block text-gray-dark">@username</strong>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
          </p>
        </div>
        <small className="d-block text-right mt-3">
          <a href="#">All updates</a>
        </small>
      </div>

      <div className="my-3 p-3 bg-white rounded box-shadow">
        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestions</h6>
        <div className="media text-muted pt-3">
          
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <div className="media text-muted pt-3">
         
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <div className="media text-muted pt-3">
         
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className="d-flex justify-content-between align-items-center w-100">
              <strong className="text-gray-dark">Full Name</strong>
              <a href="#">Follow</a>
            </div>
            <span className="d-block">@username</span>
          </div>
        </div>
        <small className="d-block text-right mt-3">
          <a href="#">All suggestions</a>
        </small>
      </div>
    </main>

    </Fragment>
  );
}

export default Core;
