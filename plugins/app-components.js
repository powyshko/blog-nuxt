import Vue from "vue";

//Typography

import BaseH1 from "@/components/typography/BaseH1";
import BaseH2 from "@/components/typography/BaseH2";

Vue.component("BaseH1", BaseH1);
Vue.component("BaseH2", BaseH2);

//UI

import BaseInput from "@/components/UI/BaseInput";
import BaseTextArea from "@/components/UI/BaseTextArea";
import BaseButton from "@/components/UI/BaseButton";

Vue.component("BaseInput", BaseInput);
Vue.component("BaseTextArea", BaseTextArea);
Vue.component("BaseButton", BaseButton);

//Blog

import PostList from "@/components/blog/PostList";

Vue.component("PostList", PostList);

//Message

import Message from "@/components/Message";

Vue.component("Message", Message);
