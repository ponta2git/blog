import { EdgeFrontmatter } from "../node-types";
import { Neighbor } from "../types";

export class NeighborFactory {
  static create(edge: EdgeFrontmatter): Neighbor | undefined {
    if (!edge.title || !edge.name) return undefined;
    return {
      title: edge.title,
      fileName: edge.name,
    };
  }
}
