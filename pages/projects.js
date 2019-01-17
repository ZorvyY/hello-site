// pages/projects.js
import Header from '../components/Header'
import Layout from '../components/Layout.js'
import Footer from '../components/Footer'
import IconLink from '../components/IconLink';
import fonts from '../theme/Font';
import colors from '../theme/Colors';

import css from 'styled-jsx/css';

const projectLinkCss = css.resolve`
a {
  color: grey;
  font-size: 1.2em;
}

a:hover {
  color: black;
}

li {         
  padding-left: 1em;
}


`;


const projectLinkClassName = projectLinkCss.className;
const projectLinkStyles = projectLinkCss.styles;



/**
 * 
 * Card schema: 
 * {
 *  title: string,
 *  date: {
 *    start: string,
 *    end: string,
 *  }
 *  links: Array<[linkType: "github" | "demo", url: string]>,
 *  description: string,
 *  tags: string[]
 * }
 * 
 * @param {Object} props The project data passed to the card
 */
const Card = props => {
  const { title, date, links, description, tags } = props;
  return (
    <div className='outer'>
      <div className='project-header'>
        <span className='project-title'>{title}</span>
        <ul className='project-links' >
          {links.map(({linkType, url}, i) => (
            (linkType == 'github') 
            ? (<IconLink className={projectLinkClassName} href={url} icon='github' brand />)
            : (<IconLink className={projectLinkClassName} href={url} icon='link' />)
          ))}
        </ul>
        {projectLinkStyles}
        <br></br>
        <span className='project-date'>{`${date.start} -- ${date.end}`}</span>

      </div>





      <p>{description}</p>
      <ul className='tags'>
        {tags.map((tag, i) => <li key={i}><span className='sexy-tag'>{tag}</span></li>)}
      </ul>
      
      <style jsx>{`
        div.outer {
          box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
          padding: 1em;
        }

        div.project-header {
          display: block;
          overflow: auto;
          margin-bottom: 1em;
        }

        .project-title {
          font-family: ${fonts.title};
          font-size: 24px;  
          font-weight: bold;
        }

        .project-date {
          font-family: ${fonts.body};
          font-size: 0.9em;
        }

        ul {
          padding: 0px;
          margin: 0px;
        }

        ul.project-links {
          float: right;
          display: flex;
          list-style-type: none;
        }

        ul.tags {
          display: flex;
          padding: 0px;
          list-style-type: none;
          justify-content: flex-start;
        }

        .sexy-tag {
          font-size: 0.9em;
          display: block;
          padding: 0.4em;
          margin-right: 0.2em;
          border-radius: 10%;
          background-color: ${colors.primaryLight};
        }

      `}</style>
      {/* <style jsx global>{`

      `}</style> */}
    </div>
  )

}


export default () => (
  <>
    <Layout>
      <Header />

      <h1>Projects</h1>
      <Card 
        title='Title'
        date={{start: 'Sep 2018', end: 'Jan 2019'}}
        links={
          [
            {linkType: 'demo', url: '#'},
            {linkType: 'github', url: 'https://github.com/ZorvyY'},
          ]
        }
        description='This is a perfectly demoed project.'
        tags={'c++ '.repeat(3).split(' ').slice(0, -1)}

        />

    </Layout>
    <Footer />
  </>
)

