import { connect } from 'react-redux';
import Foo from '../components/Foo.jsx';
import handleClick from '../actions/handleClick';

const mapStateToProps = (state) => ({
    ...state
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(handleClick())
});

const FooContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Foo);

export default FooContainer;
