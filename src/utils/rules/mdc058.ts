// @ts-check

import { addErrorContext, isBlankLine } from "markdownlint/helpers";
import { getBlockQuotePrefixText, getParentOfType } from "../micromark-helpers";
import { filterByTypes } from "../micromark-helpers";
import type { Rule } from "markdownlint";
import { isComponentEndFence, isFirstLineOfComponent } from "../mdc-helpers";

/** @typedef {import("micromark-extension-gfm-table")} */

/** @type {import("markdownlint").Rule} */
const MDC058: Rule = {
  "names": [ "MDC058", "mdc-blanks-around-tables" ],
  "description": "Tables should be surrounded by blank lines",
  "tags": [ "table" ],
  "parser": "micromark",
  "function": function MD058(params, onError) {
    const { lines } = params;
    const blockQuotePrefixes = filterByTypes(params.parsers.micromark.tokens, [ "blockQuotePrefix", "linePrefix" ]);

    // For every table...
    const tables = filterByTypes(params.parsers.micromark.tokens, [ "table" ]);
    for (const table of tables) {
      // Look for a blank line above the table
      const firstLineNumber = table.startLine;
      if (!isBlankLine(lines[firstLineNumber - 2]) && !isFirstLineOfComponent(firstLineNumber - 1, lines)) {
        addErrorContext(
          onError,
          firstLineNumber,
          lines[firstLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "insertText": getBlockQuotePrefixText(blockQuotePrefixes, firstLineNumber)
          }
        );
      }

      // Look for a blank line below the table
      const lastLineNumber = table.endLine;
      if (!isBlankLine(lines[lastLineNumber]) && !isComponentEndFence(lines[lastLineNumber])) {
        addErrorContext(
          onError,
          lastLineNumber,
          lines[lastLineNumber - 1].trim(),
          undefined,
          undefined,
          undefined,
          {
            "lineNumber": lastLineNumber + 1,
            "insertText": getBlockQuotePrefixText(blockQuotePrefixes, lastLineNumber)
          }
        );
      }
    }
  }
};

export default MDC058;