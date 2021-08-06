import React, { useState } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder'

import BurgerList from './component/BurgerList'
import useStyles from './styles'

export default function SwipeableTemporaryDrawer({ anchor }) {
  const [state, setState] = useState(false)
  const classes = useStyles()

  const toggleDrawer = () => setState(!state)

  return (
    <div>
      <React.Fragment key={anchor}>
        <Button onClick={toggleDrawer} style={{ float: 'right' }}>
          <ReorderIcon />
        </Button>
        <SwipeableDrawer
          anchor={anchor}
          open={state}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <header className={classes.header}>About</header>
          <BurgerList anchor={anchor} toggleDrawer={toggleDrawer} />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}
