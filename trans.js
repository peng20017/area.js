var pro = {
  // 里面分布插队对应vant-area的省市县数据
},
  city = {
    // 里面分布插队对应vant-area的省市县数据
  },
  county = {
    // 里面分布插队对应vant-area的省市县数据
  }
var options = []
for (let i in pro) { 
  options[options.length] = {
    value: i,
    label: pro[i]
  }
}
options.forEach((o) => {
  o.children = []
  for (let i in city) {
    if (o.label === '海外') {
      if (i.substring(0, 1) === o.value.substring(0, 1)) {
        o.children.push({
          value: i,
          label: city[i]
        })
      }
    } else {
      if (i.substring(0, 3) === o.value.substring(0, 3)) {
        o.children.push({
          value: i,
          label: city[i]
        })
      }
    }
  }
})

options.forEach((o) => {
  o.children.forEach((p) => {
    p.children = []
    for (let i in county) {
      if (i.substring(0, 4) === p.value.substring(0, 4)) {
        p.children.push({
          value: i,
          label: county[i]
        })
      }
    }
  })
})
JSON.stringify(options) //输出即可