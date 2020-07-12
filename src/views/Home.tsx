import { Vue, Component } from 'vue-property-decorator';
import homePage from '@/components/home/index.tsx';
@Component({
    components: {
        homePage,
    },
})
export default class Home extends Vue {
    protected render() {
        return (
            <div class='home'>
                <home-page propMsg='我是父组件' />
            </div>
        );
    }
}