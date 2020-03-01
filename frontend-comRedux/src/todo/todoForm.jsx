import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/grid";
import IconButton from "../template/iconButton";

import { changeDescription } from "./todoActions";
const TodoForm = props => {
  const keyHandler = e => {
    if (e.key === "Enter") {
      e.shiftkey ? props.handleSearch() : props.handleAdd();
    } else if (e.which == 27) {
      props.handlerClear();
    }
  };

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        {/* <div className='col-xs-12 col-sm-9 col-md-10'> */}
        <input
          id='description'
          className='form-control'
          placeholder='Adicione uma tarefa'
          //passando o metodo da action
          onChange={props.changeDescription}
          onKeyUp={keyHandler}
          value={props.description}
        ></input>
        {/* </div> */}
      </Grid>
      <Grid cols='12 3 2'>
        {/* <div className='col-xs-12 col-sm-3 col-md-2'> */}
        <IconButton
          style='primary'
          icon='plus'
          onClick={props.handleAdd}
        ></IconButton>
        <IconButton
          style='info'
          icon='search'
          onClick={props.handleSearch}
        ></IconButton>
        <IconButton
          style='default'
          icon='close'
          onClick={props.handleClear}
        ></IconButton>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  description: state.todo.description
});
//Dispara açao e manda para os reducers
const mapDispatchToProps = dispatch =>
  bindActionCreators({ changeDescription }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
