<template>
	<svg
		width="8"
		height="6"
		viewBox="0 0 8 6"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M1 1.5L4 4.5L7 1.5"
			:stroke="stroke"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>

<script>
export default {
	props: {
		stroke: {
			required: false,
			default: "#111111",
		},
		strokeWidth: {
			required: false,
			default: "1.3",
		},
	},
};
</script>

<style lang="sass"></style>
