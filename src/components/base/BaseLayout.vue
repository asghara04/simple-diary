<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button :default-href="ParentPage"></ion-back-button>
				</ion-buttons>
				<ion-title>{{PageTitle}}</ion-title>
				<ion-buttons slot="end">
					<slot name="actions-end"></slot>
				</ion-buttons>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<slot/>
		</ion-content>
	</ion-page>
</template>
<script>
	import {IonPage, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonContent} from '@ionic/vue';

	export default{
		name: "BaseLayout",
		props: ["PageTitle", "ParentPage"],
		components:{
			IonPage,
			IonHeader,
			IonTitle,
			IonToolbar,
			IonBackButton,
			IonButtons,
			IonContent
		},
	};
</script>