import { Button as MuiButton } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ReverseButton({ toggled, ...props }) {
  const { classes, cx } = useStyles()

  return (
    <MuiButton
      variant="contained"
      className={cx(classes.root, { [classes.toggled]: toggled })}
      {...props}
    >
      <FontAwesomeIcon icon={faArrowDown} />
    </MuiButton>
  )
}

const useStyles = makeStyles()(() => ({
  root: {
    minWidth: 0,
    padding: '7px 8px',
    minHeight: 0,
    flexShrink: 0,
    height: 35,
    width: 35,
    transition: 'all 200ms cubic-bezier(0.63, 0, 0.54, 0.98)',
    transform: 'rotate(0)',
    fontSize: 18,
  },
  toggled: {
    transform: 'rotate(-180deg)',
  },
}))
