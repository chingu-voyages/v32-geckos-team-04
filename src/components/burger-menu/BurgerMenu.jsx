import React, { useState } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder'

import BurgerList from './component/BurgerList'

export default function SwipeableTemporaryDrawer({ anchor }) {
  const [state, setState] = useState(false)

  const toggleDrawer = () => setState(!state)

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer}>
          <ReorderIcon />
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <header>Title</header>
          <BurgerList anchor={anchor} toggleDrawer={toggleDrawer} />
          <footer>Images here</footer>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}
