import React from 'react';
import PropTypes from 'prop-types';
import styles from './DevextremeButton.module.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import Button from 'devextreme-react/button';

const DevextremeButton = props => {
  return (
    <div className={styles.root}>
      <Button />
    </div>
  );
};

DevextremeButton.defaultProps = {

};

DevextremeButton.propTypes = {

};

export default DevextremeButton;
