import React from 'react';
import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { Container } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = event =>
    dispatch(setStatusFilter(event.currentTarget.value));

  return (
    <Container>
      <label>
        Find contacts by name
        <input type="text" onChange={onChange} />
      </label>
    </Container>
  );
};

export default Filter;
