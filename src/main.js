import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyComponent from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Input, Pagination, Menu,
	Submenu, MenuItem, Carousel, CarouselItem,
	Dialog, Form, FormItem, Select,
	DatePicker, Message, Container, Aside,
	RadioGroup, RadioButton, Radio,
	Upload, Option, Drawer} from 'element-ui';
	
import { Swipe, SwipeItem,Lazyload, Tabbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(Lazyload);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.use(Button)
Vue.use(Input)
Vue.use(Pagination)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(DatePicker)
Vue.use(Container)
Vue.use(Aside)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Option)
Vue.use(Drawer)
Vue.use(VueLazyComponent)


Vue.prototype.$message = Message
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
