import { connect } from 'react-redux'
import { Child } from '@/components/Child'
import { ReduxState } from '@/redux/state/index'

export default connect((s: ReduxState) => ({ state: s.counter }))(Child)
