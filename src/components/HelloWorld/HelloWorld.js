export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    count: 0,
    input: '',
  }),
};
