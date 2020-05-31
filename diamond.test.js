const { diamond, edge, mirrorLine, mirrorHalf } = require('./diamond')

describe('diamond', () => {
    it('should render A for A', () => {
        expect(diamond('A')).toEqual('A')
    })

    it('should render Diamond of C for C', () => {
        expect(diamond('C')).toEqual([
            '--A--',
            '-B-B-',
            'C---C',
            '-B-B-',
            '--A--'
        ].join('\n'))
    })
    describe('edge', () => {
        it('should render A for A', () => {
            expect(edge('A')).toEqual(['A'])
        })
        it('should render edge of B', () => {
            expect(edge('B')).toEqual([
                '-A',
                'B-'
            ])
        })
        it('should render edge of C', () => {
            expect(edge('C')).toEqual([
                '--A', //--> '--A--'
                '-B-',
                'C--'
            ])
        })
    })
    describe('mirrorLine', () => {
        it('should mirror line at end', () => {
            expect(mirrorLine('--A')).toEqual('--A--')
        })
        it('should mirror line at middle', () =>{
            expect(mirrorLine('-B-')).toEqual('-B-B-')
        })
        it('should mirror line at start', () =>{
            expect(mirrorLine('C--')).toEqual('C---C')
        })
    })
    describe('mirrorHalf', () => {
        it('should duplicate frist line', () => {
            const upperHalf = [
                '-A-',
                'B-B'
            ];
            expect(mirrorHalf(upperHalf)).toEqual([
                '-A-',
                'B-B',
                '-A-'
            ])          
        })

        it('should duplicate all lines but last', () => {
            const upperHalf = [
                '--A--',
                '-B-B-',
                'C---C'
            ];
            expect(mirrorHalf(upperHalf)).toEqual([
                '--A--',
                '-B-B-',
                'C---C',
                '-B-B-',
                '--A--'
            ])          
        })
    })
})