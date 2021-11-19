import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  container: {
    marginTop: '20px',
    padding: '18px 20px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '6px',
    boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#6E6B7B',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: '0px',
    marginBottom: '16px',
  },
  border: {
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
  },
  editorContainer: {
    padding: '15px 12px 12px 17px',
  },
  textareaContent: {
    width: '100%',
    height: '100%',
    cursor: 'text',
    fontWeight: '400',
    lineHeight: '1.5',
    verticalAlign: 'baseline',
    paddingBottom: '14px',
    fontSize: '16px',
    border: 'none',
    background: 'transparent',
    resize: 'none',
    '&,&:focus': {
      outline: 'none',
    },
  },
  audioContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '48px 17px',
  },
  listeningButton: {
    borderRadius: '6px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  labelAudio: {
    fontSize: '16px',
    fontWeight: 900,
    color: '#FC6634',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  audioTitle: {
    fontSize: '16px',
    fontWeight: 900,
    color: '#8898AA',
  },
  fileType: {
    fontSize: '12px',
    fontWeight: 900,
    color: '#8898AA',
    marginTop: '17px 0px 0px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '3fr 2fr 36px',
    columnGap: '20px',
  },
  cardContent: {
    height: '230px',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: '5px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '5px',
      backgroundColor: '#E4E2EB',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#FC6634',
      borderRadius: '5px',
    },
  },
  dashedBorder: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px dashed #C4C4C4',
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
  clearButton: {
    color: '#EA5455',
    padding: '5px',
  },
  mb10: {
    marginBottom: '10px',
  },
}));
