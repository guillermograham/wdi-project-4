import React from 'react';

import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => {
  return(
    <div>
      <button
        onClick={ history.goBack }
        className="button is-link is-outlined show-buttons"
      >
        <i className="fa fa-arrow-left show-buttons-icon" aria-hidden="true"></i> Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
