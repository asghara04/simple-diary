<template>
	<form class="ion-padding" @submit.prevent="add_memory()">
		<ion-list>
			<ion-item>
				<ion-label position="floating">Title</ion-label>
				<ion-input type="text" required v-model="title"></ion-input>
			</ion-item>
			<ion-item>
				<ion-thumbnail slot="start">
					<ion-img :src="photo"></ion-img>
				</ion-thumbnail>
				<ion-button fill="clear" type="button" @click.prevent="take_photo()">
					<ion-icon slot="start" :icon="camera"></ion-icon>
					Take a picture ;)
				</ion-button>
			</ion-item>
			<ion-item>
				<ion-label position="floating">Description</ion-label>
				<ion-textarea rows="5" required v-model="description"></ion-textarea>
			</ion-item>
		</ion-list>
		<ion-button type="submit" expand="block"><ion-icon slot="start" :icon="save"></ion-icon>Save</ion-button>
	</form>
</template>
<script>
	import {IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonImg, IonIcon} from '@ionic/vue';
	import {ref} from 'vue';
	import {camera,save} from 'ionicons/icons';
	import {Plugins, CameraResultType, CameraSource} from '@capacitor/core';
	const {Camera} = Plugins;

	export default{
		name: "CrateMemoryForm",
		components:{
			IonList,
			IonItem,
			IonLabel,
			IonInput,
			IonTextarea,
			IonButton,
			IonThumbnail,
			IonImg,
			IonIcon
		},
		emits:{
			SaveMemory: ()=>{
				return true;
			}
		},
		setup(props,{emit}){
			const title = ref(null);
			const photo = ref(camera);
			const description = ref(null);
			function add_memory(){
				return emit("SaveMemory", {
					title: title.value,
					image: photo.value,
					description: description.value
				})
			}
			async function take_photo(){
				const img = await Camera.getPhoto({
					resultType: CameraResultType.Uri,
					source: CameraSource.Camera,
					quality: 100,
					// check docs for more configuration
				});
				photo.value = img.webPath;
			}
			return{title,photo,description,add_memory,camera,save,take_photo}
		}
	};
</script>