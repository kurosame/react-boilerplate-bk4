import { Child } from '@/components/Child'
import { addCount, getSagaCount, IState } from '@/modules/counter'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

export default connect(
  (s: { [key: string]: IState }) => ({ state: s.counter }),
  (d: Dispatch) => ({
    actions: {
      addCount: bindActionCreators(addCount, d),
      getSagaCount: bindActionCreators(getSagaCount, d)
    }
  })
)(Child)
