// Node Creation
type EdgeFrontmatter = {
  title: string | undefined;
  name: string | undefined;
};

type NeighbourPostEdge = {
  parent: {
    name: string;
  };
  frontmatter: EdgeFrontmatter;
} | null;

export type PostEdge = {
  node: {
    id: string;
    parent: {
      name: string;
    };
    internal: {
      contentFilePath: string;
    };
  };
  previous: NeighbourPostEdge;
  next: NeighbourPostEdge;
};

export type TagEdge = {
  fieldValue: string;
};

// Node Context
export type PageNodeContext = {
  id: string;
  previous: EdgeFrontmatter;
  next: EdgeFrontmatter;
};

export type TagNodeContext = {
  tag: ArticleTag;
};

// Page Parts
export type SiteHeader = {
  siteName: string;
};

export type ArticleTag = string;
export type ArticleTags = ArticleTag[];
export type ArticleTagsType = {
  tags: ArticleTags;
};

type Tag = {
  fieldValue: string;
  totalCount: number;
};
type Tags = Tag[];
export type PostTagsType = {
  edges: Tags;
};

type Title = string;
export type PostTitleType = {
  title: Title;
  date: string;
  tags: Tags;
};

export type ArticlePagerType = {
  previous: EdgeFrontmatter;
  next: EdgeFrontmatter;
};
