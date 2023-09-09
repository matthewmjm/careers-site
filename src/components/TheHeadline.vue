<template>
  <section>
    <h1>
      <span :class="actionClasses">{{ action  }}</span>
      <br /> For Everyone</h1>
    <h2>Find Your Next Job at The FacePlace</h2>
  </section>
</template>

<script>
export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  computed: {
    actionClasses() {
      return {
        build: this.action ==="Build",
        create: this.action ==="Create",
        design: this.action ==="Design",
        code: this.action ==="Code",
      }
    },
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        const currentActionIndex = actions.indexOf(this.action);
        const nextActionIndex = (currentActionIndex + 1) % 4;
        const nextAction = actions[nextActionIndex];
        this.action = nextAction;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}

</style>