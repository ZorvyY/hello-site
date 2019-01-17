import Link from 'next/link'

import Layout from '../components/Layout.js'
import Header from '../components/Header'
import Footer from '../components/Footer'

import 'normalize-css'

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}



export default () => (
  <>
    <Layout>
      <Header />
      <div className='outer'>
        <div className='inner'>
          <h1>Zoravur Singh</h1>
          <span className='tag-line'>Let's build something awesome.</span>
        </div>
        <style jsx>{`
          .outer {
            width: 100%;
            height: 100%;
          }

          main {
            height: 100%;
          }

          .inner {
            position: absolute;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);            
          }

          .tag-line {
            font-size: 1.2em;
          }
        `}
        </style>
      </div>
    </Layout>
    <Footer />
  </>
)
      // {/* <h1>My Blog</h1>
      // <ul>
      //   {getPosts().map((post) => (
      //     <li key={post.id}>
      //       <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      //         <a>{post.title}</a>
      //       </Link>
      //     </li>
      //   ))}
      // </ul> */}
      // {/* <style jsx>{`
      //   body {
      //       font-family: 'Open Sans';
      //   }

      //   h1 {
      //       font-family: 'Proza Libre', sans-serif;
      //   }
      // `}</style> */}