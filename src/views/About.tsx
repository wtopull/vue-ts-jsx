import { Vue, Component } from 'vue-property-decorator';

@Component
export default class About extends Vue {
    // data
    private txt = 'This is an about page';

    protected render() {
        return (
            <div class='about'>
                <h1>{this.txt}</h1>
            </div>
        );
    }
}