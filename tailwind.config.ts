import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    extend: {
      fontFamily: {
        'sans': ['Neo Sans Std', 'system-ui']
      },
      screens: {
        sm: '100%', // Full width on small screens
        md: '750px', // Custom width on medium screens
        lg: '970px', // Custom width on large screens
        xl: '1070px', // Custom width on extra-large screens
        '2xl': '1200px', // Custom width on extra-large screens
      },
    },
    container: { 
      center: true,
      padding: '1rem',
      screens: {
        sm: '100%', // Full width on small screens
        md: '750px', // Custom width on medium screens
        lg: '970px', // Custom width on large screens
        xl: '1070px', // Custom width on extra-large screens
        '2xl': '1200px', // Custom width on 2x-large screens
      },
     }
  },
};
