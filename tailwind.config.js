/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1B4332', // deep forest green
        'primary-50': '#F0F7F4', // very light green
        'primary-100': '#D1E7DD', // light green
        'primary-200': '#A3CFBB', // medium light green
        'primary-300': '#75B798', // medium green
        'primary-400': '#479F76', // medium dark green
        'primary-500': '#2D5A3D', // dark green
        'primary-600': '#1B4332', // deep forest green
        'primary-700': '#143529', // darker green
        'primary-800': '#0D2720', // very dark green
        'primary-900': '#061916', // darkest green
        'primary-foreground': '#FFFFFF', // white

        // Secondary Colors
        'secondary': '#D4AF37', // rich gold
        'secondary-50': '#FEFCF0', // very light gold
        'secondary-100': '#FDF5D7', // light gold
        'secondary-200': '#FAEBAF', // medium light gold
        'secondary-300': '#F7E187', // medium gold
        'secondary-400': '#F4D75F', // medium dark gold
        'secondary-500': '#E6C547', // dark gold
        'secondary-600': '#D4AF37', // rich gold
        'secondary-700': '#B8962F', // darker gold
        'secondary-800': '#9C7D27', // very dark gold
        'secondary-900': '#80641F', // darkest gold
        'secondary-foreground': '#FFFFFF', // white

        // Accent Colors
        'accent': '#52B788', // vibrant green
        'accent-50': '#F0FBF4', // very light accent
        'accent-100': '#D4F4DD', // light accent
        'accent-200': '#A9E9BB', // medium light accent
        'accent-300': '#7EDE99', // medium accent
        'accent-400': '#52B788', // vibrant green
        'accent-500': '#4A9F7A', // dark accent
        'accent-600': '#42876C', // darker accent
        'accent-700': '#3A6F5E', // very dark accent
        'accent-800': '#325750', // darkest accent
        'accent-900': '#2A3F42', // deepest accent
        'accent-foreground': '#FFFFFF', // white

        // Background Colors
        'background': '#FEFEFE', // warm white
        'surface': '#F8F9FA', // subtle gray
        'surface-50': '#FFFFFF', // pure white
        'surface-100': '#F8F9FA', // subtle gray
        'surface-200': '#E9ECEF', // light gray
        'surface-300': '#DEE2E6', // medium light gray
        'surface-400': '#CED4DA', // medium gray
        'surface-500': '#ADB5BD', // dark gray
        'surface-600': '#6C757D', // darker gray
        'surface-700': '#495057', // very dark gray
        'surface-800': '#343A40', // darkest gray
        'surface-900': '#212529', // near black

        // Text Colors
        'text-primary': '#212529', // near black
        'text-secondary': '#6C757D', // medium gray
        'text-muted': '#ADB5BD', // muted gray
        'text-inverse': '#FFFFFF', // white

        // Status Colors
        'success': '#28A745', // standard green
        'success-50': '#F0F9F3', // very light success
        'success-100': '#D4EDDA', // light success
        'success-200': '#C3E6CB', // medium light success
        'success-300': '#B1DFBB', // medium success
        'success-400': '#9FD8AB', // medium dark success
        'success-500': '#8DD19D', // dark success
        'success-600': '#28A745', // standard green
        'success-700': '#218838', // darker success
        'success-800': '#1E7E34', // very dark success
        'success-900': '#155724', // darkest success
        'success-foreground': '#FFFFFF', // white

        'warning': '#FFC107', // amber
        'warning-50': '#FFFBF0', // very light warning
        'warning-100': '#FFF3CD', // light warning
        'warning-200': '#FFE69C', // medium light warning
        'warning-300': '#FFD86B', // medium warning
        'warning-400': '#FFCA3A', // medium dark warning
        'warning-500': '#FFC107', // amber
        'warning-600': '#E0A800', // dark warning
        'warning-700': '#C69500', // darker warning
        'warning-800': '#A67C00', // very dark warning
        'warning-900': '#856404', // darkest warning
        'warning-foreground': '#212529', // near black

        'error': '#DC3545', // clear red
        'error-50': '#FDF2F2', // very light error
        'error-100': '#F8D7DA', // light error
        'error-200': '#F5C6CB', // medium light error
        'error-300': '#F1B0B7', // medium error
        'error-400': '#ED969E', // medium dark error
        'error-500': '#E97984', // dark error
        'error-600': '#DC3545', // clear red
        'error-700': '#C82333', // darker error
        'error-800': '#BD2130', // very dark error
        'error-900': '#721C24', // darkest error
        'error-foreground': '#FFFFFF', // white

        // Border Colors
        'border': '#E9ECEF', // light gray
        'border-accent': '#D4AF37', // rich gold
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
        'caption': ['Roboto', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
        'custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 200ms ease-out',
        'slide-down': 'slideDown 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-right': 'slideRight 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-left': 'slideLeft 300ms cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        '1000': '1000',
        '1100': '1100',
        '1200': '1200',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}