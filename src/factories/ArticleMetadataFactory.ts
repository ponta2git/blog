import { ArticleMetadata } from "../types";

function hasValue(obj: unknown): obj is string {
  return typeof obj === "string";
}

function hasValues(obj: unknown | unknown[]): obj is string[] {
  if (!(typeof obj === "object")) return false;
  if (obj === null) return false;
  if (!Array.isArray(obj)) return false;
  if (obj.length === 0) return false;
  return typeof obj[0] === "string";
}

function hasProps(obj: unknown): obj is Record<string, unknown> {
  if (!(typeof obj === "object")) return false;
  if (obj === null) return false;
  return true;
}

export class ArticleMetadataFactory {
  static create<T extends Record<string, unknown>>(node: T): ArticleMetadata {
    const error = new Error("GraphQL is not compatible with ArticleMetadata.");

    const validNode = hasProps(node) ? node : null;
    if (!validNode) throw error;

    const excerpt = hasValue(validNode.excerpt) ? validNode.excerpt : undefined;

    const frontmatter = hasProps(validNode.frontmatter)
      ? validNode.frontmatter
      : null;
    if (!frontmatter) throw error;

    const date = hasValue(frontmatter.date) ? frontmatter.date : null;
    if (!date) throw error;

    const tags = hasValues(frontmatter.tags) ? frontmatter.tags : null;
    if (!tags) throw error;

    const title = hasValue(frontmatter.title) ? frontmatter.title : null;
    if (!title) throw error;

    const fileName = hasProps(validNode.parent)
      ? hasValue(validNode.parent.name)
        ? validNode.parent.name
        : null
      : null;
    if (!fileName) throw error;

    return {
      excerpt,
      frontmatter: {
        date,
        tags,
        title,
      },
      fileName,
    };
  }
}
