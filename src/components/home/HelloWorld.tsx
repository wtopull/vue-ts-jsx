import { Component, Prop, Vue, Watch, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  protected render() {
    return (
      <div class='hello'>
        <h1>
          {this.helloMsg}
          {this.type}
        </h1>
      </div>
    );
  }

  // props
  @Prop() private type!: string;
  @Prop() private propMessage2!: string;
  @Prop({ default: 'default value' }) private propB!: string;

  // 初始化 data
  private msg: number = 123;
  private helloMsg = 'Hello, ' + this.propMessage2;
  private emitMsg: string = 'This is emitMsg';

  // watch
  @Watch('msg')
  private onChildChanged(val: number, oldVal: number) {
    if (val > 6) {
      console.log('msg is changed');
    }
  }

  // computed
  get computedMsg() {
    return 'computed ' + this.msg;
  }

  // 生命周期钩子
  private beforeCreate() {
    console.log('beforeCreate');
  }

  private created() {
    this.sayMsg();
  }

  private beforeMount() {
    console.log('beforeMount');
  }

  private mounted() {
    this.greet();
  }

  private beforeUpdate() {
    console.log('beforeUpdate');
  }

  private updated() {
    console.log('updated');
  }

  private beforeDestroy() {
    console.log('beforeDestroy');
  }

  private destroyed() {
    console.log('destroyed');
  }

  // methods
  private sayMsg() {
    console.log('created');
  }

  private showEmit() {
    this.greetEmit(this.emitMsg);
  }

  @Emit()
  private greetEmit(msg: string) {
    console.log('emit');
  }

  private greet() {
    console.log('mounted - greeting: ' + this.msg)
  }
}
