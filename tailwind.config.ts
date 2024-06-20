import daisyui from "daisyui";

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ["./**/*.tsx"],
  theme: { 
    extend: {
      fontFamily: {
        'sans': ['Neo Sans Std', 'system-ui']
      }
    },
    container: { center: true }
  },
};
