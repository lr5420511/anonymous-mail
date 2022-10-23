import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
    Container,
    Aside,
    Main,
    Carousel,
    CarouselItem,
    Image,
    Progress,
    Form,
    FormItem,
    Input,
    Button,
    ButtonGroup,
    Message
    // Import more components to here!
} from 'element-ui';

Object.assign(Vue.prototype, {
    $message: Message
    // Regist more method components to here!
});

[
    Container,
    Aside,
    Main,
    Carousel,
    CarouselItem,
    Image,
    Progress,
    Form,
    FormItem,
    Input,
    Button,
    ButtonGroup
    // Regist more view components to here!
].reduce((rt, component) => rt.use(component), Vue);