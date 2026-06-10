import { defineConfig } from "vitest/config";
import ts from "typescript";

export default defineConfig({
  plugins: [
    {
      name: "vitest-tsx-react-transform",
      enforce: "pre",
      transform(code, id) {
        const filePath = id.split("?")[0];

        if (!filePath.endsWith(".tsx")) {
          return null;
        }

        const result = ts.transpileModule(code, {
          fileName: filePath,
          compilerOptions: {
            jsx: ts.JsxEmit.ReactJSX,
            module: ts.ModuleKind.ESNext,
            target: ts.ScriptTarget.ES2020,
            sourceMap: true,
          },
        });

        return {
          code: result.outputText,
          map: result.sourceMapText ? JSON.parse(result.sourceMapText) : null,
        };
      },
    },
  ],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
    },
  },
});
