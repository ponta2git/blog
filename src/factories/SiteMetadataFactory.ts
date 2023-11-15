import { SiteMetadata } from "../types";

function hasValue(obj: unknown): obj is string {
  return typeof obj === "string";
}

function hasProps(obj: unknown): obj is Record<string, unknown> {
  if (!(typeof obj === "object")) return false;
  if (obj === null) return false;
  return true;
}

export class SiteMetadataFactory {
  static create<T extends Record<string, unknown>>(data: T): SiteMetadata {
    const error = new Error("GraphQL is not compatible with SiteMetadata.");

    const site = hasProps(data.site) ? data.site : null;
    if (!site) throw error;

    const siteMetadata = hasProps(site.siteMetadata) ? site.siteMetadata : null;
    if (!siteMetadata) throw error;

    const title = hasValue(siteMetadata.title) ? siteMetadata.title : null;
    if (!title) throw error;

    return {
      title,
    };
  }
}
