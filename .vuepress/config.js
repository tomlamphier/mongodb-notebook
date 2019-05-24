module.exports = {
  base: "/mongodb-notebook/",
  title: 'Mongodb Notebook',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Tasks', 
        items: [
          {text: "Atlas DB", link: '/tasks/atlas' }
        ]
      }
    ],
    sidebar: {
      '/tasks/': [
        'atlas'
      ],
      '/': [
        '',
        'refs',
        'status'
      ]
    }
  }
}
