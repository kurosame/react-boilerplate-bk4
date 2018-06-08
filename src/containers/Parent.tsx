import { Child } from '@/components/Child'
import { addValue, IState, sagaSample } from '@/modules/counter'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

export default connect(
  (s: { [key: string]: IState }) => ({ state: s.counter }),
  (d: Dispatch) => ({
    actions: {
      addValue: bindActionCreators(addValue, d),
      sagaSample: bindActionCreators(sagaSample, d)
    }
  })
)(Child)
