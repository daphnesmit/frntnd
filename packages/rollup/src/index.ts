import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescriptPlugin from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import externals from 'rollup-plugin-node-externals';

function dirname(file: string) {
  const [root, folder] = file.split('/');
  return `${root}/${folder}`;
}

function createDefaultRollupConfig(pkg: any) {
  return {
    input: pkg.source,
    output: [
      {
        dir: dirname(pkg.main),
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
      {
        dir: dirname(pkg.module),
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
      },
    ],
    plugins: [
      externals(),
      url(),
      resolve(),
      json(),
      typescriptPlugin({
        exclude: ['**/*.test.{ts,tsx}', '**/*.stories.{ts,tsx}'],
      }),
      commonjs(),
    ],
  };
}

export default createDefaultRollupConfig;
