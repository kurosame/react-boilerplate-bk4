import { Dispatch, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Child } from '@/components/Child'
import { ReduxStates } from '@/redux/state/index'
import { addValue, sagaSample } from '@/redux/actions/counter'

export default connect(
  (s: ReduxStates) => ({ state: s.counter }),
  (d: Dispatch) => ({
    actions: {
      addValue: bindActionCreators(addValue, d),
      sagaSample: bindActionCreators(sagaSample, d)
    }
  })
)(Child)
