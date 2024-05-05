
import { connect } from 'react-redux';
import './App.css'
import { setTitle } from './store';

function App(props) {

  const func = () => {
    props.setTitle();
  }
  return (
    <>
      <h1>{props.title}</h1>
      <button onClick={func}>Кнопка</button>
    </>
  )
}
const mapStateToProps = (state) => {
    return {
      title: state.title
  }
}
export default connect(mapStateToProps, {setTitle}) (App)
