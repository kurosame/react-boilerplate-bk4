import { Child } from '@/components/Child'
import { addValue, sagaSample } from '@/redux/actions/counter'
import { IReduxStates } from '@/redux/state/index'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

export default connect(
  (s: IReduxStates) => ({ state: s.counter }),
  (d: Dispatch) => ({
    actions: {
      addValue: bindActionCreators(addValue, d),
      sagaSample: bindActionCreators(sagaSample, d)
    }
  })
)(Child)
