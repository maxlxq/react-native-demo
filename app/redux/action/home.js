
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

export default {
  increase() {
    return {
      type: INCREASE,
    }
  },
  decrease() {
    return {
      type: DECREASE,
    }
  },
}
