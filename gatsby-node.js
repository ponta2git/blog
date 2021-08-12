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
                    title: previous ? previous.frontmatter.title : undefined,
                    name: previous ? previous.parent.name : undefined,
                },
                next: {
                    title: next ? next.frontmatter.title : undefined,
                    name: next ? next.parent.name : undefined
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