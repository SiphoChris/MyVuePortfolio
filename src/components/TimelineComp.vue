   <template>
    <div class="timeline">
      <div
        v-for="(item, index) in timeline"
        :key="item.id"
        :class="['container', index % 2 === 0 ? 'left' : 'right']"
      >
        <div class="content">
          <h2>{{ item.year }}</h2>
          <p class="fw-bold">{{ item.place }}</p>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "TimelineComp",
    props: {
      timeline: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
  }
  
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }
  
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }
  
  .container::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  
  .left {
    left: -25%;
  }
  
  .right {
    left: 25%;
  }
  
  .left::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
  }
  
  .left::after {
    right: -16px;
  }
  
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
  
  .right::after {
    left: -16px;
  }
  
  .content {
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
  }
  
  @media screen and (max-width: 600px) {
    .timeline::after {
      display: none; 
    }
  
    .container {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 20px;
    }
  
    .left, .right {
      left: 0;
      transform: translateX(0);
    }
  
    .container::after, .container::before {
      display: none;
    }
  
    .content {
      margin: 0 auto; 
      max-width: 500px; 
    }
  }
  </style>
  