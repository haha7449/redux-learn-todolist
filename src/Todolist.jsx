import React, { Component } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
} from "./store/actionTypes";
import TodolistUI from "./TodolistUI";

class Todolsit extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);

    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        list = {this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value,
    };
    store.dispatch(action);
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM,
    };
    store.dispatch(action);
  }

  //点击删除元素
  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index,
    };
    store.dispatch(action);
  }
}

export default Todolsit;
