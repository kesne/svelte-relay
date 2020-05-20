import * as svelte from 'svelte/compiler';
import { GraphQLTagFinder } from 'relay-compiler/lib/language/RelayLanguagePluginInterface';

export function createFinder(finder: GraphQLTagFinder): GraphQLTagFinder {
	return (text, filePath) => {
		let jsSource: string;

		if (filePath.endsWith('.svelte')) {
			// NOTE: This is a hack, but it's the only current way can get the raw script tag content from Svelte:
			svelte.preprocess(text, {
				script({ content }) {
					jsSource = content;
					return { code: content };
				},
			});
		} else {
			// For normal TS files, the source is directly useable:
			jsSource = text;
		}

		return finder(jsSource!, filePath);
	};
}
