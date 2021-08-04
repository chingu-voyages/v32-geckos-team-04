import React, { useState } from 'react'
import { Button, SwipeableDrawer } from '@material-ui/core'
import ReorderIcon from '@material-ui/icons/Reorder'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

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
          <header className={classes.header}>
            Job <span style={{ color: 'blue' }}>Hunt</span>
          </header>
          <BurgerList anchor={anchor} toggleDrawer={toggleDrawer} />
          <footer className={classes.footer}>
            <FacebookIcon /> <TwitterIcon /> <LinkedInIcon /> <InstagramIcon />
          </footer>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}
