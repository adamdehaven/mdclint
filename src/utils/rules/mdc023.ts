import { addErrorContext } from "markdownlint/helpers";
import { filterByTypesCached, initialize, micromarkTokens } from "../cache";
import type { Rule } from "markdownlint";
import { filterByTypes, getParentOfType } from "../micromark-helpers";

/** @type {import("markdownlint").Rule} */
const MDC023: Rule = {
  "names": [ "MDC023", "mdc-heading-start-left" ],
  "description": "Headings must start at the beginning of the line",
  "tags": [ "headings", "spaces" ],
  "parser": "micromark",
  "function": function MDC023(params, onError) {
    const headings = filterByTypes(params.parsers.micromark.tokens, [ "atxHeading", "linePrefix", "setextHeading" ]);
    for (let i = 0; i < headings.length - 1; i++) {
      if (
        (headings[i].type === "linePrefix") &&
        (headings[i + 1].type !== "linePrefix") &&
        (headings[i].startLine === headings[i + 1].startLine)
      ) {
        const { endColumn, startColumn, startLine } = headings[i];
        const length = endColumn - startColumn;

        // If linePrefix is ending at the same column as the component container start column, skip
        if (endColumn === getParentOfType(headings[i], [ "componentContainer" ])?.startColumn) {
          continue
        }

        addErrorContext(
          onError,
          startLine,
          params.lines[startLine - 1],
          true,
          false,
          [ startColumn, length ],
          {
            "editColumn": startColumn,
            "deleteCount": length
          }
        );
      }
    }
  }
};

export default MDC023;