// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			// Avenue X (Boulevard LAB): only Regular exists, headings are faux-bold as on ilboga-front.
			provider: fontProviders.local(),
			name: 'Avenue X',
			cssVariable: '--font-avenue',
			fallbacks: ['monospace'],
			options: {
				variants: [{ src: ['./src/fonts/Avenue.otf'], weight: '400', style: 'normal' }],
			},
		},
	],
});
