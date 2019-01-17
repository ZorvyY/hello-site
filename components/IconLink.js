import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import classNames from 'classnames'

export default (props) => (
  <li className={classNames({[props.className]: props.className}, 'icon-link')}>
    <Link href={props.href}>
      <a className={classNames({[props.className]: props.className}, 'icon-link')}>
        <FontAwesomeIcon icon={
          [('brand' in props) ? 'fab' : 'fas', props.icon]
        } />
      </a>
    </Link>

    <style jsx>{`
    `}</style>
  </li>
)