import { defineComponent, h, computed, inject } from "vue"

export default defineComponent({
  name: 'try-col',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup(props, ctx) {
    const gutter:number = inject('gutter')
    
    // 根据传值，动态计算出样式
    const classes = computed(() => {
      const res = [];
      const selections = [ "span", "offset" ] as const
      selections.forEach(item => {
        const size = props[item]
        if(typeof size === 'number' && size > 0) {
          // 将 "span" 略去
          res.push(`try-col${ item === "span" ? '' : '-' + item }-${ size }`)
        }
      })
      return [
        'try-col',
        ...res
      ]
    })

    // 计算gutter属性 
    const styles = computed(() => {
      const n = gutter / 2
      const res = {
        paddingLeft: '',
        paddingRight: ''
      }
      if(n !== 0) {
        res.paddingLeft = n + 'px'
        res.paddingRight = n + 'px'
      }

      return res
    })
    return () => h(props.tag, {class: classes.value, style: styles.value}, ctx.slots.default?.())
  }
})