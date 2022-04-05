<template>
	<div class="comment">
		<div class="comment__container">
			<ul @click='displayAll = !displayAll'>
				<li v-for="(comment, key) in xcomments" 
					:class="{'comment__list': true, 'them': comment.username !== me, 'all': displayAll }" >
					<div class="comment__avatar">
						<img :src="comment.avatar"/>
					</div>
					<div class="comment__comment">{{comment.comment}}</div>
				</li>
			</ul>
		</div>
		<CommentField :postID="postId" :posterIMGsrc="postImg" :posterInitials="postInitials"/>
	</div>
</template>
<script >
import _comments from '../../../mock/comments'
import CommentField from './CommentField.vue'

export default {
	name : "Comment",
	props : {
		postId:Number,
		postImg : String,
		postInitials : String
	},
	computed : {
		xcomments : function (){
			let comment = this.comments
			if (!this.comments) return []
			return this.comments.comments
		}
	},
	data(){
		return {
			displayAll : false,
			me : '',
			comments : _comments.find(comment => comment.post_id == this.postId)
		}
	},
	components : {
		CommentField
	}
};
	
</script>
<style lang="scss" scope>
@import "../../../styles/components/HomeLayout/Widgets/comments.scss";
</style>