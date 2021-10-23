<template>
	<ul class="list-group">
		<li
			class="list-group-item list-group-item-action p-4"
			style="cursor: pointer"
			v-for="(cable, index) in cables"
			:key="index"
			@click="this.$router.push(`/cables/${cable._id}`)"
		>
    {{ index + 1 }}.
			{{ cable.drum }}
		</li>
	</ul>
</template>

<script lang="ts">
import { Cable } from "@/interfaces/Cable";
import { getCables } from "@/services/CableService";
import { defineComponent } from "vue";

export default defineComponent({
	name: "cables-list",
	data() {
		return {
			cables: [] as Cable[],
		};
	},
	methods: {
		async loadCables() {
			try {
				const res = await getCables();
				this.cables = res.data;
			} catch (error) {
				console.error(error);
			}
		},
	},
	mounted() {
		this.loadCables();
	},
});
</script>
