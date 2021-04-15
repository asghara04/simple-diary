<template>
	<ion-item :router-link="'/memories/'+memory.id">
		<ion-thumbnail slot='start'>
			<ion-img :src="memory.image" :alt='memory.title'></ion-img>
		</ion-thumbnail>
		<ion-label>
			<h2>{{memory.title}}</h2>
			<p>{{memory.description.substr(1,40)}}...</p>
		</ion-label>
	</ion-item>
</template>
<script>
	import {IonItem, IonThumbnail, IonImg, IonLabel} from '@ionic/vue';
	export default{
		name: "MemoryListItem",
		props:["memory"],
		components:{
			IonItem,
			IonThumbnail,
			IonImg,
			IonLabel
		}
	};
</script>