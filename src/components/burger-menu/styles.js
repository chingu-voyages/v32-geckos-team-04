import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  header: { padding: '10px', fontSize: '1.2rem' },
  footer: { position: 'absolute', bottom: '0' },
  button: {
    width: '9rem',
    height: '3rem',
    padding: '5px',
    textAlign: 'center',
    border: '1px solid black',
    backgroundColor: 'blue',
    borderRadius: '3rem',
    color: 'white',
    fontSize: '1.2rem',
    margin: 'auto',
    marginBottom: '5px',
    cursor: 'pointer',
  },
  container: {
    marginTop: '5rem',
  },
})

export default useStyles
