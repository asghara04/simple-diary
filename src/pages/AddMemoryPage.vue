<template>
	<base-layout PageTitle="Add a Memory" ParentPage="/memories">
		<create-memory-form @save-memory="save_memory"></create-memory-form>
	</base-layout>
</template>
<script>
	import CreateMemoryForm from '@/components/memories/CreateMemoryForm.vue';
	import {useStore} from 'vuex';
	import {useRouter} from 'vue-router';
	export default{
		name: "AddMemoryPage",
		components:{
			CreateMemoryForm
		},
		setup(){
			const store = useStore();
			const router = useRouter();
			async function save_memory(data){
				try{
					store.dispatch("addMemory", data);
					router.replace("/memories")
				}catch(err){
					console.log(err)
				}
			}
			return{save_memory}
		}
	};
</script>