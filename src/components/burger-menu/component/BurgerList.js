import clsx from 'clsx'
import { ListItemText, ListItemIcon, ListItem, List } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import GroupIcon from '@material-ui/icons/Group'
import FolderIcon from '@material-ui/icons/Folder'
import EventNoteIcon from '@material-ui/icons/EventNote'
import AssignmentIcon from '@material-ui/icons/Assignment'

import useStyles from '../styles'

const BurgerList = ({ toggleDrawer }) => {
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {[
          { text: 'Home', image: <HomeIcon /> },
          { text: 'Team', image: <GroupIcon /> },
          { text: 'Projects', image: <FolderIcon /> },
          { text: 'Calendar', image: <EventNoteIcon /> },
          { text: 'Documents', image: <AssignmentIcon /> },
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
