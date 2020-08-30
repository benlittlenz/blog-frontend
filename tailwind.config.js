module.exports = {
  theme: {
    extend: {
      animation: {
        btnToggle: 'spin 0.5s',
        entering: 'transition ease-out duration-100',
        leaving: 'transition ease-in duration-75'
      },
      keyframes: {
        btnToggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        },
        entering: {
          'from': { transform: 'opacity-0 scale-95' },
          'to': { transform: 'opacity-100 scale-100' },
        }
      },
    },
  },
}