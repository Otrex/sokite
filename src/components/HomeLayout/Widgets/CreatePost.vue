<template>
  <div class="createpost mt-3">
    <p class="text-left">Create a Post</p>
    <ValidationObserver v-slot="{ invalid }">
      <form @submit.prevent="handleSubmit">

        <div class="createpost__textarea">
            <textarea v-model="postData.caption"
              class="form-control"
              placeholder="Write a caption"
            ></textarea>
        </div>

        <div
          class="createpost__action d-flex align-items-center justify-content-between mt-2"
        >
          <div class="createpost__action--icons d-flex align-items-center">
            <div class="createpost__action--icons-image clickable" @click="chooseImage">
              <img src="/img/custom_icons/image icon.svg"/>
            </div>

            <div class="createpost__action--icons-video clickable ml-3" @click="chooseVideo">
              <img src="/img/custom_icons/video.svg"/>
            </div>
          </div>

          <div class="createpost__action__select d-flex align-items-center ml-2">
            <select v-model="postData.category" class="form-control" required>
              <option selected value="">- select folder -</option>
              <option v-for="(cat, index) in postCategories" :key="index"
                      :value="cat.type" class="form-control">{{ cat.text }}
              </option>
            </select>
          </div>
        </div>

        <!--    <div class="base-image-input" :style="bg" @click="chooseImage">-->

        <div v-if="hasLoadedImage" class="createpost__action col-8 mx-auto mt-1"
        >
          <div class="d-flex align-items-center justify-content-between my-2">
            <small class="theme-primary">preview</small>
            <small class="text-danger" style="cursor: pointer" @click="unLoadImage">
              <u>cancel</u>
            </small>
          </div>

          <div :style="bg" class="base-image-input w-100"></div>
        </div>


        <div v-if="hasLoadedVideo" class="createpost__action col-8 mx-auto mt-1"
        >
          <div class="d-flex align-items-center justify-content-between my-2">
            <small class="theme-primary">preview</small>
            <small class="text-danger" style="cursor: pointer" @click="unLoadVideo">
              <u>cancel</u>
            </small>
          </div>

          <video ref="videoTag" class="base-video-input" controls>
            <source ref="videoSource" :src="vid">
            Your browser does not support the video tag.
          </video>
        </div>

        <input ref="inputTag" accept="video/*" class="file-input" type="file" @input="readVideo"/>
        <input ref="fileInput" accept="image/*" class="file-input" type="file" @input="onSelectFile"/>
        <!--        </div>-->

        <div class="createpost__action d-flex align-items-center justify-content-between mt-2">
          <div
            v-if="message"
            :class="successful ? 'text-success error' : 'text-danger error'"
          >{{ message }}
          </div>
        </div>

        <div
          class="createpost__action d-flex align-items-center justify-content-between mt-2"
        >
          <div v-if="isCustomPost" class="createpost__action__input mr-2">
            <ValidationProvider v-slot="{ errors }" name="price" rules="minOrNone">
              <input v-model="postData.price" autocomplete="off" class="form-control"
                     placeholder="amount in USD" required type="text">
            </ValidationProvider>
          </div>

          <div class="createpost__action--btn">
            <button :disabled="invalid || loading || !selectedCategory || !(hasLoadedImage || hasLoadedVideo)" class="d-flex align-items-center" type="submit">
              <span v-show="loading" class="spinner-border spinner-border-sm"></span>
              <span> POST</span>
            </button>
          </div>
        </div>


      </form>
    </ValidationObserver>
  </div>
</template>
<script>
import postCategories from "../../../mock/postCategories";
import UserService from '../../../services/user/user.service';

