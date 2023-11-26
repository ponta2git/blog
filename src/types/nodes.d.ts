// Node Creation
type EdgeFrontmatter = {
  title: string | undefined;
  name: string | undefined;
};

// Node Context
export type PageNodeContext = {
  id: string;
  previous: EdgeFrontmatter;
  next: EdgeFrontmatter;
};

export type TagNodeContext = {
  tag: string;
};

// Node Edge
type NeighbourPostEdge = {
  frontmatter: {
    title: string;
  };
  parent: {
    name: string;
  };
};

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
  previous: NeighborEdge;
  next: NeighborEdge;
};

export type TagEdge = {
  fieldValue: string;
};
