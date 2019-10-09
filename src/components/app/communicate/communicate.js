import React from 'react'
import {Router} from '@reach/router'

import MakeARequest from './makeARequest/makeARequest'
import ExpressGratitude from './expressGratitude/expressGratitude'
import OfferEmpathy from './offerEmpathy/offerEmpathy'
import ActionsMenu from './actionsMenu/actionsMenu'

const Communicate = () => (
  <Router>
    <ActionsMenu default />
    <MakeARequest path='make-a-request' />
    <ExpressGratitude path='express-gratitude' />
    <OfferEmpathy path='offer-empathy' />
  </Router>
)

export default Communicate
