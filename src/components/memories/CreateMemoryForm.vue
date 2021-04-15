<template>
	<form class="ion-padding" @submit.prevent="add_memory()">
		<ion-list>
			<ion-item>
				<ion-label position="floating">Title</ion-label>
				<ion-input type="text" required v-model="title"></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Image URL</ion-label>
				<ion-input type="url" required v-model="image_url"></ion-input>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Description</ion-label>
				<ion-textarea rows="5" required v-model="description"></ion-textarea>
			</ion-item>
		</ion-list>
		<ion-button type="submit" expand="block">Save</ion-button>
	</form>
</template>
<script>
	import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton} from '@ionic/vue';
	import {ref} from 'vue';

	export default{
		name: "CrateMemoryForm",
		components:{
			IonList,
			IonItem,
			IonLabel,
			IonInput,
			IonTextarea,
			IonButton
		},
		emits:{
			SaveMemory: ()=>{
				return true;
			}
		},
		setup(props,{emit}){
			const title = ref(null);
			const image_url = ref(null);
			const description = ref(null);
			function add_memory(){
				return emit("SaveMemory", {
					title: title.value,
					image: image_url.value,
					description: description.value
				})
			}
			return{title,image_url,description,add_memory}
		}
	};
</script>