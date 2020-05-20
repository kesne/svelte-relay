import { PluginInterface } from 'relay-compiler/lib/language/RelayLanguagePluginInterface';
import typescriptPlugin from 'relay-compiler-language-typescript';
import { createFinder } from './FindGraphQLTags';

export default function plugin(): PluginInterface {
	const tsPlugin = typescriptPlugin();

	return {
		inputExtensions: ['svelte'],
		outputExtension: 'ts',
		findGraphQLTags: createFinder(tsPlugin.findGraphQLTags),
		formatModule: tsPlugin.formatModule,
		typeGenerator: tsPlugin.typeGenerator,
	};
}
