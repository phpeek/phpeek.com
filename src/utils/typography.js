import Typography from 'typography'

const typography = new Typography({
    googleFonts: [
        {
            name: 'Raleway',
            styles: [
                '200',
                '300',
                '400',
            ],
        },
    ],
    baseFontSize: '13px',
    headerFontFamily: ['Raleway', 'sans-serif'],
    bodyFontFamily: ['Raleway', 'sans-serif'],
    baseLineHeight: 1,
    headerLineHeight: 0.5,
})

export default typography