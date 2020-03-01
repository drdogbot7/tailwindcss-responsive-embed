const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addUtilities }) {
  addUtilities({
    '.embed-responsive': {
      position: 'relative',
      display: 'block',
      height: '0',
      padding: '0',
      overflow: 'hidden',
      '.embed-responsive-item,&>iframe,&>embed,&>object,&>video': {
        position: 'absolute',
        top: '0',
        left: '0',
        bottom: '0',
        height: '100%',
        width: '100%',
        border: '0'
      }
    }
  });
});
