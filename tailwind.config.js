/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "index.html"
  ],
  theme: {
    extend: {
      backgroundColor: {
        "main-theme-1" : "hsl(222, 26%, 31%)",
        "keypad-theme-1": "hsl(223, 31%, 20%)",
        "screen-theme-1" : "hsl(224, 36%, 15%)",
        "key-background-blue-theme-1": "hsl(225, 21%, 49%)",
        "key-background-red-theme-1": "hsl(6, 63%, 50%)",
        "key-background-orange-theme-1": "hsl(30, 25%, 89%)"
      },
      textColor: {
        "clr-theme-1" : "hsl(221, 14%, 31%)"
      },
      boxShadowColor: {
        "key-shadow-red-theme-1": "hsl(6, 70%, 34%)",
        "key-shadow-keys-theme-1": "hsl(28, 16%, 65%)",
        "key-shadow-blue-theme-1": "hsl(224, 28%, 35%)"
      }
    },
  },
  plugins: [],
}

