import Mock from 'mockjs'
Mock.setup({
  timeout: 400
})
Mock.mock(/\.json/, {
  'list|1-10': [{
    'id|+1': 1,
    'email': '@EMAIL'
  }]
})
