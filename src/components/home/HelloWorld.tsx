import { Component, Prop, Vue, Watch, Emit } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {

  protected render() {
    <div class="hello">
      <h1>{this.helloMsg}{this.type}</h1>
    </div>
  }

  // props
  @Prop() private type!: string;
  @Prop() private propMessage2!: string;
  @Prop({ default: "default value" }) private propB!: string;

  // 初始化 data
  private msg: number = 123;
  private helloMsg = "Hello, " + this.propMessage2;
  private emitMsg: string = "This is emitMsg";

  // watch
  @Watch("msg")
  onChildChanged(val: number, oldVal: number) {
    if (val > 6) {
      console.log("msg is changed");
    }
  }

  // computed
  get computedMsg() {
    return "computed " + this.msg;
  }

  // 生命周期钩子
  beforeCreate() {
    console.log("beforeCreate");
  }

  created() {
    this.sayMsg();
  }

  beforeMount() {
    console.log("beforeMount");
  }

  mounted() {
    this.greet();
  }

  beforeUpdate() {
    console.log("beforeUpdate");
  }

  updated() {
    console.log("updated");
  }

  beforeDestroy() {
    console.log("beforeDestroy");
  }

  destroyed() {
    console.log("destroyed");
  }

  // methods
  sayMsg() {
    console.log("created");
  }

  showEmit() {
    this.greetEmit(this.emitMsg);
  }

  @Emit()
  public greetEmit(msg: string) {
    console.log("emit");
  }

  greet() {
    console.log("mounted - greeting: " + this.msg);
  }
}