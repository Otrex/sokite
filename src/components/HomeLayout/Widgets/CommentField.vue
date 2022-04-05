<template>
	<div class="comment__field-container">
		<div class="comment__field-img-container">
			<div class="comment__field-img" >
				<img :src="posterIMGsrc"/><span v-if="!posterIMGsrc">{{posterInitials}}</span>
			</div>
		</div>
		<div class="comment__field-text-container">
			<input type="text" maxlength="2000" placeholder="Enter Your Comments Here" v-model="comment" @keyup.enter="sendComment"/>
		</div>
		<!--<div class="comment__field-snd-btn-container">
			<a href="" class="comment__field-snd-btn">
				<img src="/img/custom_icons/send-icon.svg">
			</a>
		</div>-->
	</div>
</template>
<script >
	export default {
		name : "CommentField",
		props : {
			postID : Number,
			posterIMGsrc : String,
			posterInitials : String
		},
		data() {
			return {
				comment : ""
			}
		},
		methods : {
			sendComment : function(){
				if (this.comment === "") return
				alert("message sent..")

				// Send message together with postId
			}
		}
	};
</script>
<style lang="scss">
@import "../../../styles/components/HomeLayout/Widgets/commentfield.scss";
</style>