import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true;
    }else{
      return false;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  }

  handleClick() {
    const { handleClick, index } = this.props;
    handleClick(index);
  }
}

//传进来的值必须是什么格式
TodoItem.propTypes = {
  content: PropTypes.string,
  test: PropTypes.string,
  handleClick: PropTypes.func,
  index: PropTypes.number.isRequired,
};

//没传进来的默认值

export default TodoItem;
