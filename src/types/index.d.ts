export type Tag = string;

type Frontmatter = {
  readonly date: string;
  readonly tags: Tag[];
  readonly title: string;
};

export type SiteMetadata = {
  readonly title: string;
};

export type ArticleMetadata = {
  readonly frontmatter: Frontmatter;
  readonly excerpt?: string;
  readonly fileName: string;
};

export type TagStatistics = {
  readonly fieldValue: string;
  readonly totalCount: number;
};

export type Neighbor = {
  readonly title: string;
  readonly fileName: string;
};
