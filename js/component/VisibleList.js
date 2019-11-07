import { connect } from 'react-redux'
import { toggleTodo } from '../action'
import ContentList from './ContentList'
 

 

 

const mapStateToProps = state => ({
    todos: state.todos
});

// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps,
)(ContentList)