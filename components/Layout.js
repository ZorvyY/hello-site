import { Component } from 'react'

import Fonts from '../utils/Fonts'
import fonts from '../theme/Font'

const globalStyle = <style jsx global>{`
    body {
        font-family: ${fonts.body};
    }

    h1 {
        font-family: ${fonts.title}, sans-serif;
    }
`}</style>

class Layout extends Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        Fonts()
    }

    render() {
        return (
            <main>
                {this.props.children}
                <style jsx>{`
                    main {
                        max-width: 800px;
                        margin: 0 auto;
                    }
                `}</style>
                {globalStyle}
            </main>
        )
    }
}


// const Layout = (props) => (
//     <>
//         <main>
//             <Header />
//             {props.children}
//             <style jsx>{`
//                 max-width: 800px;
//                 margin: 0 auto;
//             `}</style>
//             {globalStyle}
//         </main>
//         <Footer />
        
//     </>
    
// )

export default Layout