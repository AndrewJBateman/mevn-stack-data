<template>
	<div class="col-md-4 offset-md-4">
		<form @submit.prevent="saveCable()">
			<h1 class="text-center h3 mb-3">Add Cable</h1>
			<input
				type="text"
				placeholder="Enter drum no."
				v-model="cable.drum"
				class="form-control mb-3"
				autofocus
			/>
			<input
				type="text"
				placeholder="Enter cable ref."
				v-model="cable.ref"
				class="form-control mb-3"
				autofocus
			/>
			<textarea
				rows="4"
				placeholder="Add notes"
				v-model="cable.notes"
				class="form-control mb-3"
			></textarea>
			<button class="btn btn-primary" :disabled="!cable.drum || !cable.ref">
				Save
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cable } from "@/interfaces/Cable";
import { createCable } from "@/services/CableService";

export default defineComponent({
	data() {
		return {
			cable: {} as Cable,
		};
	},
	methods: {
		async saveCable() {
			try {
				const res = await createCable(this.cable);
				console.log(res);
				this.$router.push({ name: "cables" });
			} catch (error) {
				console.error(error);
			}
		},
	},
});
</script>
