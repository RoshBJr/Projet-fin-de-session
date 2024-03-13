export default class carousel {
  carouselCtn: any;
  postIndex: number;
  btnNxt: HTMLElement | null;
  btnPrev: HTMLElement | null;
  awaitScroll: boolean;

  constructor() {
    this.carouselCtn = document.querySelector(".carousel-container");
    this.postIndex = 0;
    this.btnNxt = document.getElementById("nextBtn");
    this.btnPrev = document.getElementById("prevBtn");
    this.awaitScroll = false;
  }

  async initialize() {
    if (this.carouselCtn) {
      this.zIndex(this.carouselCtn?.children[this.postIndex]);
    }
  }

  zIndex(post: HTMLElement) {
    post.classList.add("_show");
  }

  async autoScroll() {
    setInterval(() => {
      if (this.awaitScroll || !this.carouselCtn) return;
      this.nextSlide(
        this.carouselCtn?.children,
        this.carouselCtn.childElementCount - 1
      );
    }, 10000);
  }

  async eventListener() {
    this.btnNxt?.addEventListener("click", () => {
      if (this.awaitScroll || !this.carouselCtn) return;
      this.nextSlide(
        this.carouselCtn?.children,
        this.carouselCtn.childElementCount - 1
      );
    });

    this.btnPrev?.addEventListener("click", () => {
      if (this.awaitScroll || !this.carouselCtn) return;
      this.prevSlide(
        this.carouselCtn.children,
        this.carouselCtn.childElementCount - 1
      );
    });
  }

  showDomEls() {
    console.log(this.carouselCtn?.childElementCount);
    console.log(this.btnNxt);
    console.log(this.btnPrev);
  }

  showCarouselEls() {
    console.log(this.carouselCtn);
  }

  nextSlide(post: HTMLCollection, lastPostCount: number) {
    this.awaitScroll = true;
    let prevPost = this.postIndex;
    post[this.postIndex].classList.add("slide-out-left");
    this.postIndex += 1;
    if (this.postIndex > lastPostCount) this.postIndex = 0;
    post[this.postIndex].classList.add("_show");
    post[this.postIndex].classList.add("slide-in-right");

    setTimeout(() => {
      post[prevPost].classList.remove("_show");
      post[prevPost].classList.remove("slide-out-left");
      post[this.postIndex].classList.remove("slide-in-right");
      this.awaitScroll = false;
    }, 1000);
  }

  prevSlide(post: HTMLCollection, lastPostCount: number) {
    this.awaitScroll = true;
    let prevPost = this.postIndex;
    post[this.postIndex].classList.add("slide-out-right");
    this.postIndex -= 1;
    if (this.postIndex < 0) this.postIndex = lastPostCount;
    post[this.postIndex].classList.add("_show");
    post[this.postIndex].classList.add("slide-in-left");

    setTimeout(() => {
      post[prevPost].classList.remove("_show");
      post[prevPost].classList.remove("slide-out-right");
      post[this.postIndex].classList.remove("slide-in-left");
      this.awaitScroll = false;
    }, 1000);
  }
}
