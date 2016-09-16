let TagsColors = [];
const color = [
    '#1abc9c',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#3498db',
    '#c0392b',
    '#1abc9c',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#3498db',
    '#c0392b']
for (let i = 0; i < 50; i++) {
    TagsColors.push(color[i%color.length])
}

export default TagsColors;