Vue.prototype.$ELEMENT = { size: 'mini', zIndex: 3000 };
new Vue({
  el: '#app',
  data() {
    return {
      search: '',
      search2: '',
      list: [
        {
          name: '张三',
          age: '18',
          sex: '男',
        },
        {
          name: '小花',
          age: '8',
          sex: '女',
        },
        {
          name: '李四',
          age: '20',
          sex: '男',
        },
      ]
    }
  },
  computed: {
    tableData() {
      return this.list.filter(i => {
        return i.name.indexOf(this.search) > -1
      })
    },
    tableData2() {
      return this.list.filter(i => {
        return i.name.indexOf(this.search2) > -1
      })
    }
  },
  created() {
  },
  methods: {
  },
})