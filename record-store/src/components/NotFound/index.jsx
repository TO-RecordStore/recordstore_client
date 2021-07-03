import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { useMediaQuery } from '@material-ui/core';
import Ghost from '../../assets/Ghost.jpeg';
import Button from '../Button';
import Styled404 from './style';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { AppContext } from '../../context/Context';

const NotFound = () => {
  const { appTitle } = useContext(AppContext);

  useDocumentTitle(`${appTitle} | 404`);

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