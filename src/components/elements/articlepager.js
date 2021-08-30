import { Link } from 'gatsby'
import React from 'react'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const styleArticlePager = tw`
    mt-12
    flex
    flex-row
    justify-between
    gap-x-2
`

const styleLink = tw`
    w-1/3
`

const ArticlePager = ({ next, previous }) => (
    <div style={styleArticlePager}>
        {!!previous.name && <p style={styleLink}>
            <Link to={`/blog/${previous.name}`}>
                <FontAwesomeIcon icon={faAngleLeft} />&nbsp;{previous.title}
            </Link>
        </p>}
        {!!next.name && <p style={styleLink}>
            <Link to={`/blog/${next.name}`}>
                {next.title}&nbsp;<FontAwesomeIcon icon={faAngleRight} />
            </Link>
        </p>}
    </div>
)

export default ArticlePager