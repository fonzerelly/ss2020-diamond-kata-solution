const diamond = (end) => {
    return mirrorHalf(
        edge(end).map(mirrorLine)
    ).join('\n')
}

const abc = [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
]

const edge = (end) => {
    const indexEnd = abc.indexOf(end);
    const result = abc.slice(0, indexEnd + 1)
        .map((char, index) => {
            return '-'.repeat(indexEnd-index) + char
        })
        .map((line, index) => {
            return line + '-'.repeat(index);
        })
    return result
}

const mirrorLine = (line /*--A*/) => {
    return line + reverseLine(line).slice(1) /*--A A--*/
}
const reverseLine = (line) => {
    return line.split('').reverse().join('')
}

const mirrorHalf = (lines) => {
    return lines.concat(
        [].concat(lines)
            .reverse()
            .slice(1)
    )
}

module.exports = {
    diamond,
    edge,
    mirrorLine,
    mirrorHalf
}