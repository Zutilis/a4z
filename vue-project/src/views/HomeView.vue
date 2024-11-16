<template>
  <main>
    <div class="main-bg bg-none">
      <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="bg-layer blur"
          :style="{
            backgroundImage: `url(${project.image_low_src}${project.image_cover}.webp)`,
            opacity: sliderOpacity(index),
          }"
        ></div>
    </div>
    <div class="slider">
      <div class="slider-images">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          :class="['slider-img-item', getImageClass(index)]"
        >
          <router-link
            :to="{ name: 'project', params: { id: project.id } }"
            class="slider-img-link"
          ></router-link>
          <ImageItem
            :ref="'imageItem-' + index"
            :src="`${project.image_src}${project.image_cover}.webp`"
            :lowResSrc="`${project.image_low_src}${project.image_cover}.webp`"
            imgClass="slider-img"
            alt=""
            class="slider-img rounded shadow"
            @click="handleImageClick(index)"
          />
          <div 
            :class="['slider-label', 'shadow', 'glass', getLabelClass(project.date)]"
          >
            <span class="notify"></span>
            <p>{{ project.date }}</p>
          </div>
        </div>
      </div>
      <div class="slider-footer">
        <div class="slider-ds">
          <h3>{{ sliderTitle }}</h3>
          <h4>{{ sliderSubtitle }}</h4>
        </div>
        <div class="slider-nav">
          <div class="slider-previous" @click="throttledSlidePrevious">
            <img src="/svg/triangle.svg" alt="" :class="[{bounce:isBouncePrevious}]"/>
            <img src="/svg/triangle.svg" alt="" :class="[{bounce:isBouncePrevious}]"/>
          </div>
          <div class="slider-next" @click="throttledSlideNext">
            <img src="/svg/triangle.svg" alt="" :class="[{bounce:isBounceNext}]"/>
            <img src="/svg/triangle.svg" alt="" :class="[{bounce:isBounceNext}]"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import projectsData from '@/assets/json/projects.json';
import ImageItem from '@/components/ImageItem.vue';

export default {
  data() {
    return {
      projects: projectsData.projects,
      currentIndex: 0,
      isThrottled: false,
      isBouncePrevious: false,
      isBounceNext: false,
    };
  },
  components: {
		ImageItem,
	},
  computed: {
    sliderTitle() {
      return this.projects[this.currentIndex].title;
    },
    sliderSubtitle() {
      return this.projects[this.currentIndex].subtitle;
    }
  },
  methods: {
    sliderBgStyle(index) {
      const project = this.projects[index];
      return {
        backgroundImage: `url(${project.image_low_src}${project.image_cover}.webp)`,
      };
    },
    sliderOpacity(index) {
      return index === this.currentIndex ? 1 : 0;
    },
    throttledSlideNext() {
      if (!this.isThrottled) {
        this.slideNext();
        this.startThrottle();
      }
    },
    throttledSlidePrevious() {
      if (!this.isThrottled) {
        this.slidePrevious();
        this.startThrottle();
      }
    },
    startThrottle() {
      this.isThrottled = true;
      setTimeout(() => {
        this.isThrottled = false;
        this.isBounceNext = false;
        this.isBouncePrevious = false;
      }, 600);
    },
    slideNext() {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.isBounceNext = true;
    },
    slidePrevious() {
      this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
      this.isBouncePrevious = true;
    },
    getLabelClass(date) {
      return date === "Prochainement" ? "soon" : "";
    },
    getImageClass(index) {
      const diff = (index - this.currentIndex + this.projects.length) % this.projects.length;
      switch (diff) {
        case 0:
          return "main";
        case 1:
          return "next";
        case 2:
          return "next2";
        case this.projects.length - 1:
          return "previous";
        case this.projects.length - 2:
          return "previous2";
        default:
          return "";
      }
    },
    handleImageClick(index) {
      if (this.isThrottled) return;

      const diff = (index - this.currentIndex + this.projects.length) % this.projects.length;
      if (diff === 1) {
        this.throttledSlideNext();
      } else if (diff === this.projects.length - 1) {
        this.throttledSlidePrevious();
      } else if (diff === 0) {

      }
    },
  },
};
</script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
}

