import React from 'react';
import { connect } from 'react-redux';

import MirrorPage from './MirrorPage';

const MirrorPageContainer = () => <MirrorPage />;

export default connect()(MirrorPageContainer);
