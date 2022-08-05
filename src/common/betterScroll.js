import BetterScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BetterScroll.use(Pullup)
export function bScroll(obj,fetchData){
  const bs = new BetterScroll(obj, {
    pullUpLoad: true,//上拉加载更多
    probeType:3,//0和1不侦测     2手指滚动时侦测，惯性滚动不侦测         3手指滚动和惯性都侦测
    click:true,//true不阻止内部点击事件     false阻止内部点击事件
    disableTouch: false
  })
  bs.on('scroll', () => {})
  bs.on('pullingUp', () => {
    fetchData()
    bs.finishPullUp()
  })
}
