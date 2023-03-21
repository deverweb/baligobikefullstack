<template>
	<svg
		width="8"
		height="12"
		viewBox="0 0 8 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4 0.000488281C1.77143 0.000488281 0 1.86049 0 4.20049C0 7.80049 4 12.0005 4 12.0005C4 12.0005 8 7.74049 8 4.20049C8 1.86049 6.22857 0.000488281 4 0.000488281ZM4 5.70049C3.2 5.70049 2.57143 5.04049 2.57143 4.20049C2.57143 3.36049 3.2 2.70049 4 2.70049C4.8 2.70049 5.42857 3.36049 5.42857 4.20049C5.42857 5.04049 4.8 5.70049 4 5.70049Z"
			:fill="props.fill"
		/>
	</svg>
</template>

<script setup>
let props = defineProps({
	fill: {
		required: false,
		default: "#30B21B",
	},
});
</script>

<style lang="sass"></style>
