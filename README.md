# CSS Text Animation Showcase

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-text-animation-showcase-1/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable recreation of the uploaded 19-second screen recording.

## Effects visible in the video
1. **Typing Animation** — `Typing Animation` text reveals with a blinking white cursor.
2. **Gradient** — `GRADIENT` text uses a pink-to-cyan linear gradient clipped to the text.
3. **Float** — `FLOAT` text gently moves up and down.
4. **Wave** — `WAVE!` letters animate in a staggered sequence.

## CSS transcribed from the visible code panels

### 1. Typing
```css
.typing {
  overflow: hidden;
  border-right: 4px solid white;
  animation:
    typing 4s steps(20,end),
    blink .7s infinite;
}
```

### 2. Gradient
```css
.gradient {
  background: linear-gradient(
    90deg,
    #ff0080,
    #00ffff
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientMove 5s infinite;
}
```

### 3. Float
```css
.float {
  animation:
    floatText 3s ease-in-out infinite;
}
```

### 4. Wave
```css
.wave span {
  display: inline-block;
  animation:
    wave 1s infinite;
}
.wave span:nth-child(2) {
  animation-delay: .1s;
}
```

The snippets above preserve the declarations visible in the video. The matching `@keyframes` definitions, HTML wrappers and remaining stagger delays are supplied to make the animations actually run.

## Project files
- `index.html` — four animation previews and code panels
- `style.css` — all four animations and responsive layout
- `script.js` — copy CSS controls
- `README.md` — transcribed snippets and run guide

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Open `index.html` in a browser or use Live Server.
4. Watch all four animations.
5. Click **Copy CSS** to copy the visible snippet for an effect.

No npm packages or external libraries are required.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