.slider {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--padding-vertical) 0;
  overflow: hidden;
  box-sizing: border-box;
}

.slider-images {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  bottom: 0;
  overflow: hidden;
}

.slider-img-item {
  position: absolute;
  width: 32%;
  height: 38%;
  opacity: 0;
  user-select: none;
  transition: opacity .5s ease-in-out, transform .5s ease-in-out;
}
.slider-img-item .slider-img-link,
.slider-img-item img  {
  width: 100%;
  height: 100%;
}
.slider-img-item .slider-img-link {
  display: none;
  position: absolute;
}
.slider-img-item.main .slider-img-link {
  display: block;
  z-index: 10;
}

.slider-img-item.main {
  z-index: 12;
  transform: scale(1.5);
}

.slider-img-item.previous,
.slider-img-item.next {
  cursor: pointer;
}

.slider-img-item.previous,
.slider-img-item.next,
.slider-img-item.main {
  opacity: 1;
}

.slider-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider-img-item.previous {
  display: block;
  transform: translateX(-160%);
}

.slider-img-item.previous2 {
  opacity: 0;
  transform: translateX(-320%);
}

.slider-img-item.next {
  transform: translateX(160%);
}

.slider-img-item.next2 {
  opacity: 0;
  transform: translateX(320%);
}

.slider-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: absolute;
  box-sizing: border-box;
  padding: .2rem .5rem;
  top: 10px;
  right: 10px;
}

.slider-label.soon p {
  font-family: PoppinsBold;
}

.slider-label span.notify {
  display: none;
}

.slider-label.soon span.notify {
  display: block;
}

.slider-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  width: 100%;
  bottom: 5%;
  padding: 0 var(--padding-horizontal);
}

.slider-nav {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  gap: 35%;
}

.slider-ds {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
}

.slider-previous,
.slider-next {
  display: flex;
  flex-direction: row;
  cursor: pointer;
  user-select: none;
}

.slider-previous img,
.slider-next img {
  height: 3.75rem;
  width: 3.75rem;
}



@keyframes bouncePrevious1 {
  0%, 100% {
    transform: translateX(-1.75rem) rotate(-90deg);
  }
  50% {
    transform: translateX(-2.5rem) rotate(-90deg);
  }
}
.slider-previous img:nth-child(2) {
  transform: translateX(-1.75rem) rotate(-90deg);
}
.slider-previous img:nth-child(2).bounce {
  animation: bouncePrevious1 .4s ease-in-out;
}

@keyframes bouncePrevious2 {
  0%, 100% {
    transform: rotate(-90deg);
  }
  50% {
    transform: translateX(-0.5rem) rotate(-90deg);
  }
}
.slider-previous img:nth-child(1) {
  transform: rotate(-90deg);
}
.slider-previous img:nth-child(1).bounce {
  animation: bouncePrevious2 .4s ease-in-out;
  animation-delay: 100ms;
}



@keyframes bounceNext1 {
  0%, 100% {
    transform: translateX(1.75rem) rotate(90deg);
  }
  50% {
    transform: translateX(2.5rem) rotate(90deg);
  }
}
.slider-next img:nth-child(1) {
  transform: translateX(1.75rem) rotate(90deg);
}
.slider-next img:nth-child(1).bounce {
  animation: bounceNext1 .4s ease-in-out;
}

@keyframes bounceNext2 {
  0%, 100% {
    transform: rotate(90deg);
  }
  50% {
    transform: translateX(.5rem) rotate(90deg);
  }
}
.slider-next img:nth-child(2) {
  transform: rotate(90deg);
}
.slider-next img:nth-child(2).bounce {
  animation: bounceNext2 .4s ease-in-out;
  animation-delay: 100ms;
}

</style>