export default {
  name: 'CreatePost',
  data() {
    return {
      postCategories,
      message: null,
      loading: false,
      successful: null,
      postData: {
        price: '0', //
        category: '',
        caption: '',
        s3key: null
      },
      amount: null,
      loadedImage: '',
      loadedVideo: '',
      filename: null,
      filetype: null,
      binary: null,
    }
  },
  methods: {
    handleSubmit() {
      if(this.postData.category === 'FREE'){
        this.postData.price = '0';
      }

      this.generateURL();
    },
    generateURL(){
      this.loading = true;
      this.message = null;

      let data = {
        "filename":this.filename,
        "mimetype": this.filetype,
        "category": this.postData.category
      };

      UserService.getSignedURL(data).then(
        res => {
          this.postData.s3key = res.data.data.filename;
          this.uploadToS3(res.data.data.url);
        },
        error => {
          if (error.response) {
            this.message = error.response.data.message;
          } else if (error.request) {
            this.message = "Check your internet connection"
          } else {
            this.message = "An error occurred"
          }
          this.loading = false;
          this.successful = false;
        }
      );
    },
    uploadToS3(url){
      this.$Progress.start();
      UserService.s3UploadMedia(url,this.binary,this.filetype).then(
        res => {
          this.createPost();
        },
        error => {
          this.$Progress.fail();
          if (error.response) {
            this.message = error.response.data.message;
          } else if (error.request) {
            this.message = "Check your internet connection"
          } else {
            // console.log({error});
            this.message = "An error occurred ggg"
          }
          this.loading = false;
          this.successful = false;
        }
      );
    },
    createPost(){
      UserService.postCreate(this.postData).then(
        res => {
          this.$Progress.finish();
          this.successful = true;
          this.loading = false;
          this.unLoadImage();
          this.unLoadVideo();
          this.postData.caption = '';
          this.message = 'your post has been created!';
          // console.log(res)
        },
        error => {
          this.$Progress.fail();
          if (error.response) {
            this.message = error.response.data.message;
          } else if (error.request) {
            this.message = "Check your internet connection"
          } else {
            this.message = "An error occurred"
          }
          this.loading = false;
          this.successful = false;
        }
      );
    },
    unLoadImage() {
      this.loadedImage = '';
      this.binary= null;
    },
    unLoadVideo() {
      this.loadedVideo = '';
      this.binary= null;
    },
    chooseImage() {
      this.$refs.fileInput.click();
    },
    chooseVideo() {
      this.$refs.inputTag.click();
    },
    onSelectFile() {
      this.unLoadVideo();
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        this.filename = files[0].name.replace(/\.[^/.]+$/, "");
        this.filetype = files[0].type;
        this.binary = files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.loadedImage = e.target.result;
        };
        reader.readAsDataURL(files[0]);
      }
    },
    readVideo() {
      this.unLoadImage();
      const input = this.$refs.inputTag;
      // const videoTag = this.$refs.videoTag;
      const files = input.files;
      if ( files && files[0]) {
        this.filename = files[0].name.replace(/\.[^/.]+$/, "");
        this.filetype = files[0].type;
        this.binary = files[0];
        const reader = new FileReader();
        reader.onload = e => {
          this.loadedVideo = e.target.result;
          // videoTag.load();
        };
        reader.readAsDataURL(files[0]);
      }
    }

  },
  computed: {
    isCustomPost() {
      return this.postData.category === 'FIXED-PAY';
    },
    selectedCategory() {
      return this.postData.category !== "";
    },
    bg() {
      return `background-image: url(${this.loadedImage || 'https://via.placeholder.com/150'});`
    },
    vid() {
      return this.loadedVideo;
    },
    hasLoadedImage() {
      return this.loadedImage !== '';
    },
    hasLoadedVideo() {
      return this.loadedVideo !== '';
    }
  },


};
</script>

<style>
.base-image-input {
  display: block;
  width: 121px;
  height: 121px;
  background-size: cover;
  background-position: center center;
}
.base-video-input {
  display: block;
  width: 150px;
  height: 150px;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #dee2e6;
}

.file-input {
  display: none;
}
</style>
<style lang="scss" scoped>
@import "../../../styles/components/HomeLayout/Widgets/createpost.scss";
</style>
