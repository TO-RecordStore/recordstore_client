import React from 'react';
import {useHistory} from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import Ghost from '../../assets/Ghost.jpeg';
import Button from '../Button';
import Styled404 from './style';

const NotFound = () => {

  const history = useHistory();
  const stackContent = useMediaQuery('(max-width:800px)');

  return (
    <Styled404 stackContent={stackContent}>
      <h3>404! Nothing here!</h3>
      <img src={Ghost} alt="man watching a ghost emerge out of a TV set" />
      <Button text="Go back!" clickHandler={() => history.goBack()}/>
    </Styled404>
  )
}

export default NotFound;