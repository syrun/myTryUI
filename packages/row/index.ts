import { defineComponent, h, provide, computed } from "vue"

export default defineComponent({
  name: 'try-row',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type:  Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup(props, ctx) {
    provide('gutter', props.gutter)
    // 计算类名
    const classes = computed(() => [
      'try-row',
      // justify
      props.justify === 'start' ? '' : `is-justify-${ props.justify }`
    ])

    // 计算样式
    const styles = computed(() => {
      const n = props?.gutter / 2
      const res = {
        marginLeft: '',
        marginRight: '',
      }
      if(n !== 0) {
        res.marginLeft = `-${n}px`
        res.marginRight = `-${n}px`
      }

      return res
    })
    return () => h(props.tag, {class: classes.value, style: styles.value}, ctx.slots.default?.())
  }
})