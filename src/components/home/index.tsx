import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import api from '@/assets/js/http';
import '@/components/home/style.less';
@Component
export default class Jsx extends Vue {
    public value = '';
    public msg = '';

    // props
    @Prop({ required: false }) private propMsg?: string;

    // watch
    @Watch('value')
    valueWatch(newValue: string) {
        this.msg = `监听到属性value发生变化，新的值为：${newValue}`;
    }

    // computed
    get valueLength() {
        return this.value.length;
    }

    // methods
    handleClick(data: string) {
        if (data) {
            const loading: object = { 'loading': true };
            api.postData('index/history/kjzb', { ...loading }).then((res: any) => {
                this.$toast({
                    message: '操作成功！',
                    duration: 1600
                });
            });
        } else {
            this.$notify({ type: 'danger', message: '您并未输入内容' });
        }
    }

    protected render() {
        let value;
        if (this.valueLength > 0) {
            value = <div>
                <p>{this.msg}</p>
                <p class={{ red: this.valueLength % 2 === 0 }}>{this.valueLength}</p>
            </div>;
        }
        return (
            <div class='class1'>
                <input type='text' v-model={this.value} />
                <button onClick={() => this.handleClick(this.msg)}>按钮</button>
                {value}
                <p>{this.propMsg}</p>
            </div>
        );
    }
}
