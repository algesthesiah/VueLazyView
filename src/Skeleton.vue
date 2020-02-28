<template functional>
  <div class="container">
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
    <div class="load-container">
      <div class="load-list-con load-fir">
        <div class="fir"></div>
      </div>
      <div class="load-list-con load-sec">
        <div class="sec"></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  .load-container {
    .load-list-con {
      .fir,
      .sec {
        height: 15px;
        margin: 7px 0 0;
        background: #eeeeee;
        position: relative;
        overflow: hidden;
        @keyframes loading {
          100% {
            transform: translateX(100%);
          }
        }
        &::after {
          background-color: #e4e3e3;
          animation: cubic-bezier(0.25, 0.8, 0.5, 1) loading 1.5s infinite;
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transform: translateX(-100%);
          z-index: 1;
        }
      }
    }
    .load-fir {
      padding-left: 80px;
    }
    .load-sec {
      padding-left: 15px;
    }
  }
}
</style>
