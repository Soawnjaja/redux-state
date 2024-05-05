
import { connect } from 'react-redux';
import './App.css'
import { setTitle } from './store';

function App(props) {


  return (
    <>
      <h1>{props.title}</h1>
      <input type="text" value={props.inputValue} onChange={(event) => props.setTitle(event.target.value)} />
    
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    title: state.title,
    inputValue: state.title // или любое другое поле из хранилища
  };
};
export default connect(mapStateToProps, {setTitle}) (App)
