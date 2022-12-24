import { Button } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

export default function App() {
  const { classes } = useStyles()

  return <div className={classes.root}>asasd</div>
}

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
}))
