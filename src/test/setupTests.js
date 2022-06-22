import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
 

//These are required so not to be imported in every file
global.React = React
global.render = render
global.userEvent = userEvent
