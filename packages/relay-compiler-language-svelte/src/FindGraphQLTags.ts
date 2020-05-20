import * as svelte from 'svelte/compiler';
import { GraphQLTagFinder } from 'relay-compiler/lib/language/RelayLanguagePluginInterface';

// TODO: This should also support .ts files, just for the sake of it:
export function createFinder(finder: GraphQLTagFinder): GraphQLTagFinder {

	return (text, filePath) => {
		// NOTE: This is a hack, but it's the only way I can get the raw script tag content from Svelte:
		let jsSource: string;
		svelte.preprocess(text, {
			script({ content, attributes, filename }) {
				jsSource = content;
				return { code: content };
			},
		});

		return finder(jsSource!, filePath);
	};
}
