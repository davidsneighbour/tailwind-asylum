import { createReleaseConfig } from "@dnbhq/release-config";
import type { Config } from "release-it";

const config: Config = createReleaseConfig({
  githubTokenRef: "GITHUB_TOKEN_CONTENT_PRIVATE",
  scopes: {
    minorTypes: ["feat", "prompt", "instructions", "skill"],
    patchTypes: [
      "fix",
      "perf",
      "refactor",
      "docs",
      "style",
      "test",
      "build",
      "ci",
      "chore",
      "content",
      "design",
      "revert",
    ],
    minorExclusionSubscopes: {
      feat: ["fix"],
      instructions: ["fix"],
      prompt: ["fix"],
      skill: ["fix"],
    },
  },
});

type ConventionalCommit = {
  notes?: unknown[];
  scope?: string;
  type?: string;
};

type BumpLevel = 0 | 1 | 2;

type ConventionalChangelogPlugin = {
  whatBump?: (commits: ConventionalCommit[]) =>
    | false
    | {
        level: BumpLevel;
        reason: string;
      };
};

const conventionalChangelog = config.plugins?.[
  "@release-it/conventional-changelog"
] as ConventionalChangelogPlugin | undefined;

if (conventionalChangelog) {
  conventionalChangelog.whatBump = (commits) => {
    let level: BumpLevel | null = null;

    for (const commit of commits) {
      const notes = Array.isArray(commit.notes) ? commit.notes : [];
      const type = typeof commit.type === "string" ? commit.type : "";
      const scope = typeof commit.scope === "string" ? commit.scope : "";

      if (notes.length > 0) {
        return {
          level: 0,
          reason: "There are BREAKING CHANGES.",
        };
      }

      if (
        ["feat", "prompt", "instructions", "skill"].includes(type) ||
        (type === "content" && scope === "new")
      ) {
        level = 1;
        continue;
      }

      if (
        level === null &&
        [
          "fix",
          "perf",
          "refactor",
          "docs",
          "style",
          "test",
          "build",
          "ci",
          "chore",
          "content",
          "design",
          "revert",
        ].includes(type)
      ) {
        level = 2;
      }
    }

    if (level === null) {
      return false;
    }

    return {
      level,
      reason:
        level === 1
          ? "There are minor-level commits."
          : "There are patch-level changes.",
    };
  };
}

export default config;
