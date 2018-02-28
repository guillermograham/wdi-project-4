import React from 'react';

import { withRouter } from 'react-router-dom';

// withRouter passes in history on the prop - need to get it from react-router-dom
// export the functional component with withRouter

// history is the array of history of urls

const BackButton = ({ history }) => {
  return(
    <div>
      <button onClick={ history.goBack } className="main-button">
        <i className="fa fa-arrow-left" aria-hidden="true"></i>Back
      </button>
    </div>
  );
};

export default withRouter(BackButton);
