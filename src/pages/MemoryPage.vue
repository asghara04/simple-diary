<template>
	<base-layout :PageTitle="memory ? memory.title : 'Loading...'" ParentPage="/memories">
		<h2 v-if="!memory">Could not find a memory for given id</h2>
		<memory-over-view v-else :key="memory.id" :title="memory.title" :image="memory.image" :description="memory.description"></memory-over-view>
	</base-layout>
</template>
<script>
	import {useRoute} from 'vue-router';
	import {watch,computed,ref} from 'vue';
	import MemoryOverView from '@/components/memories/MemoryOverView.vue';
	import {useStore} from 'vuex';
	export default{
		name: "MemoryPage",
		components:{
			MemoryOverView
		},
		setup(){
			const route = useRoute();
			const id = ref(route.params.id);
			const store = useStore();
			const memory = computed(()=>store.getters.memory(id.value))
			watch(
				()=>route.params.id,
				(newId)=>{
					if(route.name==="memory-page"){
						id.value = newId;
					}
				}
			)
			return {memory}
		}
	};
</script>