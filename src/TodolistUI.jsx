import React from "react";
import { List, Input, Button } from "antd";
const TodolistUI = (props) => {
  return (
    <div style={{ marginLeft: "10px", marginTop: "10px" }}>
      <div>
        <Input
          value={props.inputValue}
          onChange={props.handleInputChange}
          placeholder="Basic usage"
          style={{ width: "300px" }}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
          style={{ marginLeft: "10px" }}
        >
          提交
        </Button>
      </div>
      <List
        style={{ width: "300px", marginTop: "10px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              props.handleItemDelete(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </div>
  );
};

export default TodolistUI;
