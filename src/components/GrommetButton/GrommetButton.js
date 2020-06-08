import React from 'react';
import PropTypes from 'prop-types';
import styles from './GrommetButton.module.css';
import { Button } from 'grommet';

const GrommetButton = props => {
  return (
    <div className={styles.root}>
      <Button />
    </div>
  );
};

GrommetButton.defaultProps = {

};

GrommetButton.propTypes = {

};

export default GrommetButton;
