import { Button as MuiButton } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

export default function Button(props) {
  const { classes } = useStyles()

  return <MuiButton className={classes.root} {...props} />
}

const useStyles = makeStyles()(() => ({
  root: {},
}))
