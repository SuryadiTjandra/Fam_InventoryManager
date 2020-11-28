<!--<template functional>
  <component :is="isArray(props.value)? NaviMenuDropdown: NaviMenuButton"
    :text="props.text"
    :value="props.value"
    @navi-click="listeners.naviClick">
  </component>
</template>-->

<script>
import NaviMenuButton from "./NaviMenuButton.vue";
import NaviMenuDropdown from "./NaviMenuDropdown.vue";
import isNil from "lodash/isNil";
import isEmpty from "lodash/isEmpty";

/**render NaviMenuDropdown if props have children, NaviMenuButton otherwise*/
export default {
  functional: true,
  components: {NaviMenuButton, NaviMenuDropdown},
  props: {
    name: String,
    id: String,
    children: Array,
    depth: Number
  },
  render(create, context){
    let props = {
      name: context.props.name,
      id: context.props.id
    };
    let on = {
      'navi-click': context.listeners['navi-click']
    };
    if (isNil(context.props.children) || isEmpty(context.props.children)){
      return create(NaviMenuButton, {props, on});
    } else {
      props = Object.assign(props, {
        children: context.props.children,
        depth: context.props.depth
      });
      return create(NaviMenuDropdown, {props, on});
    }
  }
  /*computed: {
    renderedComponent(){
      return isArray(this.value) ? NaviMenuDropdown: NaviMenuButton;
    }
  },
  methods: {
    onNaviClick(naviValue){
      this.$emit('navi-click', naviValue);
    }
  }*/
}
</script>
