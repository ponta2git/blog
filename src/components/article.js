import React from 'react'
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import CodeBlock from './codeblock';

export const Article = ({ name, date, tags, title, body, next, previous, isExcerpt }) => {
    const mdxComponents = {
        code: CodeBlock
    };

    return (
        <article className="article">
            <h2 className="text-2xl text-gray-800 mb-2 tracking-wide font-bold">
                <Link to={`/blog/${name}`}>{title}</Link>
            </h2>
            
            <div className="flex flex-row items-start mb-1">
                <p className="pr-4" style={{marginTop: "-0.25rem"}}>
                    <span className="text-sm text-gray-500">{date}</span>
                </p>
                {!!tags && <React.Fragment>
                        <FontAwesomeIcon icon={faTags} />&nbsp;
                        <ul className="inline text-sm text-gray-500">
                            {tags.map(t => <li key={`tag_${t}`} className="inline mr-2 p-1 rounded bg-gray-200 text-xs"><Link to={`/tags/${t}`}>{t}</Link></li>)}
                        </ul>
                        </React.Fragment>
                }
            </div>
            
            {isExcerpt
                ? <p className="leading-relaxed">{body}</p>
                : <div className="leading-relaxed flex flex-col gap-y-6 mt-6 content">
                    <MDXProvider components={mdxComponents}>
                        <MDXRenderer>{body}</MDXRenderer>
                    </MDXProvider>
                </div>
            }
            
            {isExcerpt
                 ? <p className="mt-2 text-gray-500"><Link to={`/blog/${name}`}>全文を読む</Link></p>
                 : <div className="flex flex-row justify-between mt-8 text-gray-500">
                    <p className="w-2/5">
                        {!!previous?.name &&
                            <Link to={`/blog/${previous.name}`}><FontAwesomeIcon icon={faAngleLeft} />&nbsp;{previous.title}</Link>
                        }
                    </p>
                    <p className="w-2/5 text-right">
                        {!!next?.name && 
                            <Link to={`/blog/${next.name}`}>{next.title}&nbsp;<FontAwesomeIcon icon={faAngleRight} /></Link>
                        }
                    </p>
                </div>
            }
        </article>
    )
}