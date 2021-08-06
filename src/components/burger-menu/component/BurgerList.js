import clsx from 'clsx'
import { ListItemText, ListItem, List } from '@material-ui/core'

import useStyles from '../styles'

const BurgerList = ({ toggleDrawer, isUserLogin }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {!isUserLogin ? (
        <div className={classes.container}>
          <div className={classes.button}>SignIn</div>
          <div
            style={{
              margin: 'auto',
              width: '3rem',
              fontWeight: '500',
              cursor: 'pointer',
            }}
          >
            SignUp
          </div>
        </div>
      ) : (
        <List>
          {['Home', 'Team'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <div className={classes.button} style={{ marginTop: '1rem' }}>
            User
          </div>
        </List>
      )}
    </div>
  )
}

export default BurgerList
