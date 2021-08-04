import clsx from 'clsx'
import { ListItemText, ListItemIcon, ListItem, List } from '@material-ui/core'

import useStyles from '../styles'

const BurgerList = ({ anchor, toggleDrawer }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {[
          { text: 'Home', image: '' },
          { text: 'Team', image: '' },
          { text: 'Projects', image: '' },
          { text: 'Calendar', image: '' },
          { text: 'Documents', image: '' },
        ].map(({ text, image }) => (
          <ListItem button key={text}>
            <ListItemIcon>{image}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default BurgerList
