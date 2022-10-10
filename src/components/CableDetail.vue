<template>
	<div class="col-md-4 offset-md-4">
		<form @submit.prevent="handleUpdate()" class="card card-body">
			<h1 class="text-center h3 mb-3">Cable Detail</h1>
			<input
				type="text"
				v-model="currentCable.drum"
				class="form-control mb-3"
			/>
			<input type="text" v-model="currentCable.ref" class="form-control mb-3" />
			<textarea
				rows="4"
				v-model="currentCable.notes"
				class="form-control mb-3"
			></textarea>
			<button class="btn btn-info">Update</button>
		</form>
		<div class="text-center">
			<button @click="handleDelete()" class="btn btn-danger pt-4">Delete</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { deleteCable, getCable, updateCable } from "@/services/CableService";
import { Cable } from "@/interfaces/Cable";

export default defineComponent({
	data() {
		return {
			currentCable: {} as Cable,
		};
	},
	methods: {
		async loadCable(id: string) {
			const res = await getCable(id);
			this.currentCable = res.data;
		},
		async handleUpdate() {
			const cableId = this.$route.params.id;
			if (typeof cableId === "string") {
				const res = await updateCable(cableId, this.currentCable);
				console.log("res: ", res);
				this.$router.push("/");
			}
		},
		async handleDelete() {
			try {
				const cableId = this.$route.params.id;
				if (typeof cableId === "string") {
					deleteCable(cableId);
					this.$router.push("/");
				}
			} catch (error) {
				console.error(error);
			}
		},
	},
	mounted() {
		const cableId = this.$route.params.id;
		if (typeof cableId === "string") {
			this.loadCable(cableId);
		}
	},
});
</script>
