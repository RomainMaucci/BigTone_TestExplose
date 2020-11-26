module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontSize: {
              'xs': '.75rem',
              'sm': '.875rem',
              'tiny': '.875rem',
              'base': '1rem',
              'lg': '1.125rem',
              'xl': '1.25rem',
              '2xl': '1.5rem',
              '3xl': '1.875rem',
              '4xl': '2.25rem',
              '5xl': '3rem',
              '6xl': '4rem',
              '7xl': '5rem',
              '8xl': '6rem',
              '9xl': '6.5rem',
              '10xl': '7rem',
              'big': '10rem',
    },
    extend: {
      fontFamily: {
              'custom': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      margin: {
              '320': '22.5rem',
              '288': '20rem',
              '22': '5.5rem',
      },
      width: {
              '600': '38rem',
              '9': '2.25rem',
      },
      colors: {
              DarkGray: '#191919',
              grayFont: '#FFFFFF80',
              grayBg: '#FFFFFF1A',
              pink: '#FFCDC1',
              green: '#E0FCB5',
              blue: '#CBE9FF',
      },
      height: {
              '0': '0.6px',
      },
      zIndex: {
              '100': '100',
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
      },
    },
  },
  variants: {
        zIndex: ({ before }) => before(['hover']),
        visibility: ({ before }) => before(['hover']),
        animation: ["motion-safe"],
  },
  plugins: [],
}
