const switchInput = document.getElementById('input')
const styles = document.documentElement.style   // toma los estilos globales del sitio (el :root)

const lightTheme = {
    '--bg-color': '#eee',
    '--text-color': '#333',
    '--color-primary': 'royalblue',
    '--color-secondary': 'tomato'
}

const darkTheme = {
    '--bg-color': '#333',
    '--text-color': '#eee',
    '--color-primary': 'tomato',
    '--color-secondary': 'royalblue'
}

const cambiarTheme = theme => {
    const nombreStyle = Object.keys(theme)
    for (style of nombreStyle) {
        styles.setProperty(style, theme[style]) // agrega las propiedades al root
    }
}

switchInput.addEventListener('click', e => {
    e.target.checked 
    ? cambiarTheme(darkTheme)
    : cambiarTheme(lightTheme)
})