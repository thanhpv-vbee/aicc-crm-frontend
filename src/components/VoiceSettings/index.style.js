import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  whiteBox: {
    marginTop: '20px',
    padding: '18px 20px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    minHeight: '36px',
  },
  title: {
    flexGrow: 1,
    color: '#6E6B7B',
    fontSize: '14px',
    fontWeight: 'bold',
    position: 'relative',
    zIndex: 1,
    overflow: 'hidden',
    textTransform: 'uppercase',
    margin: '0px',
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: '51%',
      height: '2px',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#F3F2F7',
    },
  },
  content: {
    marginTop: '11px',
  },
  label: {
    color: '#525F7F',
    fontSize: '14px',
    fontWeight: 'bold',
    marginTop: '0px',
    marginBottom: '4px',
  },
  rateInput: {
    width: '133px',
  },
  dashedBorder: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px dashed #C4C4C4',
    },
  },
  voiceWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  mr20: {
    marginRight: '20px',
  },
  slider: {
    color: '#FC6634',
    height: '5px',
    '& .MuiSlider-track': {
      height: '5px',
      borderRadius: '5px',
    },
    '& .MuiSlider-rail': {
      height: '5px',
      borderRadius: '5px',
      opacity: 1,
      backgroundColor: '#ECEEEF',
    },
    '& .MuiSlider-thumb': {
      width: '15px',
      height: '15px',
    },
  },
  textField: {
    backgroundColor: 'white',
    height: 'fit-content',
    borderRadius: theme.shape.borderRadius,
    '& .MuiInputBase-input': {
      paddingTop: '10.5px',
      paddingBottom: '10.5px',
    },
  },
  expandButton: {
    textTransform: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
  },
}));
