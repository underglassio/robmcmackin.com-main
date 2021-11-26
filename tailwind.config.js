const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const { theme } = require('tailwindcss');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)'
      },
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        cream: '#FBFAFC',
        'cream-dark': '#F5F0E6',
        purple: '#6c52f2',
        'purple-light': '#8a73ff',
        pink: '#FF8BB0',
        black: '#252D36',
        primary: '#6c52f2', // purple
        'primary-light': '#8a73ff',
        'primary-lighter': '#ebe5f7',
        'primary-dark': '#4b33c9',
        secondary: '#FF8BB0', // pink
        gray: {
          0: '#fff',
          100: '#fafafa',
          600: '#708094',
          700: '#45566c',
          900: '#313f52'
        }
      },
      fontFamily: {
        sans: ['GT Walsheim', ...fontFamily.sans],
        serif: ['SourceSerif', ...fontFamily.serif],
        mono: ['ABCMonumentSemiMono', ...fontFamily.mono]
      },
      height: {
        full: '100%'
      },
      fontSize: {
        sm: '.8rem',
        base: '18px',
        md: '1.25rem',
        lg: '1.56rem',
        xl: '1.93rem',
        '2xl': '2.4rem',
        '3xl': '3rem',
        '4xl': '3.8rem',
        '5xl': '4.76rem',
        '6xl': '5.96rem'
      },
      lineHeight: {
        standard: '145%',
        loose: '150%'
      },
      keyframes: {
        bump: {
          '0%, 100%': {
            transform: 'translate(0,0)'
          },
          '50%': {
            transform: 'translate(25%, -25%)'
          }
        },
        floating: {
          '0%': { transform: 'translate(0,  -10px)' },
          '50%': { transform: 'translate(0, 0px)' },
          '100%': { transform: 'translate(0, -10px)' }
        }
      },
      animation: {
        bump: 'bump .5s ease-out',
        floating: 'floating 4s infinite ease-in-out'
      },
      maxWidth: {
        '3xl': '46rem'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.700')
              },
              code: { color: theme('colors.blue.400') }
            },
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            },
            thead: {
              borderBottomColor: theme('colors.gray.200')
            },
            code: { color: theme('colors.pink.500') },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: {
              color: theme('colors.blue.400'),
              '&:hover': {
                color: theme('colors.blue.600')
              },
              code: { color: theme('colors.blue.400') }
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.700'),
              color: theme('colors.gray.300')
            },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
            hr: { borderColor: theme('colors.gray.700') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') }
              }
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') }
              }
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.600')
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700')
              }
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [require('@tailwindcss/typography')]
};
