export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const server_loads = [0];

export const dictionary = {
		"/[[preview=preview]]/blog/[uid]": [~4],
		"/[[preview=preview]]/project/[uid]": [~5],
		"/slice-simulator": [2],
		"/[[preview=preview]]": [~3],
		"/[[preview=preview]]/[uid]": [~6]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';