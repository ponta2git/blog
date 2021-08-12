exports.createPages = async function({ actions, graphql }) {
    const { data } = await graphql(`
        query {
            postsRemark: allMdx(sort: { fields: frontmatter___date, order: ASC }) {
                edges {
                    node {
                        id
                        parent {
                            ... on File {
                                name
                            }
                        }
                    }
                    next {
                        frontmatter {
                            title
                        }
                        parent {
                            ... on File {
                                name
                            }
                        }
                    }
                    previous {
                        frontmatter {
                            title
                        }
                        parent {
                            ... on File {
                                name
                            }
                        }
                    }
                }
            }
            tagsGroup: allMdx {
                group(field: frontmatter___tags) {
                    fieldValue
                }
            }
        }
    `)

    data.postsRemark.edges.forEach(({ node, next, previous }) => {
        actions.createPage({
            path: `/blog/${node.parent.name}`,
            component: require.resolve("./src/templates/blogpost.js"),
            context: {
                id: node.id,
                previous: {
                    title: previous?.frontmatter.title,
                    name: previous?.parent.name
                },
                next: {
                    title: next?.frontmatter.title,
                    name: next?.parent.name
                }
            }
        })
    })

    data.tagsGroup.group.forEach(tag => {
        actions.createPage({
            path: `/tags/${tag.fieldValue}`,
            component: require.resolve("./src/templates/tags.js"),
            context: {
                tag: tag.fieldValue
            }
        })
    })
}