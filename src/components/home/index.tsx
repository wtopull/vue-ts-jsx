import { Vue, Component, Watch, Prop } from 'vue-property-decorator'
import "./style.less"
@Component
export default class Jsx extends Vue {
    // data
    public value = ""
    public msg = ""

    // props
    @Prop({ required: false }) private propMsg?: string

    // watch
    @Watch('value')
    protected valueWatch(newValue: any, oldValue: any) {
        this.msg = `监听到属性value发生变化，新的值为：${newValue}`
    }

    // computed
    public get valueLength() {
        return this.value.length
    }

    // methods
    protected handleClick(data: string) {
        console.log(data, '我被点击了')
        this.$post("index/history/kjzb", { loading: true }).then((res: any) => {
            console.log(res);
        })
    }

    protected render() {
        let value
        if (this.valueLength > 0) {
            value = <div>
                <p>{this.msg}</p>
                <p class={{ red: this.valueLength % 2 === 0 }}>{this.valueLength}</p>
            </div>
        }
        return (
            <div class='class1'>
                <input type="text" v-model={this.value} />
                <button onClick={() => this.handleClick(this.msg)}>按钮</button>
                {value}
                <p>{this.propMsg}</p>
            </div>
        )
    }
}