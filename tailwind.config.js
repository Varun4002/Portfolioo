module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4a90e2',
          secondary: '#64ffda',
          dark: '#0a192f',
          accent: '#9333ea'
        },
        animation: {
          float: 'float 3s ease-in-out infinite'
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }