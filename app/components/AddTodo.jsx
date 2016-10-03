import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo } from 'actions'

export class AddTodo extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let { dispatch } = this.props
    let todoText = this.refs.todoText.value
    if (todoText.length > 0) {
      this.refs.todoText.value = ''
      dispatch(addTodo(todoText))
    } else {
      this.refs.todoText.focus()
    }
  }

  render () {
    return(
        <div className="container__footer">
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            <button className="button expanded">Add Todo</button>
          </form>
      </div>
    )
  }
}

export default connect()(AddTodo);
