import { Button as MuiButton } from '@mui/material'
import { makeStyles } from 'tss-react/mui'

export default function ReverseButton({ toggled, ...props }) {
  const { classes, cx } = useStyles()

  return (
    <MuiButton
      variant={toggled ? 'contained' : 'outlined'}
      className={cx(classes.root, { [classes.toggled]: toggled })}
      {...props}
    />
  )
}

const useStyles = makeStyles()(() => ({
  root: {
    minWidth: 0,
    padding: '7px 8px',
    minHeight: 0,
    height: 35,

    transform: 'rotate(0)',
  },
  toggled: {},
}))
