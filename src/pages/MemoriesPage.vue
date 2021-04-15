<template>
	<base-layout PageTitle="Diaries">
		<template v-slot:actions-end>
			<ion-button router-link="/memories/add">
				<ion-icon slot="icon-only" :icon="add"></ion-icon>
			</ion-button>
		</template>
		<memory-list :key="memories" :memories="memories"></memory-list>
	</base-layout>
</template>
<script>
	import {IonButton, IonIcon} from '@ionic/vue';
	import {add} from 'ionicons/icons';
	import {computed} from 'vue';
	import {useStore} from 'vuex';
	import MemoryList from '@/components/memories/MemoriesList.vue';
	export default{
		name: "MemoriesPage",
		components:{
			MemoryList,
			IonButton,
			IonIcon
		},
		setup(){
			const store = useStore();
			const memories = computed(()=>store.getters.memories)
			return {memories, add}
		}
	};
</script>