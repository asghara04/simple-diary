import {createStore} from 'vuex';


const store = createStore({
	state(){
		return{
			memories: [
				{
					id: 1,
					title: "Light magazine",
					image: "https://ubuntuarchpaperfriendspals-lightmag.ir/media/2021/04/14/circle-cropped.png",
					description: "Light magazine is an online magazine website developed by asghar ale, pubished in 2021 April"
				},
				{
					id: 2,
					title: "Artificial Inteligence",
					image: 'https://ubuntuarchpaperfriendspals-lightmag.ir/media/2021/04/14/ai.jpg',
					description: "I start to learn Artificial inteligence in one or to week ago and i couldn't becouse google have been filtered some of it's services like tensorflow and google cloub and another reason was my laptop's problems actually my laptop is broken and i have no idea have it's still works!!"
				},
				{
					id: 3,
					title: "Emma",
					image: "https://ubuntuarchpaperfriendspals-lightmag.ir/media/2021/04/14/va.png",
					description: "Emma is my purpose to learning artificial inteligence & machine learning and all of these stuff, basicly emma is an voice assistant right that i built a few days ago and i wanna mixit up with artificial inteligence"},
				{
					id: 4,
					title: "Diary",
					image: "https://ubuntuarchpaperfriendspals-lightmag.ir/media/2021/04/14/D.jpg",
					description: "Diary is actually this app's name i'm learniong ionic wirt vue kinda and i making this application in April 13, 2021 :)"
				}
			]
		}
	},
	getters:{
		memories(state){
			return state.memories;
		},
		memory(state){
			return (id) => {
				return state.memories.find((memory)=>memory.id == id)
			};
		}
	},
	mutations:{
		addMemory(state, data){
			const newMemory = {
				id: new Date().toISOString(),
				title: data.title,
				image: data.image,
				description: data.description
			}

			state.memories.unshift(newMemory);
		}
	},
	actions:{
		addMemory(context, data){
			context.commit("addMemory", data);
		}
	}
});

export default store