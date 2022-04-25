import React, { Component } from "react";
import "./style.css";
import TodoItem from "./TodoItem";

class Todolsit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <>
        <h1>Todolist</h1>
        <label htmlFor="inputAera">输入标签</label>
        <input
          id="inputAera"
          className="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>{this.getTodolist()}</ul>
      </>
    );
  }

  getTodolist() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          handleClick={this.handleItemDelete}
        />
      );
    });
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState(() => ({
      inputValue: e.target.value,
    }));
  }

  handleBtnClick() {
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: "",
    }));
  }

  //点击删除元素
  handleItemDelete(index) {
    this.setState((preState) => {
      const list = [...preState.list];
      list.splice(index, 1); //删除元素
      return { list };
    });
  }
}

export default Todolsit;
