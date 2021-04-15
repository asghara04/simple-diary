<template>
	<h2 class="ion-text-center">{{title}}</h2>
	<ion-img :src="image" :alt="title" :name="title"></ion-img>
	<p class="ion-text-center">{{description}}</p>
</template>
<script>
	import { IonImg } from '@ionic/vue';

	export default{
		name: "MemoryOverView",
		props: ["image", 'title', "description"],
		components:{
			IonImg
		}
	};
</script>