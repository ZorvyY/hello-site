import '../utils/FontAwesome';
import { Component } from 'react';
import colors from '../theme/Colors';
import IconLink from './IconLink';
import css from 'styled-jsx/css';

const socialLinkCss = css.resolve`
  li {         
    padding: 0.5em 2em;
  }

  a {
    color: ${colors.primaryDark};
    text-decoration: none;
    font-size: 2em;
  }

  a:hover {
    color: grey;
  }
`



const Social = () => (
  <div>
        <ul>
            <IconLink brand className={socialLinkCss.className} href='https://github.com/ZorvyY' icon='github'/>
            <IconLink brand className={socialLinkCss.className} href='https://linkedin.com/in/zoravur-singh' icon='linkedin'/>
        </ul>  
        {socialLinkCss.styles}

        <style jsx>{`
        ul {          
          list-style-type: none;
          display: flex;
          padding: 0px;
          margin: 0px;

          justify-content: center;
        }

        `}</style>
  </div>
)

export default Social;