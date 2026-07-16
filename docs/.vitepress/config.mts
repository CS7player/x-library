import { defineConfig } from 'vitepress';

export default defineConfig({
 title: 'React Library',
 description: 'Observable React UI Components',

 base: '/x-library/',

 themeConfig: {
  nav: [
   { text: 'Guide', link: '/intro' },
   { text: 'Components', link: '/components/button' },
   {
    text: 'GitHub',
    link: 'https://github.com/CS7player/x-library',
   },
  ],

  sidebar: [
   {
    text: 'Guide',
    items: [
     { text: 'Introduction', link: '/intro' },
     { text: 'Installation', link: '/installation' },
     { text: 'Getting Started', link: '/getting-started' },
     { text: 'Theming', link: '/theming' },
     { text: 'Observables', link: '/observables' },
     { text: 'Migration', link: '/migration' },
    ],
   },

   {
    text: 'Components',
    items: [
     { text: 'Button', link: '/components/button' },
     { text: 'Alert', link: '/components/alert' },
     { text: 'Checkbox', link: '/components/checkbox' },
     { text: 'DatePicker', link: '/components/datepicker' },
     { text: 'Dialog', link: '/components/dialog' },
     { text: 'Dropdown', link: '/components/dropdown' },
     { text: 'Loader', link: '/components/loader' },
     { text: 'Radio Button', link: '/components/radiobutton' },
     { text: 'Switch', link: '/components/switch' },
     { text: 'TextArea', link: '/components/textarea' },
     { text: 'TextField', link: '/components/textfield' },
     { text: 'TimePicker', link: '/components/timepicker' },
     { text: 'Tooltip', link: '/components/tooltip' },
    ],
   },

   {
    text: 'Utilities',
    items: [
     { text: 'Icons', link: '/icons' },
     { text: 'LocalStorage', link: '/localstorage' },
    ],
   },
  ],
 },
});
