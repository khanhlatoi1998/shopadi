module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color_01: '#0E5B9D',
        color_04: '#666',
        color_05: '#f8f8f8',
        color_06: '#333',
        color_07: '#eee',
        color_08: '#252525',
        color_09: '#acacac',
        color_10: '#212121',
        color_11: '#ffffff21',
        color_12: '#acacac'
      },

      boxShadow: {
        'subMenu': '0 0 5px 1px rgb(0 0 0 / 8%);'
      },

      fontSize: {
        'title': '30px',
        'price': '17px'
      }
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups"),
  ],
}