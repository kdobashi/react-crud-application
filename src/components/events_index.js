import React, {Component} from 'react';
import { connect } from 'react-redux'
import { readEvents } from '../actions'
import _ from 'lodash'

class EventsIndex extends Component {
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>Body</th>              
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    )
  }
}
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })
// 上記は省略しないと下記のようになる
// const mapDispatchToProps = dispatch =>({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
