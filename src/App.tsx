import { Vue, Component } from 'vue-property-decorator'
import "@/app.less"
@Component
export default class About extends Vue {
    protected render() {
        return (
            <div id="app">
                <div id="nav">
                    <router-link to="/">Home</router-link> |
                    <router-link to="/about">About</router-link>
                </div>
                <router-view />
            </div>
        )
    }
}