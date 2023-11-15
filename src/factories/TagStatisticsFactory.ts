import { TagStatistics } from "../types";

function hasStringValue(obj: unknown): obj is string {
  return typeof obj === "string";
}

function hasNumberValue(obj: unknown): obj is number {
  return typeof obj === "number";
}

export class TagStatisticsFactory {
  static create<T extends Record<string, unknown>>(node: T): TagStatistics {
    const error = new Error("GraphQL is not compatible with TagStatistics.");

    const fieldValue = hasStringValue(node.fieldValue) ? node.fieldValue : null;
    if (!fieldValue) throw error;

    const totalCount = hasNumberValue(node.totalCount) ? node.totalCount : null;
    if (totalCount === null) throw error;

    return {
      fieldValue,
      totalCount,
    };
  }
}
